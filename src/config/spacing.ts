/**
 * ── SPACING ────────────────────────────────────────────────────
 * Global spacing scale + layout dimensions used across the site.
 */
export const SPACING = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "40px",
  "2xl": "64px",

  // Layout
  section: "120px",
  sectionY: "80px", // py-20 base
  sectionYDesktop: "128px", // md:py-32
  sectionPaddingX: "20px", // px-5
  sectionPaddingXDesktop: "40px", // md:px-10

  // Container
  containerWidth: "1240px",
  containerPX: "20px",
  containerPXDesktop: "40px",

  // Hero
  heroPaddingTop: "128px", // pt-32
  heroPaddingTopDesktop: "176px", // md:pt-44
  heroPaddingBottom: "64px", // pb-16
  heroPaddingBottomDesktop: "96px", // md:pb-24
  heroContentGap: "40px",

  // Footer
  footerHeight: "336px",
  footerPaddingY: "64px",
  footerPaddingYDesktop: "80px",

  // Navbar
  navTop: "15px",
  navGap: "20px",
  navRightGap: "12px",
  navMobileGap: "4px",
  navMobilePadX: "8px",
  navMobilePadY: "12px",

  // Common component gaps
  gridGap: "16px",
} as const;
