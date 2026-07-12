import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 md:py-24"
    >
      {/* Engineering grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.24) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      {/* Background glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] px-8 py-12 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-500 hover:border-sky-400/50 hover:bg-white/[0.09] hover:shadow-[0_32px_100px_rgba(14,165,233,0.18)] md:px-12 md:py-16 lg:px-16">
          {/* Expanding decorative shapes */}
          <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 translate-x-20 -translate-y-20 rounded-full border border-sky-400/20 bg-sky-400/10 transition duration-700 group-hover:scale-125 group-hover:border-sky-400/40" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 -translate-x-16 translate-y-16 rounded-full border border-blue-400/20 bg-blue-400/10 transition duration-700 group-hover:scale-125" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Have a project or technical challenge in mind?
              </h2>

              <div className="mt-7 flex items-center gap-3">
                <div className="h-1 w-24 bg-sky-400 transition-all duration-500 group-hover:w-36" />
                <div className="h-2 w-2 rounded-full bg-sky-400" />
              </div>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                Let us discuss your needs and develop a practical, reliable
                and locally adapted engineering solution.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/contact?type=project"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_18px_40px_rgba(14,165,233,0.30)]"
              >
                Discuss Your Project

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-white/15"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom animated line */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-400 transition-all duration-700 group-hover:w-full" />
        </div>
      </div>
    </section>
  );
}