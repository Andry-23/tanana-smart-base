"use client";

import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = `language-menu-${useId()}`;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      aria-label={label}
      className="relative w-fit"
    >
      <span className="sr-only">{label}</span>

      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={`${label}: ${localeNames[currentLocale]}`}
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-10 min-w-[76px] items-center justify-between gap-2 rounded-lg border border-white/20 bg-white/10 px-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-sky-300/60 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        <span>{currentLocale}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          id={menuId}
          aria-label={label}
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-lg border border-white/20 bg-[#0b3557] p-1.5 shadow-2xl"
        >
          {locales.map((locale) => {
            const isActive = locale === currentLocale;

            return (
              <li key={locale}>
                <Link
                  href={getLocalizedPath(currentPath, locale)}
                  hrefLang={locale}
                  lang={locale}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={`${switchTo} ${localeNames[locale]}`}
                  title={localeNames[locale]}
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate?.();
                  }}
                  className={`flex min-h-10 items-center gap-3 rounded-md px-3 text-sm transition ${
                    isActive
                      ? "bg-sky-400 font-bold text-[#082f49]"
                      : "text-white hover:bg-white/15 hover:text-sky-300"
                  }`}
                >
                  <span className="w-7 font-bold uppercase tracking-wide">
                    {locale}
                  </span>
                  <span>{localeNames[locale]}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
