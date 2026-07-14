#!/usr/bin/env python3
"""Gera public/og.png — o card de compartilhamento (WhatsApp, Twitter, link preview).

Por que um script e não um PNG desenhado à mão: o card mostra a base de evidências,
que muda quando um tópico ganha ou perde uma citação. Desenhado à mão, ele começa
a mentir na primeira revisão. Aqui os números saem de src/content/evidenceSpine.ts,
a mesma fonte que a home usa — e evidenceSpine.test.ts garante que ela bate com os
tópicos.

Todo texto vira path. O rsvg-convert enxerga só as fontes instaladas no sistema, e
as do projeto moram em node_modules como woff2: pedir font-family="Newsreader" faz
o fontconfig devolver Verdana. O card sairia com a marca na face errada.

Uso:  python3 scripts/build-og.py
Requer: fonttools[woff], uharfbuzz, brotli, rsvg-convert
"""

from __future__ import annotations

import io
import pathlib
import re
import subprocess
import sys

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.misc.transform import Transform
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT_SVG = ROOT / "public" / "og.svg"
OUT_PNG = ROOT / "public" / "og.png"

W, H = 1200, 630
BG = "#0a1522"        # ground-deep — o negatoscópio
INK = "#f1f5f9"
MUTED = "#94a3b8"
FAINT = "#5b6b7f"
TEAL = "#5fc89b"
LINE = "#22344b"
# Nível I -> V: um tom só, desbotando. Mesma lógica de EvidenceSpine.tsx.
TONES = ["#5fc89b", "#4a9e7c", "#37755d", "#255343", "#18352c"]

FONTS = {
    "serif": ROOT / "node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2",
    "mono": ROOT / "node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
}


class Face:
    """Uma face pronta para virar path: shaping pelo harfbuzz, contornos pelo fontTools."""

    def __init__(self, path: pathlib.Path, weight: int | None = None):
        font = TTFont(str(path))
        if weight is not None and "fvar" in font:
            font = instantiateVariableFont(font, {"wght": weight})
        self.font = font
        self.glyphs = font.getGlyphSet()
        self.upm = font["head"].unitsPerEm
        # harfbuzz precisa dos bytes da instância já fixada no peso. Zerar o flavor
        # antes de salvar é obrigatório: as fontes chegam como woff2 e save() manteria
        # esse envelope, que o harfbuzz não abre — todo glifo sairia como .notdef.
        font.flavor = None
        buf = io.BytesIO()
        font.save(buf)
        self.hb = hb.Font(hb.Face(buf.getvalue()))
        self.order = font.getGlyphOrder()

    def text_path(self, text: str, size: float, x: float, y: float, tracking: float = 0.0) -> str:
        """Devolve um <path> com o texto já posicionado. tracking em unidades de em."""
        buf = hb.Buffer()
        buf.add_str(text)
        buf.guess_segment_properties()
        hb.shape(self.hb, buf, {"kern": True, "liga": True})

        scale = size / self.upm
        pen_x = 0.0
        out = []
        for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
            name = self.order[info.codepoint]
            gx = x + (pen_x + pos.x_offset) * scale
            gy = y + pos.y_offset * scale
            pen = SVGPathPen(self.glyphs, ntos=lambda v: repr(round(v, 2)))
            # y do SVG cresce para baixo -> espelha
            self.glyphs[name].draw(TransformPen(pen, Transform().translate(gx, gy).scale(scale, -scale)))
            d = pen.getCommands()
            if d:
                out.append(d)
            pen_x += pos.x_advance + tracking * self.upm
        return " ".join(out)

    def width(self, text: str, size: float, tracking: float = 0.0) -> float:
        buf = hb.Buffer()
        buf.add_str(text)
        buf.guess_segment_properties()
        hb.shape(self.hb, buf, {"kern": True, "liga": True})
        adv = sum(p.x_advance for p in buf.glyph_positions)
        adv += tracking * self.upm * len(buf.glyph_infos)
        return adv * size / self.upm


def evidence() -> dict:
    """Lê os números direto do módulo que a home renderiza."""
    src = (ROOT / "src/content/evidenceSpine.ts").read_text()
    rows = re.findall(r"\[(\d{4}), \[([\d, ]+)\]\]", src)
    if not rows:
        sys.exit("não achei evidenceByYear em src/content/evidenceSpine.ts")
    data = [(int(y), [int(n) for n in lv.split(",")]) for y, lv in rows]
    return {
        "data": data,
        "total": sum(sum(l) for _, l in data),
        "level_one": sum(l[0] for _, l in data),
        "from": data[0][0],
        "to": data[-1][0],
        "peak": max(sum(l) for _, l in data),
    }


# O glifo da marca — igual ao de src/ui/Logo.tsx.
R_GLYPH = (
    "M23.52 22.7Q25.7 22.7 27.06 21.54Q28.41 20.38 28.41 18.09Q28.41 16.61 27.82 15.58Q27.23 14.55 25.89 "
    "14.01Q24.55 13.47 22.3 13.47H15.7L16.29 11.0H24.7Q27.93 11.0 29.9 11.86Q31.87 12.72 32.76 14.19Q33.66 "
    "15.66 33.66 17.49Q33.66 19.22 32.87 20.59Q32.08 21.96 30.53 22.84Q28.98 23.72 26.65 23.99V23.89Q28.39 "
    "23.97 29.38 24.41Q30.38 24.85 30.96 25.72Q31.53 26.59 31.97 27.99L33.43 32.59Q33.82 33.84 34.21 "
    "34.4Q34.59 34.97 35.14 35.11Q35.69 35.25 36.54 35.25V36.87Q34.13 37.04 32.64 36.98Q31.14 36.92 30.28 "
    "36.54Q29.41 36.16 28.93 35.38Q28.46 34.6 28.12 33.35L26.79 28.68Q26.39 27.25 25.98 26.47Q25.57 25.69 "
    "24.92 25.38Q24.27 25.06 23.11 25.06H16.19L15.59 22.7ZM19.65 11.0V34.75L22.6 35.8V36.84H11.46V35.8L14.44 "
    "34.75V13.09L11.46 12.04V11.0Z"
)


def build() -> str:
    ev = evidence()
    serif = Face(FONTS["serif"], weight=500)
    mono = Face(FONTS["mono"])

    # ---- espinha de evidências ----
    x0, x1, base, hmax = 92, 1108, 506, 168
    span = ev["to"] - ev["from"]
    by_year = dict(ev["data"])
    col_w = (x1 - x0) / (span + 1)
    bars = []
    for i in range(span + 1):
        levels = by_year.get(ev["from"] + i)
        if not levels:
            continue
        n = sum(levels)
        top = base
        for k, count in enumerate(levels):
            if not count:
                continue
            seg = (n / ev["peak"] * hmax) * count / n
            top -= seg
            bars.append(
                f'<rect x="{x0 + i * col_w:.2f}" y="{top:.2f}" '
                f'width="{col_w - 1.5:.2f}" height="{seg:.2f}" fill="{TONES[k]}"/>'
            )

    decades = []
    for dec in (1970, 1980, 1990, 2000, 2010, 2020):
        cx = x0 + (dec - ev["from"]) * col_w
        d = mono.text_path(str(dec), 14, cx - mono.width(str(dec), 14) / 2, base + 28)
        decades.append(f'<path d="{d}" fill="{MUTED}"/>')

    eyebrow = f'{ev["total"]} ESTUDOS CITADOS · {ev["from"]}–{ev["to"]} · {ev["level_one"]} DE NÍVEL I'

    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <rect width="{W}" height="{H}" fill="{BG}"/>
  <rect width="{W}" height="4" fill="{TEAL}"/>

  <g transform="translate(92 70) scale(1.1)">
    <g transform="rotate(-5 24 24)">
      <rect x="3" y="3" width="42" height="42" rx="10" fill="{TEAL}"/>
      <path d="{R_GLYPH}" fill="{BG}"/>
    </g>
  </g>
  <path d="{serif.text_path('Revisortopedia', 34, 160, 110)}" fill="{INK}"/>

  <path d="{serif.text_path('Manual de trauma ortopédico', 58, 92, 216)}" fill="{INK}"/>
  <path d="{serif.text_path('baseado em evidências', 58, 92, 280)}" fill="{TEAL}"/>
  <path d="{serif.text_path('.', 58, 92 + serif.width('baseado em evidências', 58), 280)}" fill="{INK}"/>

  <path d="{mono.text_path(eyebrow, 15, 92, 332, tracking=0.09)}" fill="{MUTED}"/>

  {''.join(bars)}
  <line x1="{x0}" y1="{base + 1}" x2="{x1}" y2="{base + 1}" stroke="{LINE}" stroke-width="2"/>
  {''.join(decades)}

  <path d="{mono.text_path('marcofrasson-cpu.github.io/revisortopedia', 17, 92, 592)}" fill="{FAINT}"/>
</svg>"""


if __name__ == "__main__":
    OUT_SVG.write_text(build())
    subprocess.run(
        ["rsvg-convert", "-w", str(W), "-h", str(H), str(OUT_SVG), "-o", str(OUT_PNG)],
        check=True,
    )
    OUT_SVG.unlink()  # o SVG é intermediário; o que o scraper busca é o PNG
    print(f"og.png: {OUT_PNG.stat().st_size // 1024} KB")
