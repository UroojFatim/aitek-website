export type ThemeName = "aitek" | "ocean" | "emerald";

export interface ThemeOption {
  value: ThemeName;
  label: string;
}

export const THEMES: ThemeOption[] = [
  { value: "aitek", label: "AITEK (Logo)" },
  { value: "ocean", label: "Ocean" },
  { value: "emerald", label: "Emerald" },
];

export const DEFAULT_THEME: ThemeName = "aitek";
