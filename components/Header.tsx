"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-50 bg-[#0b3557] text-white"
      style={{ boxShadow: "0 8px 18px rgba(0, 0, 0, 0.35)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="max-w-[220px] text-xl font-bold leading-tight tracking-tight transition-opacity hover:opacity-80 sm:max-w-none sm:text-2xl"
          >
            Tanana Smart Base
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:block"
          >
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative py-2 text-sm font-medium transition-colors hover:text-sky-300
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-300
                    after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 bg-white/10 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-300 lg:hidden"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition duration-300 ${
                  isMenuOpen ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] h-0.5 w-6 bg-white transition duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-6 bg-white transition duration-300 ${
                  isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile navigation panel */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "max-h-[500px] border-t border-white/15 pb-5 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-1 pt-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-base font-medium transition hover:bg-white/10 hover:text-sky-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}