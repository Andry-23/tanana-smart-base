const services = [
  {
    title: "Integrated Energy & Electrical Systems",
    description:
      "Design and implementation of modern energy and electrical systems for homes, farms, businesses and rural infrastructure. Our solutions combine solar generation, battery storage, electrical distribution, protection, lighting, controls and backup power for reliable, efficient and safe operation."
  },
  {
    title: "Water Systems & Hydraulic Infrastructure",
    description:
      "Engineering of complete water systems from wells and water sources to pumping, storage, piping and distribution. We integrate pumps, tanks, pipelines, valves, controls and supporting infrastructure to deliver durable, maintainable solutions adapted to site conditions and operational needs."
  },
  {
    title: "Smart Agricultural Systems & Rural Infrastructure",
    description:
      "Development of practical, technology-enabled systems for farms, livestock operations and rural production. Our solutions may combine irrigation, energy, water, equipment, monitoring, storage, processing and supporting infrastructure to improve productivity, resilience and resource efficiency."
  },
  {
    title: "Technical & Engineering Consulting",
    description:
      "Engineering support for feasibility studies, concept development, system design, technical review, cost estimation and project planning. We transform ideas and operational needs into technically sound, economically realistic and implementation-ready solutions.",
  },
];

export default function ServicesPreview() {
  return (
    <section
  className="px-6 py-20 text-slate-900 md:py-24"
  style={{ backgroundColor: "#DCE8F1" }}
>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
            Our Core Services
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Practical engineering solutions for sustainable rural impact
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 bg-sky-400" />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <div className="mt-4 h-1 w-16 bg-sky-400" />

              <p className="mt-6 text-base leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex rounded-md bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}