export const locales = ["en", "fr", "mg"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  mg: "Malagasy",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}