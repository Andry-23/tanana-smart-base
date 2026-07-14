import type { MetadataRoute } from "next";

const siteUrl = "https://tananasmartbase.com";

type SitemapPage = {
  path: string;
  changeFrequency: "monthly" | "yearly";
  priority: number;
};

const pages: SitemapPage[] = [
  {
    path: "",
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/projects",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/privacy",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

function languageAlternates(path: string) {
  return {
    en: `${siteUrl}/en${path}`,
    fr: `${siteUrl}/fr${path}`,
    mg: `${siteUrl}/mg${path}`,
    "x-default": `${siteUrl}${path}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) => {
    const alternates = {
      languages: languageAlternates(path),
    };

    return [
      {
        url: `${siteUrl}${path}`,
        changeFrequency,
        priority,
        alternates,
      },
      {
        url: `${siteUrl}/en${path}`,
        changeFrequency,
        priority,
        alternates,
      },
      {
        url: `${siteUrl}/fr${path}`,
        changeFrequency,
        priority,
        alternates,
      },
      {
        url: `${siteUrl}/mg${path}`,
        changeFrequency,
        priority,
        alternates,
      },
    ];
  });
}