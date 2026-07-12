import { Resend } from "resend";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown;
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

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  const characters: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return value.replace(/[&<>"']/g, (character) => characters[character]);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const name = getString(body.name);
    const email = getString(body.email).toLowerCase();
    const phone = getString(body.phone);
    const subject = getString(body.subject);
    const message = getString(body.message);
    const company = getString(body.company);

    // Honeypot field: silently accept likely spam submissions.
    if (company) {
      return Response.json({ success: true });
    }

    // Name is optional, but validate it when provided.
    if (name && (name.length < 2 || name.length > 100)) {
      return Response.json(
        { error: "Please provide a valid full name." },
        { status: 400 },
      );
    }

    // Email is optional, but validate it when provided.
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

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return Response.json(
        {
          error:
            "The message service is not configured yet. Please contact us by email or WhatsApp.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name || "Not provided");
    const safeEmail = escapeHtml(email || "Not provided");
    const safePhone = escapeHtml(phone || "Not provided");
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { data, error } = await resend.emails.send({
      from: "Tanana Smart Base Website <website@send.tananasmartbase.com>",
      to: ["info@tananasmartbase.com"],
      subject: `New website enquiry — ${subject}`,

      ...(email
        ? {
            headers: {
              "Reply-To": email,
            },
          }
        : {}),

      text: [
        "New Tanana Smart Base website enquiry",
        "",
        `Name: ${name || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        `Phone / WhatsApp: ${phone || "Not provided"}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),

      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h1 style="font-size: 24px; margin-bottom: 24px;">
            New website enquiry
          </h1>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name</td>
              <td style="padding: 8px;">${safeName}</td>
            </tr>

            <tr>
              <td style="padding: 8px; font-weight: bold;">Email</td>
              <td style="padding: 8px;">${safeEmail}</td>
            </tr>

            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone / WhatsApp</td>
              <td style="padding: 8px;">${safePhone}</td>
            </tr>

            <tr>
              <td style="padding: 8px; font-weight: bold;">Subject</td>
              <td style="padding: 8px;">${safeSubject}</td>
            </tr>
          </table>

          <div style="padding: 20px; background: #f0f9ff; border-left: 4px solid #0ea5e9;">
            <strong>Message</strong>
            <p style="margin-bottom: 0;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error:
            "Your message could not be sent. Please try again or contact us by email or WhatsApp.",
        },
        { status: 502 },
      );
    }

    return Response.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
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