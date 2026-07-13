import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

const projectAreas = [
  {
    number: "01",
    title: "Energy & Electrical Systems",
    description:
      "Solar energy, battery storage, electrical distribution, protection systems and practical power solutions adapted to local conditions.",
    examples: [
      "Solar photovoltaic installations",
      "Battery and backup power systems",
      "Electrical distribution infrastructure",
      "Protection, earthing and system improvement",
    ],
  },
  {
    number: "02",
    title: "Water & Hydraulic Infrastructure",
    description:
      "Water pumping, storage, distribution and hydraulic infrastructure for communities, farms, facilities and rural projects.",
    examples: [
      "Water pumping systems",
      "Storage tanks and distribution networks",
      "Pipelines, valves and hydraulic equipment",
      "Borehole, well and irrigation infrastructure",
    ],
  },
  {
    number: "03",
    title: "Smart Agricultural Systems",
    description:
      "Agricultural infrastructure and appropriate technologies intended to improve productivity, resilience and resource efficiency.",
    examples: [
      "Efficient irrigation systems",
      "Solar-powered agricultural equipment",
      "Water management for farming",
      "Practical farm infrastructure",
    ],
  },
  {
    number: "04",
    title: "Technical & Engineering Consulting",
    description:
      "Technical studies, engineering assessments, documentation, equipment selection and project implementation support.",
    examples: [
      "Technical studies and assessments",
      "Engineering design support",
      "Equipment sizing and selection",
      "Maintenance and reliability improvement",
    ],
  },
];

const projectStages = [
  {
    number: "01",
    title: "Requirement Definition",
    description:
      "Understanding the real need, site conditions, constraints and expected project outcome.",
  },
  {
    number: "02",
    title: "Technical Development",
    description:
      "Evaluating practical options and preparing an appropriate engineering solution.",
  },
  {
    number: "03",
    title: "Implementation Support",
    description:
      "Supporting installation, commissioning, improvement and project execution.",
  },
  {
    number: "04",
    title: "Documentation & Follow-up",
    description:
      "Providing clear technical information for operation, maintenance and future development.",
  },
];

const projectsDescription =
  "Explore the engineering project areas of Tanana Smart Base, including energy, water infrastructure, smart agriculture and technical consulting in Madagascar.";

export const metadata: Metadata = {
  title: "Projects",

  description: projectsDescription,

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/projects",
    siteName: "Tanana Smart Base",
    title: "Engineering Projects | Tanana Smart Base",
    description: projectsDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: "Engineering Projects | Tanana Smart Base",
    description: projectsDescription,
  },
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#EAF1F6] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b3557] px-6 py-24 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(125,211,252,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            Our Projects
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Practical engineering projects built around real needs.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
            Tanana Smart Base develops and supports projects in energy, water,
            agriculture and technical infrastructure, with solutions adapted to
            local conditions and long-term use.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              Discuss a Project
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-sky-300 hover:bg-white/15"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio notice */}
      <section className="px-6 pt-20 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-sky-200 bg-sky-50/80 px-8 py-8 shadow-sm md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Project Portfolio Development
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Detailed project case studies, photographs and technical results
              will be added progressively. The categories below represent the
              principal project areas supported by Tanana Smart Base.
            </p>
          </div>
        </div>
      </section>

      {/* Project areas */}
      <section className="relative overflow-hidden px-6 py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Project Areas
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Integrated projects across essential infrastructure sectors.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Projects may focus on one discipline or combine several systems
              into one coordinated solution.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {projectAreas.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/65 p-8 shadow-[0_22px_60px_rgba(15,23,42,0.10)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-sky-300 hover:bg-white/90 hover:shadow-[0_30px_80px_rgba(14,165,233,0.16)] md:p-10"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 translate-x-14 -translate-y-14 rounded-full border border-sky-300/40 bg-sky-300/10 transition duration-700 group-hover:scale-125" />

                <div className="relative">
                  <span className="text-sm font-bold tracking-[0.2em] text-sky-600">
                    {project.number}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-slate-950 md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {project.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {project.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500"
                        />

                        <span className="leading-7">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-700 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project approach */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Project Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              From initial need to practical implementation.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every project is developed through a structured process intended
              to produce clear, realistic and maintainable results.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projectStages.map((stage) => (
              <article
                key={stage.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <p className="text-sm font-bold tracking-[0.2em] text-sky-600">
                  {stage.number}
                </p>

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {stage.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-8 py-14 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] md:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                Start Your Project
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                Have a technical need, project idea or infrastructure challenge?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Share the requirement with Tanana Smart Base. We will review the
                context and help identify a practical next step.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              Contact Our Team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}