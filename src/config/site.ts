export const siteConfig = {
  // Brand identity
  name: "Ignacio PS",
  title: "Ignacio PS",
  description: "Portafolio y Blog de Ingeniería de Software en Pruebas.",

  // Author info
  author: {
    name: "Ignacio PS",
  },

  // Social media
  social: {
    github: "https://github.com/ignaciops",
    linkedin: "https://linkedin.com/in/ignaciops",
    twitter: "https://x.com/ignaciopsdev",
  },

  // SEO defaults
  defaultOgImage: "/images/og-default.png",
  locale: "es-MX",

  // Content settings
  postsPerPage: 10,
  recentPostsCount: 3,

  // Reading experience
  readingSpeed: 200, // words per minute
} as const;

export type SiteConfig = typeof siteConfig;
