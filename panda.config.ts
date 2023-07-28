import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
	'html, body': {
		backgroundColor: 'bg'
	}
});

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Global styles
	globalCss,

	// Where to look for your css declarations
	include: ['./src/**/*.{ts,tsx,js,jsx,astro}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		tokens: {
			colors: {
				bg: { value: '#16161a' },
				bgTint: { value: '#242629' },
				bgCode: { value: '#0d111700' },
				text: { value: '#94a1b2' },
				textLight: { value: '#fffffe' },
				purple: { value: '#7f5af0' },
				purpleTint: { value: '#baa4ff' },
				green: { value: '#2cb67d' }
			},
			sizes: {
				contentWidth: { value: '1060px' },
				breakpointTablet: { value: '768px' },
				breakpointMobile: { value: '480px' }
			},
			fonts: {
				fira: { value: 'Fira Code, monospace' },
				roboto: { value: 'Roboto, sans-serif' },
				robotoSlab: { value: 'Roboto Slab, serif' }
			}
		}
	},

	// The output directory for your css system
	outdir: 'styled-system'
});
