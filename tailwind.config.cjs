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
			fontFamily: {
				main: 'Poppins, sans-serif'
			}
		}
	},
	plugins: [require('tailwindcss-textshadow')]
};
