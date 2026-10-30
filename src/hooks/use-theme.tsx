import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, type ThemeName } from "@/config/theme";
import { applyTheme, isTheme, readTheme } from "@/lib/theme";

type ThemeContextValue = {
  theme: ThemeName;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Match SSR first; the head script has already applied the saved appearance.
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME);
  const current = useRef<ThemeName>(DEFAULT_THEME);

  useLayoutEffect(() => {
    const initial = readTheme();
    current.current = initial;
    applyTheme(initial);
    setThemeState(initial);
  }, []);

  const setTheme = useCallback((next: ThemeName) => {
    current.current = next;
    applyTheme(next);
    setThemeState(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // The switch still works for this page when persistence is blocked.
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(current.current === "dark" ? "light" : "dark");
  }, [setTheme]);

  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
      const next = isTheme(event.newValue) ? event.newValue : DEFAULT_THEME;
      current.current = next;
      applyTheme(next);
      setThemeState(next);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, isDark: theme === "dark", toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
