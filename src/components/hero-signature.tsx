import type { CSSProperties } from "react";
import { OPENING } from "@/config/opening";

// Original monoline lettering: real pen paths, with separate strokes in writing order.
const strokes = [
  "M14 146 C41 106 79 38 99 15 C88 49 71 107 65 141",
  "M4 119 C42 117 78 103 111 89",
  "M91 116 C108 90 133 43 129 38 C121 28 104 81 103 115 C115 92 136 85 129 104 C119 129 143 108 151 99",
  "M143 110 C151 84 161 89 154 110 C173 80 184 84 175 109 C194 83 202 85 195 104 C190 119 207 110 214 100",
  "M208 106 C231 100 230 87 220 92 C200 101 207 124 237 103",
  "M252 95 C242 83 228 111 240 114 C254 116 281 52 275 45 C268 39 250 94 253 111 C255 119 270 107 279 98",
  "M290 143 C300 108 324 44 337 21 C330 54 315 99 307 118",
  "M309 99 C339 79 362 50 371 35 M327 86 C323 104 338 120 356 117",
  "M348 113 C369 80 387 43 382 40 C373 34 360 80 360 111 C376 88 391 89 383 106 C377 120 394 110 402 100",
  "M418 95 C407 85 395 111 406 114 C413 116 422 100 425 94 C413 122 430 113 441 102",
  "M436 110 C454 88 476 44 470 42 C463 40 446 80 447 108 C447 120 461 109 469 101",
  "M464 107 C485 99 486 88 476 93 C459 103 468 122 493 103",
  "M508 96 C497 86 484 111 496 114 C509 115 533 53 527 48 C520 41 505 95 508 111 C511 119 526 107 535 100",
  "M282 147 C340 134 433 132 524 118",
];

export function HeroSignature() {
  return (
    <div
      className="hero__signature"
      data-entrance
      data-entrance-owner="opening"
      data-entrance-variant="signature"
      data-entrance-delay={OPENING.signature}
      data-entrance-duration="2.2"
      aria-hidden="true"
    >
      <svg viewBox="0 0 548 166" fill="none" focusable="false">
        {strokes.map((d, index) => (
          <path
            key={d}
            d={d}
            pathLength="1"
            stroke="currentColor"
            strokeWidth={index === 0 || index === 6 ? 1.9 : 1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ "--stroke-delay": `${index * 0.125}s` } as CSSProperties}
          />
        ))}
      </svg>
    </div>
  );
}
