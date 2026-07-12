import AboutPreview from "@/components/AboutPreview";
import Contact from "@/components/Contact";

export default function AboutPage() {
  return (
    <main className="bg-[#EAF1F6]">
      {/* Hero */}
      <section className="bg-[#0b3557] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            About Tanana Smart Base
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            Practical engineering solutions designed for Madagascar.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
            We combine engineering, innovation and practical field experience to
            develop reliable infrastructure for energy, water, agriculture and
            rural development.
          </p>
        </div>
      </section>

      {/* Existing About section */}
      <AboutPreview />

      {/* Company philosophy */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Philosophy
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-700">
            At Tanana Smart Base, engineering is more than technical design.
            Every project begins with understanding local realities, available
            resources and long-term sustainability.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-700">
            We believe practical solutions should be technically sound,
            economically realistic and easy to maintain throughout their entire
            service life.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-700">
            Our objective is to help communities, farmers, industries,
            institutions and businesses gain reliable infrastructure that
            creates lasting value.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              To provide practical engineering solutions that improve rural
              infrastructure, increase productivity and support sustainable
              development across Madagascar.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Vision
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              To become one of Madagascar's leading engineering companies for
              practical, innovative and maintainable infrastructure solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </main>
  );
}