export default function Contact() {
  const whatsappUrl =
    "https://wa.me/261325815100?text=Hello%20Tanana%20Smart%20Base%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  const emailUrl =
    "mailto:info@tananasmartbase.com?subject=Project%20Enquiry%20-%20Tanana%20Smart%20Base";

  const locationUrl =
    "https://www.google.com/maps/dir/?api=1&destination=-19.540675091046943,47.41657887864126";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#DCE8F1] px-6 py-20 md:py-24"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Contact Tanana Smart Base
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Start a conversation with our team
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Contact us directly about engineering services, project ideas,
            technical requirements or collaboration opportunities.
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-1 w-24 bg-sky-500" />
            <div className="h-2 w-2 rounded-full bg-sky-500" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Tanana Smart Base on WhatsApp"
            className="group relative overflow-hidden rounded-2xl border border-sky-400/40 bg-sky-500 p-7 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-sky-400 hover:shadow-[0_22px_50px_rgba(14,165,233,0.35)]"
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-white/10 transition duration-500 group-hover:scale-150" />

            <div className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/25 bg-white/15">
                <svg
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

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                WhatsApp / Mobile
              </p>

              <p className="mt-2 text-2xl font-bold">+261 32 58 151 00</p>

              <p className="mt-3 text-white/80">
                Start a direct project conversation.
              </p>

              <span className="mt-6 inline-flex font-semibold">
                Open WhatsApp&nbsp; →
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href={emailUrl}
            aria-label="Email Tanana Smart Base"
            className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/75 p-7 text-slate-950 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-[0_22px_50px_rgba(15,23,42,0.16)]"
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-sky-400/10 transition duration-500 group-hover:scale-150" />

            <div className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-600 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Email Our Team
              </p>

              <p className="mt-2 break-all text-xl font-bold">
                info@tananasmartbase.com
              </p>

              <p className="mt-3 text-slate-500">
                Send your project requirements.
              </p>

              <span className="mt-6 inline-flex font-semibold text-sky-700">
                Write an email&nbsp; →
              </span>
            </div>
          </a>

          {/* Location */}
          <a
            href={locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to Tanana Smart Base"
            className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/75 p-7 text-slate-950 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-[0_22px_50px_rgba(15,23,42,0.16)]"
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-sky-400/10 transition duration-500 group-hover:scale-150" />

            <div className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-600 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">
                <svg
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
                    d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"
                  />
                  <circle cx="12" cy="10" r="2.25" />
                </svg>
              </span>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Our Location
              </p>

              <p className="mt-2 text-xl font-bold">
                Maromoka Bas, Ambohimandroso
              </p>

              <p className="mt-2 leading-6 text-slate-500">
                Antanifotsy, Madagascar
              </p>

              <span className="mt-6 inline-flex font-semibold text-sky-700">
                Get directions&nbsp; ↗
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}