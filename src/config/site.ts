export const siteConfig = {
  // Brand identity
  name: "Ignacio PS",
  title: "Ignacio PS",
  description: "Portafolio y Blog de Ingeniería de Software en Pruebas.",

  // Author info
  author: {
    name: "Ignacio PS",
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
