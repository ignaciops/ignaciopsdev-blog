import { config, fields, collection, singleton } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';

export default config({
  storage: { kind: 'local' },
  singletons: {
    home: singleton({
      label: 'Página de Inicio',
      path: 'src/content/home/',
      format: { data: 'yaml' },
      schema: {
        heroTitle: fields.text({ label: 'Título del Hero' }),
        heroDescription: fields.text({ label: 'Descripción del Hero', multiline: true }),
        heroBackgroundImage: fields.image({
          label: 'Imagen de Fondo del Hero',
          directory: 'src/assets/images/home',
          publicPath: '../../assets/images/home/'
        }),
        heroButtons: fields.array(
          fields.object({
            text: fields.text({ label: 'Texto del Botón' }),
            link: fields.text({ label: 'Enlace del Botón' }),
            variant: fields.select({
              label: 'Estilo del Botón',
              options: [
                { label: 'Primario', value: 'primary' },
                { label: 'Secundario', value: 'secondary' }
              ],
              defaultValue: 'primary'
            })
          }),
          {
            label: 'Botones del Hero',
            itemLabel: props => props.fields.text.value
          }
        )
      }
    }),
    about: singleton({
      label: 'Página Sobre Mí',
      path: 'src/content/about/',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Título' }),
        content: fields.mdx({
          label: 'Contenido Principal',
          components: {
            YouTube: block({
              label: 'YouTube Video',
              schema: {
                id: fields.text({ label: 'YouTube Video ID' }),
                title: fields.text({ label: 'Titulo (Accesibilidad)' }),
              },
            }),
          }
        })
      }
    })
  },
  collections: {
    // 1. BLOG POSTS
    posts: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        date: fields.date({ label: 'Fecha', validation: { isRequired: true } }),

        // Featured image for post header & social sharing
        coverImage: fields.image({
          label: 'Imagen Destacada',
          description: 'Imagen principal del artículo (recomendado: 1200x630px)',
          directory: 'public/images/posts/covers',
          publicPath: '/images/posts/covers/',
        }),

        // Image attribution (for Unsplash, etc.)
        coverImageAttribution: fields.text({
          label: 'Atribución de Imagen (Opcional)',
          description: 'HTML para dar crédito al autor (ej: de Unsplash). Solo se muestra si hay coverImage.',
          multiline: true
        }),

        summary: fields.text({
          label: 'Resumen corto',
          description: 'Breve descripción del artículo (150-160 caracteres para SEO)',
          multiline: true,
          validation: { length: { max: 160 } }
        }),

        // Dedicated meta description for SEO (optional override)
        metaDescription: fields.text({
          label: 'Meta Description (Opcional)',
          description: 'Si está vacío, se usa el resumen. Máximo 160 caracteres.',
          multiline: true,
          validation: { length: { max: 160 } }
        }),

        tags: fields.array(
          fields.text({
            label: 'Tag',
            validation: {
              length: { min: 1 }
            }
          }),
          {
            label: 'Tags',
            description: 'Añade tags para clasificar el post (usa solo minúsculas). Sugerencias: tech, talk, retro',
            itemLabel: props => props.value
          }
        ),

        // Custom OG image (optional, falls back to coverImage)
        ogImage: fields.image({
          label: 'Imagen Open Graph (Opcional)',
          description: 'Imagen personalizada para redes sociales (1200x630px). Si vacío, usa Cover Image.',
          directory: 'public/images/posts/og',
          publicPath: '/images/posts/og/',
        }),

        // Mark posts as featured
        featured: fields.checkbox({
          label: 'Destacar en Home',
          description: 'Mostrar este post en la sección destacada de la página principal',
          defaultValue: false
        }),

        content: fields.mdx({
          label: 'Contenido',
          components: {
            YouTube: block({
              label: 'YouTube Video',
              schema: {
                id: fields.text({ label: 'YouTube Video ID' }),
                title: fields.text({ label: 'Titulo (Accesibilidad)' }),
              },
            }),
            KeystaticImage: block({
                label: 'Image',
                schema: {
                    src: fields.image({
                        label: 'Image',
                        directory: 'public/images/posts',
                        publicPath: '/images/posts/'
                    }),
                    alt: fields.text({ label: 'Alt text' }),
                    caption: fields.text({ label: 'Caption' })
                }
            }),
            Callout: block({
                label: 'Callout/Advertencia',
                schema: {
                    type: fields.select({
                        label: 'Tipo',
                        options: [
                            { label: '📝 Nota', value: 'note' },
                            { label: '💡 Consejo', value: 'tip' },
                            { label: '⚠️ Advertencia', value: 'warning' },
                            { label: '❗ Peligro', value: 'danger' },
                            { label: 'ℹ️ Información', value: 'info' }
                        ],
                        defaultValue: 'note'
                    }),
                    title: fields.text({
                        label: 'Título (Opcional)',
                        description: 'Si se deja vacío, no se mostrará título'
                    }),
                    content: fields.text({
                        label: 'Contenido',
                        multiline: true
                    })
                }
            })
          }
        }),
      },
    }),

    // 2. PORTAFOLIO
    portfolio: collection({
      label: 'Portafolio',
      slugField: 'name',
      path: 'src/content/portfolio/*',
      format: { contentField: 'content' },
      schema: {
        name: fields.slug({ name: { label: 'Nombre Proyecto' } }),

        // Separate repo and demo URLs
        repoUrl: fields.url({
          label: 'Link al Repositorio',
          description: 'URL del código fuente en GitHub, GitLab, etc.'
        }),

        // Demo URL
        demoUrl: fields.url({
          label: 'Link a la Demo/Documentación (Opcional)',
          description: 'URL de la versión en vivo o documentación del proyecto'
        }),

        description: fields.text({ label: 'Descripción Breve' }),

        // Project date
        projectDate: fields.date({
          label: 'Fecha del Proyecto',
          description: 'Fecha de finalización o última actualización significativa',
          validation: { isRequired: true }
        }),

        // Cover image for portfolio
        coverImage: fields.image({
          label: 'Imagen del Proyecto',
          description: 'Screenshot o imagen representativa (recomendado: 1200x675px)',
          directory: 'public/images/portfolio/covers',
          publicPath: '/images/portfolio/covers/',
        }),

        stack: fields.array(
          fields.text({ label: 'Tecnología' }),
          {
            label: 'Tech Stack (ej: Python, Selenium)',
            itemLabel: props => props.value
          }
        ),

        // Project status
        status: fields.select({
          label: 'Estado del Proyecto',
          options: [
            { label: 'Activo / Mantenido', value: 'active' },
            { label: 'Completado', value: 'completed' },
            { label: 'Archivado', value: 'archived' },
            { label: 'En Desarrollo', value: 'wip' }
          ],
          defaultValue: 'completed'
        }),

        content: fields.mdx({
          label: 'Detalle (Documentación)',
          components: {
             YouTube: block({
              label: 'YouTube Video',
              schema: {
                id: fields.text({ label: 'YouTube Video ID' }),
                title: fields.text({ label: 'Titulo (Accesibilidad)' }),
              },
            }),
            KeystaticImage: block({
                label: 'Image',
                schema: {
                    src: fields.image({
                        label: 'Image',
                        directory: 'public/images/portfolio',
                        publicPath: '/images/portfolio/'
                    }),
                    alt: fields.text({ label: 'Alt text' }),
                    caption: fields.text({ label: 'Caption' })
                }
            }),
            Callout: block({
                label: 'Callout/Advertencia',
                schema: {
                    type: fields.select({
                        label: 'Tipo',
                        options: [
                            { label: '📝 Nota', value: 'note' },
                            { label: '💡 Consejo', value: 'tip' },
                            { label: '⚠️ Advertencia', value: 'warning' },
                            { label: '❗ Peligro', value: 'danger' },
                            { label: 'ℹ️ Información', value: 'info' }
                        ],
                        defaultValue: 'note'
                    }),
                    title: fields.text({
                        label: 'Título (Opcional)',
                        description: 'Si se deja vacío, no se mostrará título'
                    }),
                    content: fields.text({
                        label: 'Contenido',
                        multiline: true
                    })
                }
            })
          }
        }),
      },
    }),
  },
});
