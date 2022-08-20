const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: false,
	theme: {
		colors: {
			bg: '#16161a',
			bgSecondary: '#242629',
			headline: '#fffffe',
			paragraph: '#94a1b2',
			primary: '#7f5af0',
			secondary: '#2cb67d'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
