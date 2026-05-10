import { useEffect, useState } from "react";

export interface ThemeColors {
  primary: string;
  accent: string;
  secondary: string;
  background: string;
  foreground: string;
}

export const DEFAULT_THEME: ThemeColors = {
  primary: "#1e40af",
  accent: "#f59e0b",
  secondary: "#eff6ff",
  background: "#ffffff",
  foreground: "#1a1a2e",
};

const STORAGE_KEY = "alnisrine-theme";

function applyTheme(colors: ThemeColors) {
  const r = document.documentElement;
  r.style.setProperty("--primary", colors.primary);
  r.style.setProperty("--ring", colors.primary);
  r.style.setProperty("--chart-1", colors.primary);
  r.style.setProperty("--sidebar-accent", colors.primary);
  r.style.setProperty("--accent", colors.accent);
  r.style.setProperty("--sidebar-primary", colors.accent);
  r.style.setProperty("--secondary", colors.secondary);
  r.style.setProperty("--muted", colors.secondary);
  r.style.setProperty("--background", colors.background);
  r.style.setProperty("--card", colors.background);
  r.style.setProperty("--popover", colors.background);
  r.style.setProperty("--foreground", colors.foreground);
  r.style.setProperty("--card-foreground", colors.foreground);
  r.style.setProperty("--popover-foreground", colors.foreground);
  r.style.setProperty("--secondary-foreground", colors.foreground);
}

export function initTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) applyTheme({ ...DEFAULT_THEME, ...JSON.parse(saved) });
  } catch { /* ignore */ }
}

export function useTheme() {
  const [colors, setColors] = useState<ThemeColors>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...DEFAULT_THEME, ...JSON.parse(saved) } : { ...DEFAULT_THEME };
    } catch {
      return { ...DEFAULT_THEME };
    }
  });

  useEffect(() => {
    applyTheme(colors);
  }, [colors]);

  const save = (next: ThemeColors) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setColors(next);
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setColors({ ...DEFAULT_THEME });
  };

  return { colors, save, reset };
}
