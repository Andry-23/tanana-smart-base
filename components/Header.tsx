import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header
  className="sticky top-0 z-50 bg-[#0b3557] text-white"
  style={{ boxShadow: "0 8px 18px rgba(0, 0, 0, 0.35)" }}
>
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          Tanana Smart Base
        </Link>

        <nav aria-label="Main navigation">
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
      </div>
    </header>
  );
}