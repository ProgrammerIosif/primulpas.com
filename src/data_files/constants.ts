export const SITE = {
  title: "PrimulPas Online",
  tagline: "Create your online presence with PrimulPas",
  description: "We build fast, reliable and cost-effective online presences that attract, impress, and convert to sales.",
  description_short: "We build fast, reliable and cost-effective online presences that attract, impress, and convert to sales.",
  url: "https://primulpas.com",
  author: "Iosif",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}`,
  description: "We build fast, reliable and cost-effective online presences that attract, impress, and convert to sales.",
};