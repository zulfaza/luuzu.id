/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '5%',
				sm: '32px',
				xl: '0px'
			}
		},
		extend: {
			colors: {
				dark: {
					DEFAULT: '#121212',
					200: '#1E1E1E'
				},
				blue: {
					DEFAULT: '#4C88B4',
					dark: '#002B5C'
				}
			},
			textShadow: {
				h2: '4px 2px 0px rgb(18 18 18 / 25%)',
				'h2-dark': '4px 2px 0px rgba(255, 255, 255, 0.25)'
			},
			fontFamily: {
				main: 'Poppins, sans-serif'
			}
		}
	},
	plugins: [require('tailwindcss-textshadow'), require('@tailwindcss/line-clamp')]
};
