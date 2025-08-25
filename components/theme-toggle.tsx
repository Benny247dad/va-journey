"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm
                 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 transition
                 backdrop-blur"
    >
      <span className="text-base">{theme === "dark" ? "☀️" : "🌙"}</span>
      <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"} mode</span>
    </button>
  );
}