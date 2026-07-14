"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export type ContactFormOption = {
  value: string;
  label: string;
};

const defaultServices: readonly ContactFormOption[] = [
  {
    value: "Energy & Electrical Systems",
    label: "Energy & Electrical Systems",
  },
  {
    value: "Water & Hydraulic Infrastructure",
    label: "Water & Hydraulic Infrastructure",
  },
  {
    value: "Smart Agricultural Systems",
    label: "Smart Agricultural Systems",
  },
  {
    value: "Technical & Engineering Consulting",
    label: "Technical & Engineering Consulting",
  },
  {
    value: "General Enquiry",
    label: "General Enquiry",
  },
  {
    value: "Collaboration",
    label: "Collaboration",
  },
  {
    value: "Other",
    label: "Other",
  },
];

type ContactFormProps = {
  services?: readonly ContactFormOption[];

  eyebrow?: string;
  title?: string;
  description?: string;

  usefulInformationTitle?: string;
  usefulInformationDescription?: string;

  contactNotice?: string;

  fullNameLabel?: string;
  optionalLabel?: string;
  fullNamePlaceholder?: string;

  emailLabel?: string;
  emailPlaceholder?: string;

  phoneLabel?: string;
  phonePlaceholder?: string;

  subjectLabel?: string;
  subjectPlaceholder?: string;

  messageLabel?: string;
  messagePlaceholder?: string;

  requirementNote?: string;

  sendingLabel?: string;
  submitLabel?: string;

  successMessage?: string;
  errorMessage?: string;

  honeypotLabel?: string;
};

export default function ContactForm({
  services = defaultServices,

  eyebrow = "Send Us a Message",
  title = "Tell us about your project or technical requirement",
  description = "Provide a brief description of what you need. We will review your enquiry and consider the technical requirements, practical options and possible next steps.",

  usefulInformationTitle = "Useful information to include",
  usefulInformationDescription = "Project location, intended use, expected capacity, existing equipment, constraints, preferred timeline and available budget.",

  contactNotice = "You may submit your message without providing personal contact information. However, please include an email address or phone/WhatsApp number if you would like us to contact you regarding your enquiry.",

  fullNameLabel = "Full name",
  optionalLabel = "optional",
  fullNamePlaceholder = "Your full name",

  emailLabel = "Email address",
  emailPlaceholder = "you@example.com",

  phoneLabel = "Phone / WhatsApp",
  phonePlaceholder = "+261...",

  subjectLabel = "Service or subject",
  subjectPlaceholder = "Select a subject",

  messageLabel = "Message",
  messagePlaceholder = "Describe your project, technical requirement or collaboration idea...",

  requirementNote = "Only the subject and message are required. Contact information is optional, but it allows us to reply if further discussion is necessary.",

  sendingLabel = "Sending...",
  submitLabel = "Submit Message",

  successMessage = "Thank you. Your message has been sent successfully. If you included contact information, our team will be able to respond to your enquiry.",
  errorMessage = "Your message could not be sent. Please try again.",

  honeypotLabel = "Company website",
}: ContactFormProps) {
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

      if (!response.ok) {
        throw new Error(errorMessage);
      }

      form.reset();
      setStatus("success");
      setFeedback(successMessage);
    } catch {
      setStatus("error");
      setFeedback(errorMessage);
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3.5 text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10";

  return (
    <div className="group relative mt-14 overflow-hidden rounded-3xl border border-white/80 bg-white/65 p-7 shadow-[0_22px_60px_rgba(15,23,42,0.10)] backdrop-blur-md transition duration-500 hover:border-sky-300 hover:bg-white/80 hover:shadow-[0_30px_80px_rgba(14,165,233,0.14)] md:p-10 lg:p-12">
      <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 translate-x-20 -translate-y-20 rounded-full border border-sky-300/40 bg-sky-300/10 transition duration-700 group-hover:scale-125" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 -translate-x-16 translate-y-16 rounded-full border border-blue-300/30 bg-blue-300/10 transition duration-700 group-hover:scale-125" />

      <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            {title}
          </h2>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-1 w-20 bg-sky-500 transition-all duration-500 group-hover:w-28" />
            <div className="h-2 w-2 rounded-full bg-sky-500" />
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-8 rounded-2xl border border-sky-200/70 bg-sky-50/80 p-5">
            <p className="font-semibold text-slate-950">
              {usefulInformationTitle}
            </p>

            <p className="mt-2 leading-7 text-slate-600">
              {usefulInformationDescription}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">{honeypotLabel}</label>

            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="mb-6 rounded-xl border border-sky-200 bg-sky-50/80 px-5 py-4 text-sm leading-6 text-slate-600">
            {contactNotice}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              {fullNameLabel}{" "}
              <span className="font-normal text-slate-400">
                ({optionalLabel})
              </span>

              <input
                name="name"
                type="text"
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder={fullNamePlaceholder}
                className={inputClassName}
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700">
              {emailLabel}{" "}
              <span className="font-normal text-slate-400">
                ({optionalLabel})
              </span>

              <input
                name="email"
                type="email"
                maxLength={150}
                autoComplete="email"
                placeholder={emailPlaceholder}
                className={inputClassName}
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700">
              {phoneLabel}{" "}
              <span className="font-normal text-slate-400">
                ({optionalLabel})
              </span>

              <input
                name="phone"
                type="tel"
                maxLength={40}
                autoComplete="tel"
                placeholder={phonePlaceholder}
                className={inputClassName}
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700">
              {subjectLabel} <span className="text-sky-600">*</span>

              <select
                name="subject"
                required
                defaultValue=""
                className={inputClassName}
              >
                <option value="" disabled>
                  {subjectPlaceholder}
                </option>

                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-6 block text-sm font-semibold text-slate-700">
            {messageLabel} <span className="text-sky-600">*</span>

            <textarea
              name="message"
              required
              minLength={20}
              maxLength={3000}
              rows={7}
              placeholder={messagePlaceholder}
              className={`${inputClassName} resize-y`}
            />
          </label>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-6 text-slate-500">
              {requirementNote}
            </p>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex min-w-44 items-center justify-center gap-3 rounded-md bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_18px_40px_rgba(14,165,233,0.28)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? sendingLabel : submitLabel}

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