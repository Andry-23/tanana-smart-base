CREATE TABLE IF NOT EXISTS contact_submissions (
  id TEXT PRIMARY KEY,
  submitted_at TEXT NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('en', 'fr', 'mg')),
  name TEXT,
  email TEXT,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'reviewed', 'completed', 'spam'))
);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status_date
  ON contact_submissions (status, submitted_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_date
  ON contact_submissions (submitted_at DESC);
