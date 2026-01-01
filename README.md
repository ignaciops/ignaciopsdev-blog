# Ignacio PS - Blog & Portfolio

Blog personal y portafolio de proyectos construido con Astro 5, React 19 y Tailwind CSS 4.

## Características

- **Blog con MDX**: Sistema de blog completo con soporte para contenido enriquecido
- **Portafolio de Proyectos**: Showcase de proyectos con documentación detallada
- **CMS Local**: Gestión de contenido con Keystatic (solo desarrollo local)
- **Sistema de Tags**: Organización y filtrado de contenido por categorías
- **Optimizado para Lectura**: Tipografía optimizada con fuentes Inter, Merriweather y JetBrains Mono
- **Modo Oscuro**: Soporte completo para tema claro/oscuro
- **Sitio Estático**: Generación de sitios estáticos para máximo rendimiento

## Stack Tecnológico

- **Framework**: [Astro 5](https://astro.build) - Generador de sitios estáticos
- **UI**: [React 19](https://react.dev) - Componentes interactivos
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com) - Diseño responsivo y utility-first
- **CMS**: [Keystatic](https://keystatic.com) - Gestión de contenido local (solo desarrollo)
- **Contenido**: [MDX](https://mdxjs.com) - Markdown con componentes React
- **Deployment**: Archivos estáticos servidos por Caddy

## Estructura del Proyecto

```text
/
├── public/
│   ├── images/          # Imágenes estáticas del sitio
│   └── favicon.svg
├── src/
│   ├── assets/          # Assets procesados por Astro
│   ├── components/      # Componentes React y Astro
│   ├── content/         # Contenido MDX (posts, portfolio, páginas)
│   ├── layouts/         # Layouts de página
│   ├── pages/           # Rutas del sitio
│   ├── styles/          # Estilos globales
│   └── utils/           # Utilidades y helpers
├── keystatic.config.ts  # Configuración del CMS (solo local)
└── package.json
```

## Gestión de Contenido

Este proyecto usa **Keystatic CMS** únicamente para desarrollo local:

### Workflow Local

1. Ejecuta `npm run dev`
2. Visita `http://localhost:4321/keystatic`
3. Edita contenido directamente desde el CMS
4. Los cambios se guardan automáticamente en archivos locales (`src/content/`)
5. Haz commit de los cambios:

```bash
git add .
git commit -m "Update content"
git push origin main
```

6. El sitio se desplegará automáticamente con los nuevos cambios (si tienes CI/CD configurado)

**Nota importante:** Keystatic solo funciona en desarrollo local. En producción, el sitio se genera como archivos estáticos y no incluye el CMS.


## Personalización

### Fuentes
Las fuentes se configuran en [tailwind.conf.mjs](tailwind.conf.mjs):
- **Sans**: Inter (títulos y UI)
- **Serif**: Merriweather (cuerpo de texto)
- **Mono**: JetBrains Mono (código)

### Colores
Los colores del tema se definen en [tailwind.conf.mjs](tailwind.conf.mjs) bajo `theme.extend.colors`

### Contenido
El contenido se gestiona a través de:
- **Blog**: `src/content/posts/`
- **Portafolio**: `src/content/portfolio/`
- **Páginas**: `src/content/home/`, `src/content/about/`


## Contacto

Ignacio PS - contacto@ignaciops.dev
