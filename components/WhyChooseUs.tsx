const reasons = [
  {
    title: "Engineering-Led Thinking",
    description:
      "We approach each project through structured engineering logic: defining the problem, sizing the system, selecting suitable materials and equipment, reviewing costs, and planning implementation. This reduces guesswork and improves reliability from the outset.",
  },
  {
    title: "Built for Field Reality",
    description:
      "Our designs account for the practical constraints of rural environments, including limited infrastructure, difficult transport, variable site conditions, and the need for simple, robust, and maintainable systems that can perform over time.",
  },
  {
    title: "Cost-Conscious Performance",
    description:
      "We balance technical quality, durability, and affordability. The objective is not only to make a system work, but to ensure that it is economically realistic to build, operate, and maintain.",
  },
  {
    title: "Integrated Infrastructure Vision",
    description:
      "Energy, water, agricultural support, and structural systems should not be designed in isolation. We develop coordinated solutions so that each part of the infrastructure supports the others in a coherent and efficient way.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="px-6 py-20 text-slate-900"
      style={{ backgroundColor: "#CCDDEB" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Why Choose Tanana Smart Base
          </h2>

          <p className="mt-5 text-lg text-slate-700">
            Engineering precision. Practical solutions. Long-term impact.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 bg-sky-500" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {reason.title}
              </h3>

              <div className="mt-4 h-1 w-16 bg-sky-400" />

              <p className="mt-6 leading-7 text-slate-600">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}