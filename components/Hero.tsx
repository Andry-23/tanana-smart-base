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
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            {eyebrow}
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {title}
          </h1>

          <div className="mt-8 h-1 w-32 bg-sky-400" />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={primaryHref}
              className="rounded-md bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              {primaryLabel}
            </Link>

            <Link
              href={secondaryHref}
              className="rounded-md border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}