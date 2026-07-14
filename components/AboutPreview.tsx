import Link from "next/link";

import AboutShowcase from "@/components/AboutShowcase";

type AboutPreviewProps = {
  eyebrow?: string;
  title?: string;
  firstParagraph?: string;
  secondParagraph?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function AboutPreview({
  eyebrow = "About Tanana Smart Base",
  title = "Practical engineering for stronger rural communities",
  firstParagraph = "Tanana Smart Base develops practical, reliable and maintainable solutions for rural development in Madagascar. Our work brings together energy, water, agriculture, construction and technical infrastructure to support communities, businesses and local projects.",
  secondParagraph = "We focus on solutions that are adapted to local conditions, technically sound and designed for long-term use.",
  buttonLabel = "Learn More About Us",
  buttonHref = "/about",
}: AboutPreviewProps) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#EAF1F6] px-6 py-20 text-slate-900 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.10) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-md transition duration-500 hover:border-sky-200 hover:shadow-[0_30px_90px_rgba(14,165,233,0.16)] md:p-12 lg:p-14">
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full border border-sky-300/40 bg-sky-300/10 transition duration-700" />

          <div className="pointer-events-none absolute bottom-8 left-8 hidden h-20 w-20 border-b border-l border-sky-400/30 lg:block" />

          <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
            <div className="relative">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
                {eyebrow}
              </p>

              <h2 className="max-w-xl text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
                {title}
              </h2>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-1 w-24 bg-sky-400 transition-all duration-500 hover:w-32" />
                <div className="h-2 w-2 rounded-full bg-sky-400" />
              </div>
            </div>

            <div className="group relative">
              <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-sky-300/30 bg-sky-300/10 transition duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />

              <div className="relative rounded-2xl border border-white/80 bg-white/70 p-7 shadow-lg backdrop-blur-md transition duration-500 group-hover:-translate-y-2 group-hover:border-sky-300 group-hover:bg-white/90 group-hover:shadow-2xl md:p-9">
                <div className="absolute right-6 top-6 h-12 w-12 rounded-full bg-sky-400/10 transition duration-500 group-hover:scale-150 group-hover:bg-sky-400/15" />

                <p className="relative text-lg leading-8 text-slate-600">
                  {firstParagraph}
                </p>

                <p className="relative mt-5 text-lg leading-8 text-slate-600">
                  {secondParagraph}
                </p>

                <Link
                  href={buttonHref}
                  className="relative mt-8 inline-flex items-center gap-3 rounded-md bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-xl"
                >
                  {buttonLabel}

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <AboutShowcase />
      </div>
    </section>
  );
}