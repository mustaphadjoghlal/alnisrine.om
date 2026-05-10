import { useEffect, useState } from "react";

export interface ThemeColors {
  brandColor: string;
  accent: string;
  background: string;
  foreground: string;
}

export const DEFAULT_THEME: ThemeColors = {
  brandColor: "#1d4ed8",
  accent: "#f59e0b",
  background: "#ffffff",
  foreground: "#1a1a2e",
};

const STORAGE_KEY = "alnisrine-theme";

// ── Color utilities ──────────────────────────────────────────────────────────

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  h /= 360; s /= 100; l /= 100;
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

// Generate a full blue-* shade scale from a single brand color (blue-700 equivalent)
function generateShades(brandHex: string) {
  const [h, s] = hexToHsl(brandHex);
  return {
    "--color-blue-50":  hslToHex(h, clamp(s * 0.25, 5, 30), 97),
    "--color-blue-100": hslToHex(h, clamp(s * 0.35, 8, 40), 94),
    "--color-blue-200": hslToHex(h, clamp(s * 0.50, 12, 55), 87),
    "--color-blue-300": hslToHex(h, clamp(s * 0.65, 18, 70), 76),
    "--color-blue-400": hslToHex(h, clamp(s * 0.80, 25, 85), 64),
    "--color-blue-500": hslToHex(h, clamp(s * 0.90, 35, 95), 54),
    "--color-blue-600": hslToHex(h, clamp(s, 40, 100), 44),
    "--color-blue-700": brandHex,
    "--color-blue-800": hslToHex(h, clamp(s, 40, 100), 28),
    "--color-blue-900": hslToHex(h, clamp(s * 0.85, 30, 95), 20),
    "--color-blue-950": hslToHex(h, clamp(s * 0.70, 20, 90), 12),
  };
}

// ── Apply ─────────────────────────────────────────────────────────────────────

function applyTheme(colors: ThemeColors) {
  const r = document.documentElement;

  // Override ALL Tailwind blue-* shades so bg-blue-*, text-blue-*, etc. change
  const shades = generateShades(colors.brandColor);
  for (const [k, v] of Object.entries(shades)) r.style.setProperty(k, v);

  // Also update legacy CSS vars used in theme.css
  r.style.setProperty("--primary", colors.brandColor);
  r.style.setProperty("--ring", colors.brandColor);
  r.style.setProperty("--chart-1", colors.brandColor);

  // Derived light shade for secondary/muted
  const [h, s] = hexToHsl(colors.brandColor);
  const secondary = hslToHex(h, clamp(s * 0.25, 5, 30), 96);
  r.style.setProperty("--secondary", secondary);
  r.style.setProperty("--muted", secondary);

  // Accent
  r.style.setProperty("--accent", colors.accent);

  // Background / Foreground
  r.style.setProperty("--background", colors.background);
  r.style.setProperty("--card", colors.background);
  r.style.setProperty("--popover", colors.background);
  r.style.setProperty("--foreground", colors.foreground);
  r.style.setProperty("--card-foreground", colors.foreground);
  r.style.setProperty("--popover-foreground", colors.foreground);
  r.style.setProperty("--secondary-foreground", colors.foreground);
}

// ── Public API ────────────────────────────────────────────────────────────────

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

export { generateShades };
