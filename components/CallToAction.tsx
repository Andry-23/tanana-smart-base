export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-[#EAF1F6] px-6 py-20 md:py-24">
      {/* Engineering grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.10) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background technical circles */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full border border-sky-300/40 bg-sky-300/10" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full border border-blue-300/30 bg-blue-300/10" />

      {/* Blueprint path */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1600 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 470H230V400H420V450H650V350H850V400H1080V290H1280V340H1600"
          stroke="rgba(14,165,233,0.35)"
          strokeWidth="2"
          strokeDasharray="10 12"
          className="animate-pulse"
        />

        <circle cx="230" cy="400" r="5" fill="rgba(14,165,233,0.55)" />
        <circle cx="650" cy="350" r="5" fill="rgba(14,165,233,0.55)" />
        <circle cx="1080" cy="290" r="5" fill="rgba(14,165,233,0.55)" />
      </svg>

      <div className="relative mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 px-8 py-12 shadow-[0_30px_90px_rgba(15,23,42,0.22)] transition duration-500 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-[0_38px_110px_rgba(14,165,233,0.20)] md:px-12 md:py-16 lg:px-16">
          {/* Card grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56,189,248,0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.24) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Animated circles */}
          <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 translate-x-20 -translate-y-20 rounded-full border border-sky-400/25 bg-sky-400/10 transition duration-700 group-hover:scale-125 group-hover:border-sky-400/45" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-16 translate-y-16 rounded-full border border-blue-400/20 bg-blue-400/10 transition duration-700 group-hover:scale-125" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
                Ready to build something practical?
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Let&apos;s turn your technical need into a reliable engineering
                solution.
              </h2>

              <div className="mt-7 flex items-center gap-3">
                <div className="h-1 w-24 bg-sky-400 transition-all duration-500 group-hover:w-36" />
                <div className="h-2 w-2 rounded-full bg-sky-400" />
              </div>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                We can help define your needs, evaluate practical options and
                develop a solution adapted to your site, budget and operating
                conditions.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_18px_40px_rgba(14,165,233,0.30)]"
            >
              Contact Our Team
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-400 transition-all duration-700 group-hover:w-full" />
        </div>
      </div>
    </section>
  );
}