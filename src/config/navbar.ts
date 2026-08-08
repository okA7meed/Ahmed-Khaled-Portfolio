/**
 * ── NAVBAR CONFIG ──────────────────────────────────────────────
 * Every visual dimension of the navbar is centralized here.
 * Edit only these values to restyle the navbar — no other code
 * needs to change. Colors reference theme CSS variables so they
 * adapt automatically between light/dark.
 */
export const NAVBAR = {
  // Container
  widthDesktop: "760px",
  widthTablet: "90%",
  widthMobile: "92%",
  maxWidth: "898px",
  heightDesktop: "48px",
  heightTablet: "48px",
  heightMobile: "60px",
  top: "15px",

  borderRadius: "9999px",

  horizontalPadding: "16px",
  verticalPadding: "0px",

  // Brand / logo
  logoFontSize: "13px",
  logoFontWeight: "700",
  logoAreaWidth: "110px",
  logoColorConstCss: "var(--logo-const)",
  logoColorNameCss: "var(--logo-name)",

  // Center navigation
  navGap: "20px",
  navFontSize: "10.5px",
  navFontWeight: "500",
  navLetterSpacing: "0.22em",
  navColorCss: "var(--nav-text)",
  navColorActiveCss: "var(--primary)",
  navColorHoverCss: "var(--nav-text-hover)",

  // Right side
  rightGap: "12px",

  toggleSize: "40px",
  toggleIconSize: "16px",

  buttonHeight: "34px",
  buttonHorizontalPadding: "18px",
  buttonFontSize: "10.5px",
  buttonFontWeight: "700",

  hamburgerSize: "40px",
  hamburgerIconSize: "16px",

  // Surface
  borderWidth: "1px",
  blur: "18px",
  shadowCss: "var(--shadow-nav)",
  backgroundCss: "var(--nav-background)",
  borderColorCss: "var(--nav-border)",
  toggleBackgroundCss: "transparent",
  toggleBorderColorCss: "var(--nav-toggle-border)",
  hamburgerBackgroundCss: "var(--nav-hamburger-bg)",
  hamburgerBorderColorCss: "var(--nav-hamburger-border)",
  iconColorCss: "var(--nav-icon)",
  mobileHoverCss: "var(--mobile-hover)",
} as const;
