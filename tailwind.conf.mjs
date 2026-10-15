// tailwind.config.mjs
//
// CAPA DE TOKENS DEL RENDERER VISUAL
// ---------------------------------------------------------------------------
// Los colores se definen como variables CSS (--ink, --surface, --signal...)
// declaradas en src/styles/global.css. De esta forma la identidad visual
// pertenece al renderer: cambiar el rediseño futuro = cambiar estas variables
// y las reglas de global.css, sin tocar componentes ni contenido.
// El modo oscuro invierte los valores de las variables bajo `.dark`.
// ---------------------------------------------------------------------------
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Toggle manual (Header + localStorage)
	theme: {
		extend: {
			fontFamily: {
				// UI / títulos: neo-grotesk contemporánea con carácter técnico
				sans: ['"Space Grotesk Variable"', '"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				// Lectura larga: altamente legible (aplicada vía tipografía prose y body)
				reading: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				// Código, etiquetas técnicas, metadatos, elementos de identidad
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			colors: {
				// Estructurales
				ink: {
					DEFAULT: 'var(--ink)',
					2: 'var(--ink-2)',
					3: 'var(--ink-3)',
				},
				surface: {
					DEFAULT: 'var(--surface)',
					2: 'var(--surface-2)',
					3: 'var(--surface-3)',
				},
				line: {
					DEFAULT: 'var(--line)',
					soft: 'var(--line-soft)',
				},
				// Acento / señalización
				signal: {
					DEFAULT: 'var(--signal)', // formas, barras, bloques de hover
					text: 'var(--signal-text)', // texto pequeño sobre superficies (AA)
					contrast: 'var(--on-signal)', // texto sobre bloques rojos
				},
			},
			typography: () => ({
				DEFAULT: {
					css: {
						// Medida y ritmo de lectura: cómodo para artículos largos
						fontSize: '1.0625rem', // 17px base, 18px en desktop (global.css)
						lineHeight: '1.75',
						maxWidth: '70ch',
						color: 'var(--ink)',
						fontFamily: 'var(--font-reading)',

						'a': {
							color: 'var(--signal-text)',
							textDecoration: 'underline',
							textDecorationColor: 'var(--signal)',
							textUnderlineOffset: '3px',
							textDecorationThickness: '2px',
							fontWeight: '500',
							overflowWrap: 'break-word',
						},

						'h1, h2, h3, h4, h5': {
							fontFamily: 'var(--font-sans)',
							fontWeight: '700',
							color: 'var(--ink)',
							letterSpacing: '-0.02em',
							lineHeight: '1.15',
							overflowWrap: 'break-word',
						},

						'h2': {
							borderTop: '2px solid var(--line)',
							paddingTop: '0.75rem',
							marginTop: '2.75rem',
							marginBottom: '1rem',
						},

						'h3': {
							marginTop: '2rem',
							marginBottom: '0.75rem',
						},

						'strong': {
							color: 'var(--ink)',
							fontWeight: '700',
						},

						'blockquote': {
							borderLeft: '3px solid var(--signal)',
							paddingLeft: '1.25rem',
							marginLeft: '0',
							marginRight: '0',
							color: 'var(--ink)',
							fontStyle: 'normal',
							backgroundColor: 'var(--surface-2)',
							padding: '1rem 1.25rem',
						},

						'blockquote p': {
							marginTop: '0.5em',
						},

						'blockquote p:first-child': {
							marginTop: 0,
						},

						'blockquote p:last-child': {
							marginBottom: 0,
						},

						'ul': {
							listStyleType: 'square',
						},

						'ul li::marker': {
							color: 'var(--signal)',
						},

						'ol li::marker': {
							color: 'var(--signal)',
							fontWeight: '700',
						},

						'code': {
							fontFamily: 'var(--font-mono)',
							fontWeight: '500',
							fontSize: '0.875em',
							backgroundColor: 'var(--surface-3)',
							border: '1px solid var(--line-soft)',
							borderRadius: '0',
							padding: '0.15em 0.4em',
						},

						'code::before': { content: '""' },
						'code::after': { content: '""' },

						'pre': {
							fontFamily: 'var(--font-mono)',
							fontSize: '0.875rem',
							lineHeight: '1.7',
							borderRadius: '0',
							// El fondo real lo aporta Shiki (inline); el borde es del renderer
							border: '2px solid var(--line)',
						},

						'pre code': {
							fontFamily: 'var(--font-mono)',
							fontSize: 'inherit',
							fontWeight: '400',
							backgroundColor: 'transparent',
							border: 'none',
							padding: '0',
						},

						'table': {
							fontSize: '0.9375rem',
							borderCollapse: 'collapse',
							width: '100%',
							display: 'block',
							overflowX: 'auto',
						},

						'th': {
							fontFamily: 'var(--font-mono)',
							fontSize: '0.7rem',
							fontWeight: '700',
							textTransform: 'uppercase',
							letterSpacing: '0.08em',
							backgroundColor: 'var(--ink)',
							color: 'var(--surface)',
							textAlign: 'left',
							padding: '0.6em 0.85em',
							border: '1px solid var(--ink)',
						},

						'td': {
							padding: '0.6em 0.85em',
							border: '1px solid var(--line-soft)',
							verticalAlign: 'top',
						},

						'tbody tr:nth-child(odd)': {
							backgroundColor: 'var(--surface-2)',
						},

						'hr': {
							borderTop: '2px solid var(--line)',
							marginLeft: '0',
							marginRight: '0',
						},

						'figure': {
							marginLeft: '0',
							marginRight: '0',
						},

						'figcaption': {
							fontFamily: 'var(--font-mono)',
							fontSize: '0.75rem',
							lineHeight: '1.6',
							color: 'var(--ink-2)',
							marginTop: '0.75rem',
						},

						'img': {
							borderRadius: '0',
						},
					},
				},
			}),
		},
	},
	plugins: [typography()],
};
