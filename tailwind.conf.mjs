// tailwind.config.mjs
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Importante para el toggle manual
	theme: {
		extend: {
			fontFamily: {
				// Configuramos las fuentes según tu requerimiento de legibilidad
				sans: ['Inter', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				brand: {
					// Unified sky blue color palette for smoother theme transitions
					// All shades from same blue family (sky blue spectrum)
					700: '#0369a1',  // Deep sky blue
					600: '#0284c7',  // Sky blue (primary for light mode)
					500: '#0ea5e9',  // True sky blue (shared anchor)
					400: '#38bdf8',  // Light sky blue (primary for dark mode)
					300: '#7dd3fc',  // Lighter sky blue
				},
				// Softer neutrals for reduced jarring transitions
				dark: '#0c1425',   // Warmer, less harsh than previous #0f172a
				light: '#f8fafc',  // Soft blue-gray (kept)
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						fontSize: '1.2em', // Aumentamos el tamaño base para mejorar legibilidad
						lineHeight: '1.75', // Mejoramos el espaciado para lecturas largas
						maxWidth: 'none', // Quitamos el límite por defecto para controlarlo nosotros
						color: theme('colors.gray.700'),
						'font-family': theme('fontFamily.serif'), // Cuerpo en Serif
						'h1, h2, h3, h4': {
							'font-family': theme('fontFamily.sans'), // Títulos en Sans
							fontWeight: '700',
							color: theme('colors.gray.900'),
						},
						'code': {
							'font-family': theme('fontFamily.mono'),
							backgroundColor: theme('colors.gray.200'),
							color: theme('colors.gray.800'),
							borderRadius: theme('borderRadius.md'),
							padding: '0.2em 0.4em',
							fontWeight: '400',
						},
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						}
					},
				},
				// Ajustes para modo oscuro automático en la prosa
				invert: {
					css: {
						color: theme('colors.gray.300'),
						'h1, h2, h3, h4': {
							color: theme('colors.gray.100'),
						},
						'code': {
							// backgroundColor: theme('colors.gray.800'),
							color: theme('colors.gray.200'),
						}
					},
				},
			}),
		},
	},
	plugins: [typography()],
};
