export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            Engineering • Infrastructure • Rural Development
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Engineering Solutions for Rural Development in Madagascar
          </h1>

          <div className="mt-8 h-1 w-32 bg-sky-400" />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
            Practical, reliable and maintainable systems for energy, water,
            agriculture and technical infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/services"
              className="rounded-md bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Explore Services
            </a>

            <a
              href="/contact"
              className="rounded-md border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}