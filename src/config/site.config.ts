/**
 * ── GLOBAL CONFIG ──────────────────────────────────────────────
 * THE single file to customize the entire website's UI.
 *
 * Edit values here to restyle the whole project — no component
 * code needs to change. Colors/fonts/radius/etc. feed into the
 * theme and the CSS variables that every component reads.
 */
import { COLORS } from "./colors";
import { TYPOGRAPHY } from "./typography";
import { SPACING } from "./spacing";
import { RADIUS } from "./radius";
import { ANIMATIONS } from "./animations";
import { NAVBAR } from "./navbar";
import { DEFAULT_THEME, type ThemeName } from "./theme";

export const siteConfig = {
  // ── Identity ─────────────────────────────────────────────
  name: "Ahmed Khaled Hussain",
  logoText: "Ahmed.Khaled",
  logoConst: "Ahmed.",
  logoName: "Khaled",
  role: "AI Engineer | Full Stack Developer",

  // ── Theme ────────────────────────────────────────────────
  defaultTheme: DEFAULT_THEME as ThemeName,
  availableThemes: ["dark", "light"] as ThemeName[],
  themeStorageKey: "dr-theme",

  // ── Colors ───────────────────────────────────────────────
  colors: COLORS,
  primaryColor: COLORS.primary.dark,
  secondaryColor: COLORS.secondary.dark,

  // ── Fonts ────────────────────────────────────────────────
  fonts: {
    primary: TYPOGRAPHY.primaryFont,
    secondary: TYPOGRAPHY.secondaryFont,
    display: TYPOGRAPHY.displayFont,
  },
  fontWeight: {
    heading: TYPOGRAPHY.headingWeight,
    body: TYPOGRAPHY.bodyWeight,
  },

  // ── Border Radius ────────────────────────────────────────
  radius: {
    base: RADIUS.base,
    pill: RADIUS.pill,
  },

  // ── Animation Speed ──────────────────────────────────────
  animation: {
    themeDuration: ANIMATIONS.themeDuration,
    hoverDuration: ANIMATIONS.hoverDuration,
    revealDuration: ANIMATIONS.revealDuration,
    marqueeDuration: ANIMATIONS.marqueeDuration,
  },

  // ── Navbar ───────────────────────────────────────────────
  navbar: NAVBAR,

  // ── Button Style ─────────────────────────────────────────
  button: {
    radius: RADIUS.sm,
    height: "44px",
    paddingX: "24px",
    paddingY: "14px",
    fontSize: TYPOGRAPHY.nanoLg,
    fontWeight: TYPOGRAPHY.boldWeight,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
  },

  // ── Container ────────────────────────────────────────────
  container: {
    width: SPACING.containerWidth,
    paddingX: SPACING.containerPX,
    paddingXDesktop: SPACING.containerPXDesktop,
  },

  // ── Section Spacing ──────────────────────────────────────
  section: {
    paddingY: SPACING.sectionY,
    paddingYDesktop: SPACING.sectionYDesktop,
    paddingX: SPACING.sectionPaddingX,
    paddingXDesktop: SPACING.sectionPaddingXDesktop,
  },

  // ── Hero Size ────────────────────────────────────────────
  hero: {
    paddingTop: SPACING.heroPaddingTop,
    paddingTopDesktop: SPACING.heroPaddingTopDesktop,
    paddingBottom: SPACING.heroPaddingBottom,
    paddingBottomDesktop: SPACING.heroPaddingBottomDesktop,
    titleSize: TYPOGRAPHY.hero,
  },

  // ── Footer Height ────────────────────────────────────────
  footer: {
    paddingY: SPACING.footerPaddingY,
    paddingYDesktop: SPACING.footerPaddingYDesktop,
  },
} as const;
