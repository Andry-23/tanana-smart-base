import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Energy & Electrical Systems",
    description:
      "Design and implementation of practical electrical and renewable energy solutions adapted to local conditions.",
    items: [
      "Solar photovoltaic systems",
      "Battery storage and backup power",
      "Electrical distribution",
      "Protection and earthing systems",
      "Energy assessment and system sizing",
    ],
  },
  {
    title: "Water & Hydraulic Infrastructure",
    description:
      "Reliable water supply, pumping and distribution systems for communities, farms, facilities and local projects.",
    items: [
      "Water pumping systems",
      "Storage and distribution",
      "Pipelines and hydraulic networks",
      "Borehole and well infrastructure",
      "Irrigation and water-use planning",
    ],
  },
  {
    title: "Smart Agricultural Systems",
    description:
      "Practical agricultural infrastructure designed to improve productivity, resilience and resource efficiency.",
    items: [
      "Irrigation systems",
      "Solar-powered agricultural equipment",
      "Water management for farming",
      "Farm infrastructure planning",
      "Appropriate technology integration",
    ],
  },
  {
    title: "Technical & Engineering Consulting",
    description:
      "Engineering support for design, assessment, improvement, documentation and project implementation.",
    items: [
      "Technical studies and assessments",
      "Engineering design support",
      "Equipment selection and sizing",
      "Maintenance and reliability support",
      "Technical documentation and reporting",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand the Requirement",
    description:
      "We begin by reviewing the actual need, site conditions, constraints and expected outcome.",
  },
  {
    number: "02",
    title: "Develop a Practical Solution",
    description:
      "We compare realistic technical options and select an approach suited to the project context.",
  },
  {
    number: "03",
    title: "Design and Plan",
    description:
      "The solution is translated into clear technical requirements, equipment selections and implementation steps.",
  },
  {
    number: "04",
    title: "Support Implementation",
    description:
      "We provide technical guidance during installation, commissioning, improvement or project execution.",
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Tanana Smart Base services in energy, water infrastructure, smart agriculture and technical engineering consulting in Madagascar.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/services",
    siteName: "Tanana Smart Base",
    title: "Engineering Services | Tanana Smart Base",
    description:
      "Practical engineering services for energy, water, agriculture and infrastructure projects in Madagascar.",
  },
};

export default function ServicesPage() {
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
            Our Services
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Practical engineering support from concept to implementation.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
            Tanana Smart Base develops reliable, maintainable and locally
            appropriate solutions for energy, water, agriculture and technical
            infrastructure projects in Madagascar.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              Discuss Your Project
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-sky-300 hover:bg-white/15"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Service cards */}
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
              Engineering Disciplines
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Integrated services for practical infrastructure.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our services can be delivered individually or combined into one
              integrated solution depending on the project requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/65 p-8 shadow-[0_22px_60px_rgba(15,23,42,0.10)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-sky-300 hover:bg-white/90 hover:shadow-[0_30px_80px_rgba(14,165,233,0.16)] md:p-10"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 translate-x-14 -translate-y-14 rounded-full border border-sky-300/40 bg-sky-300/10 transition duration-700 group-hover:scale-125" />

                <div className="relative">
                  <span className="text-sm font-bold tracking-[0.2em] text-sky-600">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-slate-950 md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500"
                        />

                        <span className="leading-7">{item}</span>
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

      {/* Process */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              How We Work
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              A clear and practical engineering process.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <p className="text-sm font-bold tracking-[0.2em] text-sky-600">
                  {step.number}
                </p>

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
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
                Start a Conversation
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                Tell us what you are trying to build or improve.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Share your project requirement, technical challenge or initial
                idea. We will review it and identify the next practical step.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              Contact Tanana Smart Base
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}