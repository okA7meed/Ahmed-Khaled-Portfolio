/**
 * ── COLORS ─────────────────────────────────────────────────────
 * Every color in the website is defined here.
 *
 * Each semantic color exposes a `dark` and `light` value so themes
 * can be swapped purely from config. To add a new theme (Blue, Purple,
 * Red, Custom…) add a new entry in `theme.ts` — no component changes.
 */
export const COLORS = {
  // Brand / signal
  primary: { dark: "#B9FF39", light: "#84CC16" },
  primaryForeground: { dark: "#0E1410", light: "#FFFFFF" },
  secondary: { dark: "#FFFFFF", light: "#111111" },

  // Surfaces
  background: { dark: "#0E0E0E", light: "#F7F7F5" },
  foreground: { dark: "#F5F5F0", light: "#111111" },
  surface: { dark: "#171717", light: "#FFFFFF" },
  surface2: { dark: "#222222", light: "#EFEFEB" },
  hairline: { dark: "#333333", light: "#E2E2DC" },

  // Text
  text: { dark: "#F5F5F0", light: "#111111" },
  textSecondary: { dark: "#B8B8B8", light: "#6B6B6B" },
  muted: { dark: "#222222", light: "#EFEFEB" },
  mutedForeground: { dark: "#B8B8B8", light: "#6B6B6B" },

  // States
  success: { dark: "#7DFF64", light: "#16A34A" },
  warning: { dark: "#FFC857", light: "#D97706" },
  danger: { dark: "#FF5D5D", light: "#DC2626" },
  destructiveForeground: { dark: "#FFFFFF", light: "#FFFFFF" },

  // Interactivity
  accent: { dark: "#222222", light: "#EFEFEB" },
  accentForeground: { dark: "#F5F5F0", light: "#111111" },
  ring: { dark: "#B9FF39", light: "#84CC16" },
  border: { dark: "#333333", light: "#E2E2DC" },
  input: { dark: "#333333", light: "#E2E2DC" },

  // Shadows
  shadow: { dark: "rgba(0,0,0,.22)", light: "rgba(0,0,0,.10)" },
  shadowStrong: { dark: "rgba(0,0,0,.35)", light: "rgba(0,0,0,.16)" },

  // Component surfaces
  navBackground: { dark: "rgba(15,15,15,.82)", light: "rgba(255,255,255,.82)" },
  navBorder: { dark: "rgba(255,255,255,.08)", light: "rgba(0,0,0,.08)" },
  navToggleBorder: { dark: "rgba(255,255,255,.10)", light: "rgba(0,0,0,.10)" },
  navHamburgerBg: { dark: "rgba(255,255,255,.03)", light: "rgba(0,0,0,.04)" },
  navHamburgerBorder: { dark: "rgba(255,255,255,.10)", light: "rgba(0,0,0,.10)" },
  navText: { dark: "rgba(255,255,255,.72)", light: "rgba(0,0,0,.72)" },
  navTextHover: { dark: "#FFFFFF", light: "#111111" },
  navIcon: { dark: "rgba(255,255,255,.70)", light: "rgba(0,0,0,.70)" },
  dropdownBackground: { dark: "rgba(18,18,18,.85)", light: "rgba(255,255,255,.92)" },
  mobileHover: { dark: "rgba(255,255,255,.04)", light: "rgba(0,0,0,.04)" },

  // Logo
  logoConst: { dark: "#B9FF39", light: "#84CC16" },
  logoName: { dark: "#FFFFFF", light: "#111111" },
} as const;

export type ColorKey = keyof typeof COLORS;
