import Link from "next/link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Choose Us", href: "/#why-choose-us" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const disciplines = [
  "Energy & Electrical Systems",
  "Water & Hydraulic Infrastructure",
  "Smart Agricultural Systems",
  "Technical & Engineering Consulting",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 px-6 pb-8 pt-16 text-white">
      {/* Technical grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.28) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_0.9fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-xl font-bold tracking-wide text-white transition hover:text-sky-400"
            >
              TANANA SMART BASE
            </Link>

            <div className="mt-4 h-1 w-16 bg-sky-400" />

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Practical engineering solutions integrating energy, water,
              agriculture and technical infrastructure for stronger rural
              communities in Madagascar.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 font-semibold text-sky-400 transition hover:text-sky-300"
            >
              Discuss your project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Engineering Disciplines
            </h3>

            <ul className="mt-6 space-y-4">
              {disciplines.map((discipline) => (
                <li
                  key={discipline}
                  className="leading-6 text-slate-400 transition hover:text-white"
                >
                  {discipline}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-slate-400">
              <div>
                <p className="text-sm font-semibold text-white">Location</p>
                <p className="mt-1">Madagascar</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Project Enquiries
                </p>

                <Link
                  href="/contact"
                  className="mt-1 inline-flex transition hover:text-sky-400"
                >
                  Contact Tanana Smart Base
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} Tanana Smart Base. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-slate-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-slate-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}