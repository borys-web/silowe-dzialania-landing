#!/usr/bin/env python3
"""Wycina tło ze screenshotów opinii — zostawia bańkę + awatar."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "reviews"
OUT = SRC / "cutouts"


def trim(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def cutout_light(path: Path, out: Path, white_min: int = 245) -> None:
    data = np.array(Image.open(path).convert("RGBA"), dtype=np.uint8)
    rgb = data[:, :, :3].astype(np.int16)
    min_rgb = np.min(rgb, axis=2)
    alpha = np.full(min_rgb.shape, 255, dtype=np.uint8)
    alpha[min_rgb >= white_min] = 0
    band = (min_rgb >= white_min - 6) & (min_rgb < white_min)
    alpha[band] = ((white_min - min_rgb[band]) * 42).astype(np.uint8)
    data[:, :, 3] = alpha
    trim(Image.fromarray(data)).save(out, optimize=True)


def cutout_dark(path: Path, out: Path) -> None:
    data = np.array(Image.open(path).convert("RGBA"), dtype=np.uint8)
    rgb = data[:, :, :3].astype(np.int16)
    lum = np.max(rgb, axis=2)
    alpha = np.where(lum <= 16, 0, 255).astype(np.uint8)
    band = (lum > 16) & (lum <= 24)
    alpha[band] = ((lum[band] - 16) * 28).astype(np.uint8)
    data[:, :, 3] = alpha
    trim(Image.fromarray(data)).save(out, optimize=True)


def main() -> None:
    OUT.mkdir(exist_ok=True)
    cutout_light(SRC / "avatar-1.png", OUT / "review-1.png", 245)
    cutout_light(SRC / "avatar-2.png", OUT / "review-2.png", 244)
    cutout_light(SRC / "avatar-3.png", OUT / "review-3.png", 245)
    cutout_dark(SRC / "avatar-4.png", OUT / "review-4.png")


if __name__ == "__main__":
    main()
