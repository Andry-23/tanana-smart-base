export default function ContactCTA() {
  const whatsappUrl =
    "https://wa.me/261325815100?text=Hello%20Tanana%20Smart%20Base%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  const emailUrl =
    "mailto:info@tananasmartbase.com?subject=Project%20Enquiry%20-%20Tanana%20Smart%20Base&body=Hello%20Tanana%20Smart%20Base%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project.";

  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-[#EAF1F6] px-6 py-20 md:py-24"
    >
      {/* Subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.10) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Large translucent engineering circles */}
      <div className="pointer-events-none absolute -left-36 top-8 h-96 w-96 rounded-full border border-sky-300/40 bg-sky-300/15 blur-[1px]" />

      <div className="pointer-events-none absolute -right-28 bottom-0 h-[420px] w-[420px] rounded-full border border-blue-300/30 bg-blue-300/15" />

      {/* Blueprint-style animated path */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1600 700"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 560H250V480H430V530H660V420H840V470H1090V350H1290V400H1600"
          stroke="rgba(14,165,233,0.35)"
          strokeWidth="2"
          strokeDasharray="10 12"
          className="animate-pulse"
        />

        <circle cx="250" cy="480" r="5" fill="rgba(14,165,233,0.55)" />
        <circle cx="660" cy="420" r="5" fill="rgba(14,165,233,0.55)" />
        <circle cx="1090" cy="350" r="5" fill="rgba(14,165,233,0.55)" />
      </svg>

      <div className="relative mx-auto max-w-7xl">
        {/* Main dark project card */}
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

          {/* Expanding card circles */}
          <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 translate-x-20 -translate-y-20 rounded-full border border-sky-400/25 bg-sky-400/10 transition duration-700 group-hover:scale-125 group-hover:border-sky-400/45 group-hover:bg-sky-400/15" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-16 translate-y-16 rounded-full border border-blue-400/20 bg-blue-400/10 transition duration-700 group-hover:scale-125" />

          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Main message */}
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
                Discuss your requirements directly with Tanana Smart Base. We
                can help define the need, evaluate practical options and
                develop a solution adapted to your site, budget and operating
                conditions.
              </p>
            </div>

            {/* Clickable contact cards */}
            <div className="grid gap-5">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Tanana Smart Base on WhatsApp at +261 32 58 151 00"
                className="group/whatsapp relative overflow-hidden rounded-2xl border border-sky-300/40 bg-sky-500 p-6 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-sky-400 hover:shadow-[0_22px_50px_rgba(14,165,233,0.35)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-white/10 transition duration-500 group-hover/whatsapp:scale-150" />

                <div className="relative flex items-center gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-7 w-7"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.2 10.1c.8 1.8 2 3 3.8 3.8l1.3-1.3c.2-.2.5-.3.8-.2.9.3 1.8.5 2.8.5.4 0 .7.3.7.7V16c0 .4-.3.7-.7.7A9.7 9.7 0 0 1 7.3 7c0-.4.3-.7.7-.7h2.4c.4 0 .7.3.7.7 0 1 .2 1.9.5 2.8.1.3 0 .6-.2.8l-1.3 1.3"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                      />
                    </svg>
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                      WhatsApp / Mobile
                    </p>

                    <p className="mt-2 text-xl font-bold">
                      +261 32 58 151 00
                    </p>

                    <p className="mt-1 text-sm text-white/80">
                      Start a project conversation
                    </p>
                  </div>

                  <span className="ml-auto text-2xl transition-transform duration-300 group-hover/whatsapp:translate-x-1">
                    →
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={emailUrl}
                aria-label="Email Tanana Smart Base at info@tananasmartbase.com"
                className="group/email relative overflow-hidden rounded-2xl border border-white/70 bg-white p-6 text-slate-950 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_22px_50px_rgba(15,23,42,0.18)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-sky-400/10 transition duration-500 group-hover/email:scale-150 group-hover/email:bg-sky-400/15" />

                <div className="relative flex items-center gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-600 transition duration-300 group-hover/email:border-sky-400 group-hover/email:bg-sky-500 group-hover/email:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-7 w-7"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4 7 8 6 8-6"
                      />
                    </svg>
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                      Email Our Team
                    </p>

                    <p className="mt-2 break-all text-lg font-bold sm:text-xl">
                      info@tananasmartbase.com
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Send your project requirements
                    </p>
                  </div>

                  <span className="ml-auto text-2xl text-sky-600 transition-transform duration-300 group-hover/email:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Animated bottom line */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-400 transition-all duration-700 group-hover:w-full" />
        </div>
      </div>
    </section>
  );
}