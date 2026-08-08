/**
 * ── ANIMATIONS ─────────────────────────────────────────────────
 * Central store for every transition duration, easing curve and
 * motion behavior used across the website.
 */
export const ANIMATIONS = {
  // Theme switching
  themeDuration: 300, // ms
  themeEase: "ease",

  // Navbar
  navDuration: 0.55,
  navEase: [0.22, 1, 0.36, 1] as const,
  navScrollDuration: 0.4,
  navScrollEase: "ease",
  dropdownDuration: 0.32,
  dropdownEase: [0.22, 1, 0.36, 1] as const,

  // Reveal / scroll
  revealDuration: 0.75,
  revealEase: [0.16, 1, 0.3, 1] as const,
  revealBlur: "6px",
  revealY: 24,

  // Hero
  heroLetterDuration: 0.8,
  heroLetterEase: [0.16, 1, 0.3, 1] as const,
  heroLetterDelay: 0.25,
  heroLetterStep: 0.035,
  typewriterInterval: 38, // ms

  // Loading
  loadingDuration: 0.9,
  loadingEase: [0.76, 0, 0.24, 1] as const,
  loadingTextDuration: 1,
  loadingTextEase: [0.16, 1, 0.3, 1] as const,
  loadingBarDuration: 150, // ms
  loadingTotal: 1600, // ms

  // Hover
  hoverScale: 1.05,
  hoverLift: "-0.25rem",
  hoverLiftMin: "-0.5rem",
  hoverDuration: 0.3,
  hoverTransition: "transform 0.3s ease",

  // Marquee
  marqueeDuration: "32s",
  marqueeAnim: "linear infinite",

  // Pulse / float
  pulseDuration: "2s",
  floatDuration: "7s",

  // Blur
  blurGlow: "120px",
  blurSoft: "14px",
  blurNav: "18px",

  // Mouse glow
  mouseGlowOpacity: "transparent",
} as const;
