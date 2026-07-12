"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const services = [
  "Energy & Electrical Systems",
  "Water & Hydraulic Infrastructure",
  "Smart Agricultural Systems",
  "Technical & Engineering Consulting",
  "General Enquiry",
  "Collaboration",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setStatus("success");
      setFeedback(
        "Thank you. Your message has been sent successfully. Our team will respond as soon as possible.",
      );
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again.",
      );
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3.5 text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10";

  return (
    <div className="group relative mt-14 overflow-hidden rounded-3xl border border-white/80 bg-white/65 p-7 shadow-[0_22px_60px_rgba(15,23,42,0.10)] backdrop-blur-md transition duration-500 hover:border-sky-300 hover:bg-white/80 hover:shadow-[0_30px_80px_rgba(14,165,233,0.14)] md:p-10 lg:p-12">
      {/* Decorative engineering details */}
      <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 translate-x-20 -translate-y-20 rounded-full border border-sky-300/40 bg-sky-300/10 transition duration-700 group-hover:scale-125" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 -translate-x-16 translate-y-16 rounded-full border border-blue-300/30 bg-blue-300/10 transition duration-700 group-hover:scale-125" />

      <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        {/* Form introduction */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Send Us a Message
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            Tell us about your project or technical requirement
          </h2>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-1 w-20 bg-sky-500 transition-all duration-500 group-hover:w-28" />
            <div className="h-2 w-2 rounded-full bg-sky-500" />
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Provide a brief description of what you need. We will review your
            enquiry and contact you to discuss the technical requirements,
            practical options and next steps.
          </p>

          <div className="mt-8 rounded-2xl border border-sky-200/70 bg-sky-50/80 p-5">
            <p className="font-semibold text-slate-950">
              Useful information to include
            </p>

            <p className="mt-2 leading-7 text-slate-600">
              Project location, intended use, expected capacity, existing
              equipment, constraints, preferred timeline and available budget.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="relative">
          {/* Spam-protection honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company website</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              Full name <span className="text-sky-600">*</span>
              <input
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder="Your full name"
                className={inputClassName}
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700">
              Email address <span className="text-sky-600">*</span>
              <input
                name="email"
                type="email"
                required
                maxLength={150}
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClassName}
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700">
              Phone / WhatsApp
              <input
                name="phone"
                type="tel"
                maxLength={40}
                autoComplete="tel"
                placeholder="+261..."
                className={inputClassName}
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700">
              Service or subject <span className="text-sky-600">*</span>
              <select
                name="subject"
                required
                defaultValue=""
                className={inputClassName}
              >
                <option value="" disabled>
                  Select a subject
                </option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-6 block text-sm font-semibold text-slate-700">
            Message <span className="text-sky-600">*</span>
            <textarea
              name="message"
              required
              minLength={20}
              maxLength={3000}
              rows={7}
              placeholder="Describe your project, technical requirement or collaboration idea..."
              className={`${inputClassName} resize-y`}
            />
          </label>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-6 text-slate-500">
              Fields marked with an asterisk are required. Your information
              will only be used to respond to this enquiry.
            </p>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex min-w-44 items-center justify-center gap-3 rounded-md bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_18px_40px_rgba(14,165,233,0.28)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending..." : "Submit Message"}

              {status !== "sending" && (
                <span aria-hidden="true">→</span>
              )}
            </button>
          </div>

          {feedback && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-6 rounded-xl border px-5 py-4 text-sm font-medium ${
                status === "success"
                  ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                  : "border-red-300 bg-red-50 text-red-800"
              }`}
            >
              {feedback}
            </div>
          )}
        </form>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-700 group-hover:w-full" />
    </div>
  );
}