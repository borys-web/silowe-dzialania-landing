#!/usr/bin/env python3
"""Wycina tło ze screenshotów — flood-fill od krawędzi, bez psucia krawędzi bańek."""

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


def apply_alpha(data: np.ndarray, remove: np.ndarray) -> np.ndarray:
    alpha = np.where(remove, 0, 255).astype(np.uint8)
    data[:, :, 3] = alpha
    return data


def cutout_light(path: Path, out: Path, white_min: int = 248) -> None:
    data = np.array(Image.open(path).convert("RGBA"), dtype=np.uint8)
    rgb = data[:, :, :3].astype(np.int16)
    min_rgb = np.min(rgb, axis=2)
    is_candidate = min_rgb >= white_min
    remove = flood_fill_mask(is_candidate)
    data = apply_alpha(data, remove)
    trim(Image.fromarray(data)).save(out, compress_level=3)


def cutout_dark(path: Path, out: Path, dark_max: int = 14) -> None:
    data = np.array(Image.open(path).convert("RGBA"), dtype=np.uint8)
    rgb = data[:, :, :3].astype(np.int16)
    max_rgb = np.max(rgb, axis=2)
    is_candidate = max_rgb <= dark_max
    remove = flood_fill_mask(is_candidate)
    data = apply_alpha(data, remove)
    trim(Image.fromarray(data)).save(out, compress_level=3)


def main() -> None:
    OUT.mkdir(exist_ok=True)
    cutout_light(SRC / "avatar-1.png", OUT / "review-1.png")
    cutout_light(SRC / "avatar-2.png", OUT / "review-2.png")
    cutout_light(SRC / "avatar-3.png", OUT / "review-3.png")
    cutout_dark(SRC / "avatar-4.png", OUT / "review-4.png")
    for p in sorted(OUT.glob("review-*.png")):
        print(p.name, Image.open(p).size)


if __name__ == "__main__":
    main()
