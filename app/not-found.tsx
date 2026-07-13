import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="bg-[#EAF1F6] text-slate-900">
      <section className="relative flex min-h-[72vh] items-center overflow-hidden px-6 py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.10) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full border border-sky-300/30 bg-sky-300/15 blur-2xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full border border-blue-300/30 bg-blue-300/15 blur-2xl" />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/65 px-8 py-14 text-center shadow-[0_28px_90px_rgba(15,23,42,0.14)] backdrop-blur-md transition duration-500 hover:border-sky-300 hover:bg-white/80 md:px-14 md:py-20">
            <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 translate-x-20 -translate-y-20 rounded-full border border-sky-300/40 bg-sky-300/10 transition duration-700 group-hover:scale-125" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 -translate-x-16 translate-y-16 rounded-full border border-blue-300/30 bg-blue-300/10 transition duration-700 group-hover:scale-125" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Page Not Found
              </p>

              <p
                aria-hidden="true"
                className="mt-6 text-7xl font-black tracking-tight text-sky-500 md:text-9xl"
              >
                404
              </p>

              <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                The page you are looking for is not available.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                The address may be outdated, incomplete or connected to an
                older version of the Tanana Smart Base website.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex min-w-48 items-center justify-center gap-3 rounded-md bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_18px_40px_rgba(14,165,233,0.28)]"
                >
                  Return Home
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex min-w-48 items-center justify-center rounded-md border border-slate-300 bg-white/80 px-7 py-4 font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-700"
                >
                  View Projects
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-w-48 items-center justify-center rounded-md border border-slate-300 bg-white/80 px-7 py-4 font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-700"
                >
                  Contact Us
                </Link>
              </div>

              <p className="mt-10 text-sm leading-6 text-slate-500">
                You can also use the navigation menu above to continue browsing
                the website.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-700 group-hover:w-full" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}