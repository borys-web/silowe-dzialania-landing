#!/usr/bin/env python3
"""Wycina tło ze screenshotów — flood-fill + defringe, bez halo na krawędziach."""

from __future__ import annotations

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "reviews"
OUT = SRC / "cutouts"


def trim(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def flood_fill_mask(is_candidate: np.ndarray) -> np.ndarray:
    h, w = is_candidate.shape
    visited = np.zeros((h, w), dtype=bool)
    remove = np.zeros((h, w), dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            if is_candidate[y, x] and not visited[y, x]:
                visited[y, x] = True
                queue.append((y, x))
    for y in range(h):
        for x in (0, w - 1):
            if is_candidate[y, x] and not visited[y, x]:
                visited[y, x] = True
                queue.append((y, x))

    while queue:
        y, x = queue.popleft()
        remove[y, x] = True
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and is_candidate[ny, nx]:
                visited[ny, nx] = True
                queue.append((ny, nx))

    return remove


def neighbors_transparent(alpha: np.ndarray) -> np.ndarray:
    h, w = alpha.shape
    t = alpha == 0
    out = np.zeros((h, w), dtype=bool)
    for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (-1, 1), (1, -1), (1, 1)):
        shifted = np.zeros_like(t)
        ys = slice(max(0, -dy), h - max(0, dy))
        xs = slice(max(0, -dx), w - max(0, dx))
        yd = slice(max(0, dy), h - max(0, -dy))
        xd = slice(max(0, dx), w - max(0, -dx))
        shifted[yd, xd] = t[ys, xs]
        out |= shifted
    return out


def cutout_light(path: Path, out: Path) -> None:
    data = np.array(Image.open(path).convert("RGBA"), dtype=np.uint8)
    rgb = data[:, :, :3].astype(np.int16)
    min_rgb = np.min(rgb, axis=2)

    # Tło: białe piksele połączone z krawędzią
    remove = flood_fill_mask(min_rgb >= 250)
    alpha = np.where(remove, 0, 255).astype(np.uint8)

    # Defringe: jasne piksele przy krawędzi przezroczystości (halo po wycinaniu)
    fringe = (min_rgb >= 246) & neighbors_transparent(alpha)
    alpha[fringe] = 0

    data[:, :, 3] = alpha
    trim(Image.fromarray(data)).save(out, compress_level=1)


def cutout_dark(path: Path, out: Path) -> None:
    data = np.array(Image.open(path).convert("RGBA"), dtype=np.uint8)
    rgb = data[:, :, :3].astype(np.int16)
    max_rgb = np.max(rgb, axis=2)

    # Próbka tła z krawędzi — na dark mode nie jest czyste #000
    edge_samples = np.concatenate(
        [
            rgb[0, :, :].reshape(-1, 3),
            rgb[-1, :, :].reshape(-1, 3),
            rgb[:, 0, :].reshape(-1, 3),
            rgb[:, -1, :].reshape(-1, 3),
        ],
    )
    bg_level = int(np.percentile(np.max(edge_samples, axis=1), 90)) + 2

    remove = flood_fill_mask(max_rgb <= bg_level)
    alpha = np.where(remove, 0, 255).astype(np.uint8)

    # Defringe ciemnych pikseli przy krawędzi
    fringe = (max_rgb <= bg_level + 4) & neighbors_transparent(alpha)
    alpha[fringe] = 0

    data[:, :, 3] = alpha
    trim(Image.fromarray(data)).save(out, compress_level=1)


def audit(path: Path) -> None:
    data = np.array(Image.open(path).convert("RGBA"))
    alpha = data[:, :, 3]
    rgb = data[:, :, :3]
    h, w = alpha.shape
    corners = [alpha[0, 0], alpha[0, w - 1], alpha[h - 1, 0], alpha[h - 1, w - 1]]
    fringe_light = ((alpha > 0) & (np.min(rgb, axis=2) >= 248)).sum()
    fringe_dark = ((alpha > 0) & (np.max(rgb, axis=2) <= 22)).sum()
    print(
        path.name,
        data.shape[1::-1],
        "corner_alpha",
        corners,
        "light_fringe",
        int(fringe_light),
        "dark_fringe",
        int(fringe_dark),
    )


def main() -> None:
    OUT.mkdir(exist_ok=True)
    cutout_light(SRC / "avatar-1.png", OUT / "review-1.png")
    cutout_light(SRC / "avatar-2.png", OUT / "review-2.png")
    cutout_light(SRC / "avatar-3.png", OUT / "review-3.png")
    cutout_dark(SRC / "avatar-4.png", OUT / "review-4.png")
    print("--- audit ---")
    for p in sorted(OUT.glob("review-*.png")):
        audit(p)


if __name__ == "__main__":
    main()
