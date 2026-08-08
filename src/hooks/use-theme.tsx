import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { THEMES, THEME_STORAGE_KEY, DEFAULT_THEME, type ThemeName } from "@/config";

type ThemeContextValue = {
  theme: ThemeName;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): ThemeName {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_THEME;
}

function applyTheme(theme: ThemeName) {
  const root = document.documentElement;
  const vars = THEMES[theme];
  root.setAttribute("data-theme", theme);
  root.classList.toggle("dark", theme === "dark");
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME);

  // Restore saved theme on mount (no page reload)
  useEffect(() => {
    setThemeState(getInitialTheme());
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    applyTheme(theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const setTheme = useCallback((next: ThemeName) => {
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, isDark: theme === "dark", toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

// Apply the theme before hydration to avoid a flash of the wrong theme.
export function initThemeScript() {
  return `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var theme=(t==="light"||t==="dark")?t:"${DEFAULT_THEME}";var r=document.documentElement;r.setAttribute("data-theme",theme);r.classList.toggle("dark",theme==="dark");var v=${JSON.stringify(THEMES)}[theme];for(var k in v){r.style.setProperty(k,v[k]);}}catch(e){}})();`;
}
