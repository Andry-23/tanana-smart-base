import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function Hero({
  eyebrow = "Engineering \u2022 Infrastructure \u2022 Rural Development",
  title = "Engineering Solutions for Rural Development in Madagascar",
  description = "Practical, reliable and maintainable systems for energy, water, agriculture and technical infrastructure.",
  primaryLabel = "Explore Services",
  primaryHref = "/services",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b3557] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/hero-smart-mobile.webp')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/hero-smart-desktop.webp')]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#041927]/95 via-[#041927]/65 to-[#041927]/15 md:bg-gradient-to-r md:from-[#041927]/95 md:via-[#041927]/65 md:to-black/10"
      />

      <div className="mx-auto flex min-h-[700px] max-w-7xl items-start px-6 py-16 md:min-h-[680px] md:items-center md:py-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 sm:text-sm md:mb-5 md:tracking-[0.22em]">
            {eyebrow}
          </p>

          <h1 className="max-w-4xl text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl md:leading-tight">
            {title}
          </h1>

          <div className="mt-6 h-1 w-24 bg-sky-400 md:mt-8 md:w-32" />

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg md:mt-8 md:text-xl md:leading-8">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
            <Link
              href={primaryHref}
              className="rounded-md bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-300 md:px-6"
            >
              {primaryLabel}
            </Link>

            <Link
              href={secondaryHref}
              className="rounded-md border border-white/70 bg-black/10 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900 md:px-6"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
