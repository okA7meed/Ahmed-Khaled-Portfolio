import { DEFAULT_THEME, THEME_STORAGE_KEY, type ThemeName } from "@/config/theme";

export function isTheme(value: unknown): value is ThemeName {
  return value === "dark" || value === "light";
}

export function readTheme(): ThemeName {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(saved)) return saved;
  } catch {
    // Storage can be unavailable in private or embedded browsing.
  }
  const boot = document.documentElement.dataset["theme"];
  return isTheme(boot) ? boot : DEFAULT_THEME;
}

export function applyTheme(theme: ThemeName) {
  const root = document.documentElement;
  root.dataset["theme"] = theme;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

/** Runs in the head, before styles paint and independently of React hydration. */
export function initThemeScript() {
  return `(function(){var t="${DEFAULT_THEME}";try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");if(s==="light"||s==="dark")t=s;}catch(e){}var r=document.documentElement;r.setAttribute("data-theme",t);r.classList.toggle("dark",t==="dark");r.style.colorScheme=t;})();`;
}
