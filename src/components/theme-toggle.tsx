/* Client-side theme toggle: switches data-theme on <html> and persists choice. */
"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "udk-theme";

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const getInitialTheme = (): Theme => {
  if (typeof document !== "undefined") {
    const dataTheme = document.documentElement.dataset.theme as Theme | undefined;
    if (dataTheme === "light" || dataTheme === "dark") return dataTheme;
  }
  return getPreferredTheme();
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme === "light" ? "light" : "dark";
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const nextTheme: Theme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={theme === "light"}
      onClick={() => setTheme(nextTheme)}
      className="glass inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-[var(--fg-strong)] transition hover:border-[var(--accent)] hover:text-[var(--fg-strong)]"
    >
      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_12px_rgba(0,240,255,0.5)]" />
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}

export default ThemeToggle;

