import type { Locale } from "@/lib/i18n";

const dictionaries = {
  en: () => import("@/dictionaries/en").then((module) => module.default),
  fr: () => import("@/dictionaries/fr").then((module) => module.default),
  mg: () => import("@/dictionaries/mg").then((module) => module.default),
};

export type Dictionary = Awaited<
  ReturnType<(typeof dictionaries)[Locale]>
>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}