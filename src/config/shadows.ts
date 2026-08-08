/**
 * ── SHADOWS ────────────────────────────────────────────────────
 * Every shadow used in the website. Values are theme-aware where
 * needed (the `shadow` and `shadowStrong` tokens are driven by the
 * COLORS.shadow map so they adapt between light/dark via CSS vars).
 */
export const SHADOWS = {
  nav: "0 8px 20px var(--shadow-color)",
  navScrolled: "0 10px 26px var(--shadow-strong)",
  dropdown: "0 12px 35px var(--shadow-strong)",
  card: "0 0 0 1px color-mix(in oklab, var(--lime) 30%, transparent), 0 0 40px -10px color-mix(in oklab, var(--lime) 55%, transparent)",
  glow: "0 0 0 1px color-mix(in oklab, var(--lime) 30%, transparent), 0 0 40px -10px color-mix(in oklab, var(--lime) 55%, transparent)",
  scrollBar: "0 0 0 0 transparent",
} as const;
