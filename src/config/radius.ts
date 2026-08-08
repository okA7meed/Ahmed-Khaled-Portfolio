/**
 * ── RADIUS ─────────────────────────────────────────────────────
 * Every border radius used in the website. The base `base` value
 * drives the Tailwind radius scale (sm/md/lg/xl/2xl/3xl).
 */
export const RADIUS = {
  base: "0.25rem",
  sm: "calc(var(--radius) - 4px)",
  md: "calc(var(--radius) - 2px)",
  lg: "var(--radius)",
  xl: "calc(var(--radius) + 4px)",
  "2xl": "calc(var(--radius) + 8px)",
  "3xl": "calc(var(--radius) + 12px)",
  pill: "9999px",
  full: "9999px",
} as const;
