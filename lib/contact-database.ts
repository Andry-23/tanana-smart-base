import "server-only";

import { getCloudflareContext } from "@opennextjs/cloudflare";

type ContactDatabaseResult = {
  success: boolean;
};

type ContactPreparedStatement = {
  bind: (...values: Array<string | null>) => {
    run: () => Promise<ContactDatabaseResult>;
  };
};

type ContactDatabase = {
  prepare: (query: string) => ContactPreparedStatement;
};

declare global {
  interface CloudflareEnv {
    CONTACT_DB?: ContactDatabase;
  }
}

export type ContactSubmission = {
  id: string;
  submittedAt: string;
  language: "en" | "fr" | "mg";
  name: string | null;
  email: string | null;
  phone: string | null;
  subject: string;
  message: string;
};

export class ContactDatabaseNotConfiguredError extends Error {
  constructor() {
    super("The CONTACT_DB binding is not configured.");
    this.name = "ContactDatabaseNotConfiguredError";
  }
}

export async function saveContactSubmission(
  submission: ContactSubmission,
): Promise<void> {
  const { env } = getCloudflareContext();
  const database = env.CONTACT_DB;

  if (!database) {
    throw new ContactDatabaseNotConfiguredError();
  }

  const result = await database
    .prepare(
      `INSERT INTO contact_submissions (
        id,
        submitted_at,
        language,
        name,
        email,
        phone,
        subject,
        message,
        status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new')`,
    )
    .bind(
      submission.id,
      submission.submittedAt,
      submission.language,
      submission.name,
      submission.email,
      submission.phone,
      submission.subject,
      submission.message,
    )
    .run();

  if (!result.success) {
    throw new Error("The contact submission could not be saved.");
  }
}
