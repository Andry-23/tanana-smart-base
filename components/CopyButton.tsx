"use client";

import { useState } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
};

export default function CopyButton({ value, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      title={`Copy ${label}`}
      className="inline-flex items-center gap-2 rounded-lg border border-sky-300/60 bg-white/80 px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-500 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      {copied ? (
        <>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5 12 4 4L19 6"
            />
          </svg>

          Copied
        </>
      ) : (
        <>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <rect x="8" y="8" width="11" height="11" rx="2" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
            />
          </svg>

          Copy
        </>
      )}
    </button>
  );
}