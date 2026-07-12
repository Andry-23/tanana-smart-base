const services = [
  {
    number: "01",
    title: "Integrated Energy & Electrical Systems",
    description:
      "Design and implementation of modern energy and electrical systems for homes, farms, businesses and rural infrastructure. Our solutions combine solar generation, battery storage, electrical distribution, protection, lighting, controls and backup power for reliable, efficient and safe operation.",
  },
  {
    number: "02",
    title: "Water Systems & Hydraulic Infrastructure",
    description:
      "Engineering of complete water systems from wells and water sources to pumping, storage, piping and distribution. We integrate pumps, tanks, pipelines, valves, controls and supporting infrastructure to deliver durable, maintainable solutions adapted to site conditions and operational needs.",
  },
  {
    number: "03",
    title: "Smart Agricultural Systems & Rural Infrastructure",
    description:
      "Development of practical, technology-enabled systems for farms, livestock operations and rural production. Our solutions may combine irrigation, energy, water, equipment, monitoring, storage, processing and supporting infrastructure to improve productivity, resilience and resource efficiency.",
  },
  {
    number: "04",
    title: "Technical & Engineering Consulting",
    description:
      "Engineering support for feasibility studies, concept development, system design, technical review, cost estimation and project planning. We transform ideas and operational needs into technically sound, economically realistic and implementation-ready solutions.",
  },
];

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#DCE8F1] px-6 py-20 text-slate-900 md:py-24"
    >
      {/* Technical grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.12) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      {/* Background glows */}
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Our Core Services
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Practical engineering solutions for sustainable rural impact
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-1 w-24 bg-sky-500" />
            <div className="h-2 w-2 rounded-full bg-sky-500" />
          </div>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/55 p-8 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-sky-300 hover:bg-white/90 hover:shadow-[0_26px_65px_rgba(14,165,233,0.18)] md:p-9"
            >
              {/* Large faded number */}
              <span className="pointer-events-none absolute right-5 top-1 text-7xl font-black text-sky-500/[0.07] transition duration-500 group-hover:scale-110 group-hover:text-sky-500/[0.13] md:text-8xl">
                {service.number}
              </span>

              {/* Expanding corner detail */}
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-14 -translate-y-14 rounded-full border border-sky-300/30 bg-sky-400/10 transition duration-500 group-hover:scale-150 group-hover:border-sky-400/40 group-hover:bg-sky-400/20" />

              <div className="relative">
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-300/60 bg-sky-400/10 text-sm font-bold text-sky-700 shadow-sm transition duration-300 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-lg">
                    {service.number}
                  </span>

                  <h3 className="max-w-md text-xl font-bold leading-snug text-slate-950 md:text-2xl">
                    {service.title}
                  </h3>
                </div>

                <div className="mt-6 h-1 w-16 bg-sky-400 transition-all duration-500 group-hover:w-28" />

                <p className="mt-6 text-base leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-sky-700 opacity-0 transition duration-300 group-hover:opacity-100">
                  Engineering discipline
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-3 rounded-md bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-xl"
          >
            Explore All Services

            <span
              aria-hidden="true"
              className="transition-transform duration-300 hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}