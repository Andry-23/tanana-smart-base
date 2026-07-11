const services = [
  {
    title: "Solar Energy Systems",
    description:
      "Design and implementation of off-grid and hybrid solar systems for rural facilities, farms, workshops, and small productive sites. We focus on reliable generation, battery integration, energy efficiency, and system sizing adapted to real demand, operating conditions, and long-term use.",
  },
  {
    title: "Water Supply Infrastructure",
    description:
      "Engineering of pumping systems, elevated water storage, gravity-fed distribution, and related hydraulic infrastructure for reliable rural water access. Our approach prioritizes durability, operational simplicity, and solutions adapted to terrain, usage patterns, and maintenance realities.",
  },
  {
    title: "Agricultural Tools & Infrastructure",
    description:
      "Development of practical infrastructure that supports agricultural productivity, including irrigation systems, farm support installations, basic processing utilities, and energy-linked field solutions. We design systems that improve efficiency while remaining robust and realistic for local use.",
  },
  {
    title: "Technical & Engineering Consulting",
    description:
      "Engineering support for feasibility studies, concept development, cost estimation, technical review, optimization, and system planning. We help clients turn ideas into workable, well-structured projects with strong technical logic and practical implementation value.",
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