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
    <footer className="border-t border-sky-400/20 bg-[#020817] px-6 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_0.9fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-wide transition hover:text-sky-400"
            >
              TANANA SMART BASE
            </Link>

            <div className="mt-4 h-1 w-16 bg-sky-400" />

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Practical engineering solutions integrating energy, water,
              agriculture and technical infrastructure for stronger rural
              communities in Madagascar.
            </p>
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
                    className="inline-flex text-slate-400 transition hover:translate-x-1 hover:text-white"
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

          {/* Company details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Company Information
            </h3>

            <div className="mt-6 space-y-5 text-sm text-slate-400">
              <div>
                <p className="font-semibold text-white">Registered location</p>
                <p className="mt-1 leading-6">
                  Maromoka Bas, Ambohimandroso
                  <br />
                  Antanifotsy, Madagascar
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">NIF</p>
                <p className="mt-1">3010953159</p>
              </div>

              <div>
                <p className="font-semibold text-white">STAT</p>
                <p className="mt-1">71102 12 2026 0 00690</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col gap-5 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} Tanana Smart Base. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="transition hover:text-slate-300">
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-slate-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}