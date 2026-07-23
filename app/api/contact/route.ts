import {
  ContactDatabaseNotConfiguredError,
  saveContactSubmission,
} from "@/lib/contact-database";
import {
  defaultLocale,
  isLocale,
  type Locale,
} from "@/lib/i18n";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown;
  locale?: unknown;
  startedAt?: unknown;
};

const allowedSubjects = new Set([
  "Energy & Electrical Systems",
  "Water & Hydraulic Infrastructure",
  "Smart Agricultural Systems",
  "Technical & Engineering Consulting",
  "General Enquiry",
  "Collaboration",
  "Other",
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maximumRequestSize = 20_000;
const minimumCompletionTime = 1_500;

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function getLocale(value: unknown): Locale {
  return typeof value === "string" && isLocale(value)
    ? value
    : defaultLocale;
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

function isLikelyAutomatedSubmission(body: ContactRequest): boolean {
  if (getString(body.company)) {
    return true;
  }

  if (typeof body.startedAt !== "number") {
    return false;
  }

  return Date.now() - body.startedAt < minimumCompletionTime;
}

export async function POST(request: Request) {
  try {
    if (!isSameOrigin(request)) {
      return Response.json(
        { error: "Cross-origin submissions are not accepted." },
        { status: 403 },
      );
    }

    const contentLength = Number(
      request.headers.get("content-length") ?? 0,
    );

    if (
      Number.isFinite(contentLength) &&
      contentLength > maximumRequestSize
    ) {
      return Response.json(
        { error: "The submitted message is too large." },
        { status: 413 },
      );
    }

    const body = (await request.json()) as ContactRequest;

    // Silently accept honeypot or impossibly fast submissions without
    // creating a database record.
    if (isLikelyAutomatedSubmission(body)) {
      return Response.json({ success: true });
    }

    const name = getString(body.name);
    const email = getString(body.email).toLowerCase();
    const phone = getString(body.phone);
    const subject = getString(body.subject);
    const message = getString(body.message);
    const locale = getLocale(body.locale);

    if (name && (name.length < 2 || name.length > 100)) {
      return Response.json(
        { error: "Please provide a valid full name." },
        { status: 400 },
      );
    }

    if (email && (!emailPattern.test(email) || email.length > 150)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (phone.length > 40) {
      return Response.json(
        { error: "The phone number is too long." },
        { status: 400 },
      );
    }

    if (!allowedSubjects.has(subject)) {
      return Response.json(
        { error: "Please select a valid service or subject." },
        { status: 400 },
      );
    }

    if (message.length < 20 || message.length > 3000) {
      return Response.json(
        {
          error:
            "Your message must contain between 20 and 3,000 characters.",
        },
        { status: 400 },
      );
    }

    const id = crypto.randomUUID();

    await saveContactSubmission({
      id,
      submittedAt: new Date().toISOString(),
      language: locale,
      name: name || null,
      email: email || null,
      phone: phone || null,
      subject,
      message,
    });

    return Response.json({
      success: true,
      id,
    });
  } catch (error) {
    if (error instanceof ContactDatabaseNotConfiguredError) {
      console.error("CONTACT_DB is not configured.");

      return Response.json(
        {
          error:
            "The message service is temporarily unavailable. Please contact us by email or WhatsApp.",
        },
        { status: 503 },
      );
    }

    console.error("Contact API error:", error);

    return Response.json(
      {
        error:
          "Your message could not be processed. Please check the form and try again.",
      },
      { status: 500 },
    );
  }
}
