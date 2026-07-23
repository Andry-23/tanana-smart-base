# Tanana Smart Base

Multilingual Tanana Smart Base website built with Next.js, React, TypeScript
and Tailwind CSS, and deployed to Cloudflare Workers through OpenNext.

## Languages and routes

The complete public website is available in:

- English: `/en`
- French: `/fr`
- Malagasy: `/mg`

Unprefixed routes such as `/`, `/about` and `/contact` permanently redirect to
their English equivalents. The language selector keeps the visitor on the
corresponding page when changing language.

## Local development

Install dependencies and start the Next.js development server:

```bash
npm ci
npm run dev
```

The standard production build is:

```bash
npm run build
```

## Contact submissions with Cloudflare D1

The contact API stores submissions in the `CONTACT_DB` D1 binding. Each record
contains:

`submitted_at | language | name | email | phone | subject | message | status`

The initial status is `new`. Allowed later statuses are `reviewed`,
`completed` and `spam`.

Before the first deployment:

1. Create a D1 database named `tanana-smart-base-contact` in Cloudflare.
2. Copy its database ID into `wrangler.jsonc`, replacing
   `REPLACE_WITH_DATABASE_ID`.
3. Apply the database migration:

```bash
npm run d1:migrate:remote
```

For a local D1 database, apply the same migration with:

```bash
npm run d1:migrate:local
```

The contact endpoint validates all fields, rejects cross-origin requests,
limits request size and uses a honeypot plus minimum-completion-time check for
basic spam protection.

## Cloudflare deployment

Build and preview the Cloudflare version:

```bash
npm run preview
```

Deploy after the D1 binding and migration are ready:

```bash
npm run deploy
```
