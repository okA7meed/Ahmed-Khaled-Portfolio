/** Theme names, persistence key and legacy optional-component palette.
 * The active portfolio's semantic tokens and material treatments are in
 * src/themes.css, selected by data-theme. The provider deliberately does not
 * inject this legacy palette over those CSS tokens.
 */
import { COLORS } from "./colors";

export type ThemeName = "dark" | "light";

export type ThemeVars = {
  "--background": string;
  "--foreground": string;
  "--surface": string;
  "--surface-2": string;
  "--hairline": string;
  "--primary": string;
  "--primary-foreground": string;
  "--secondary": string;
  "--secondary-foreground": string;
  "--muted": string;
  "--muted-foreground": string;
  "--accent": string;
  "--accent-foreground": string;
  "--destructive": string;
  "--destructive-foreground": string;
  "--border": string;
  "--input": string;
  "--ring": string;
  "--lime": string;
  "--lime-dim": string;
  "--shadow-color": string;
  "--shadow-strong": string;
  // Navbar
  "--nav-background": string;
  "--nav-border": string;
  "--nav-toggle-border": string;
  "--nav-hamburger-bg": string;
  "--nav-hamburger-border": string;
  "--nav-text": string;
  "--nav-text-hover": string;
  "--nav-icon": string;
  "--dropdown-background": string;
  "--mobile-hover": string;
  "--logo-const": string;
  "--logo-name": string;
};

export const THEMES: Record<ThemeName, ThemeVars> = {
  dark: {
    "--background": COLORS.background.dark,
    "--foreground": COLORS.foreground.dark,
    "--surface": COLORS.surface.dark,
    "--surface-2": COLORS.surface2.dark,
    "--hairline": COLORS.hairline.dark,
    "--primary": COLORS.primary.dark,
    "--primary-foreground": COLORS.primaryForeground.dark,
    "--secondary": COLORS.secondary.dark,
    "--secondary-foreground": COLORS.foreground.dark,
    "--muted": COLORS.muted.dark,
    "--muted-foreground": COLORS.mutedForeground.dark,
    "--accent": COLORS.accent.dark,
    "--accent-foreground": COLORS.accentForeground.dark,
    "--destructive": COLORS.danger.dark,
    "--destructive-foreground": COLORS.destructiveForeground.dark,
    "--border": COLORS.border.dark,
    "--input": COLORS.input.dark,
    "--ring": COLORS.ring.dark,
    "--lime": COLORS.primary.dark,
    "--lime-dim": COLORS.primary.dark,
    "--shadow-color": COLORS.shadow.dark,
    "--shadow-strong": COLORS.shadowStrong.dark,
    "--nav-background": COLORS.navBackground.dark,
    "--nav-border": COLORS.navBorder.dark,
    "--nav-toggle-border": COLORS.navToggleBorder.dark,
    "--nav-hamburger-bg": COLORS.navHamburgerBg.dark,
    "--nav-hamburger-border": COLORS.navHamburgerBorder.dark,
    "--nav-text": COLORS.navText.dark,
    "--nav-text-hover": COLORS.navTextHover.dark,
    "--nav-icon": COLORS.navIcon.dark,
    "--dropdown-background": COLORS.dropdownBackground.dark,
    "--mobile-hover": COLORS.mobileHover.dark,
    "--logo-const": COLORS.logoConst.dark,
    "--logo-name": COLORS.logoName.dark,
  },
  light: {
    "--background": COLORS.background.light,
    "--foreground": COLORS.foreground.light,
    "--surface": COLORS.surface.light,
    "--surface-2": COLORS.surface2.light,
    "--hairline": COLORS.hairline.light,
    "--primary": COLORS.primary.light,
    "--primary-foreground": COLORS.primaryForeground.light,
    "--secondary": COLORS.secondary.light,
    "--secondary-foreground": COLORS.foreground.light,
    "--muted": COLORS.muted.light,
    "--muted-foreground": COLORS.mutedForeground.light,
    "--accent": COLORS.accent.light,
    "--accent-foreground": COLORS.accentForeground.light,
    "--destructive": COLORS.danger.light,
    "--destructive-foreground": COLORS.destructiveForeground.light,
    "--border": COLORS.border.light,
    "--input": COLORS.input.light,
    "--ring": COLORS.ring.light,
    "--lime": COLORS.primary.light,
    "--lime-dim": COLORS.primary.light,
    "--shadow-color": COLORS.shadow.light,
    "--shadow-strong": COLORS.shadowStrong.light,
    "--nav-background": COLORS.navBackground.light,
    "--nav-border": COLORS.navBorder.light,
    "--nav-toggle-border": COLORS.navToggleBorder.light,
    "--nav-hamburger-bg": COLORS.navHamburgerBg.light,
    "--nav-hamburger-border": COLORS.navHamburgerBorder.light,
    "--nav-text": COLORS.navText.light,
    "--nav-text-hover": COLORS.navTextHover.light,
    "--nav-icon": COLORS.navIcon.light,
    "--dropdown-background": COLORS.dropdownBackground.light,
    "--mobile-hover": COLORS.mobileHover.light,
    "--logo-const": COLORS.logoConst.light,
    "--logo-name": COLORS.logoName.light,
  },
};

export const DEFAULT_THEME: ThemeName = "dark";
export const THEME_STORAGE_KEY = "dr-theme";
