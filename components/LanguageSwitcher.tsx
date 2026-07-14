import Link from "next/link";
import {
  localeNames,
  locales,
  type Locale,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  currentPath: string;
  label: string;
  switchTo: string;
  onNavigate?: () => void;
};

function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (locales.includes(firstSegment as Locale)) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
}

export default function LanguageSwitcher({
  currentLocale,
  currentPath,
  label,
  switchTo,
  onNavigate,
}: LanguageSwitcherProps) {
  return (
    <div
      aria-label={label}
      className="flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 p-1"
    >
      <span className="sr-only">{label}</span>

      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={getLocalizedPath(currentPath, locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={isActive ? "page" : undefined}
            aria-label={`${switchTo} ${localeNames[locale]}`}
            title={localeNames[locale]}
            onClick={onNavigate}
            className={`flex h-8 min-w-9 items-center justify-center rounded-md px-2 text-xs font-bold uppercase tracking-wide transition ${
              isActive
                ? "bg-sky-400 text-[#082f49]"
                : "text-white hover:bg-white/15 hover:text-sky-300"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}