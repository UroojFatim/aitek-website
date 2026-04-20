"use client";

import { Palette } from "lucide-react";
import { THEMES, ThemeName } from "@/lib/themes";
import { useTheme } from "@/components/ui/ThemeProvider";

interface ThemeSwitcherProps {
  mobile?: boolean;
}

export default function ThemeSwitcher({ mobile = false }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  return (
    <label
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${
        mobile
          ? "border-gray-200 bg-white"
          : "border-gray-300 bg-white/90 backdrop-blur"
      }`}
    >
      <Palette className="h-4 w-4 text-primary" />
      <span className="font-medium text-gray-700">Theme</span>
      <select
        aria-label="Theme selector"
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeName)}
        className="bg-transparent text-sm font-medium text-gray-700 outline-none"
      >
        {THEMES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
