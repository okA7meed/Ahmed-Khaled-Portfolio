/**
 * ── TYPOGRAPHY ─────────────────────────────────────────────────
 * All fonts, weights and type sizes used across the website.
 * Changing one value here updates the entire project.
 */
export const TYPOGRAPHY = {
  // Font families
  primaryFont: "Thmanyah",
  secondaryFont: "Thmanyah",
  displayFont: "Thmanyah",

  // Weights
  headingWeight: 800,
  bodyWeight: 400,
  mediumWeight: 500,
  semiboldWeight: 600,
  boldWeight: 700,

  // Letter spacing
  letterSpacingTight: "-0.035em",
  letterSpacingMono: "0.18em",
  letterSpacingWide: "0.3em",

  // Type scale (px / rem)
  hero: "clamp(3rem, 13vw, 9.5rem)",
  heroCompact: "clamp(2rem, 8.5vw, 7rem)",
  title: "clamp(2.2rem, 7vw, 5.5rem)",
  titleLarge: "clamp(1.8rem, 5vw, 3.5rem)",
  sectionTitle: "clamp(1.4rem, 3.2vw, 2.4rem)",
  footerTitle: "clamp(2rem, 8vw, 6rem)",
  heading: "2.5rem",
  headingLg: "1.5rem",
  headingMd: "1.25rem",
  headingSm: "1.125rem",
  body: "1rem",
  bodyLg: "1.125rem",
  small: "0.875rem",
  tiny: "0.75rem",
  micro: "0.6875rem",
  nano: "0.625rem",
  microLg: "0.7rem",
  nanoLg: "0.65rem",
  nanoSm: "0.6rem",
  nanoXs: "0.58rem",

  // Line heights
  lineHeightTight: 0.88,
  lineHeightRelaxed: 1.6,
} as const;
