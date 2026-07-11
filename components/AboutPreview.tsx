export default function AboutPreview() {
  return (
    <section
  className="px-6 py-20 text-slate-900 md:py-24"
  style={{ backgroundColor: "#EAF1F6" }}
>
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
            About Tanana Smart Base
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Practical engineering for stronger rural communities
          </h2>

          <div className="mt-6 h-1 w-24 bg-sky-400" />
        </div>

       <div>
  <p className="text-lg leading-8 text-slate-600">
    DEPLOYMENT TEST 01 : This text was updated locally to verify that
    changes are correctly published through GitHub and Cloudflare.
  </p>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    DEPLOYMENT TEST 02 : If you can see this message on the live website,
    the automatic deployment system is working correctly.
  </p>

          <a
            href="/about"
            className="mt-8 inline-flex rounded-md bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}