/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				first: '#1d1c1d',
				second: '#F3EFF5',
				third: '#538D22',
				fourth: '#73A942',
			},
		},
	},
	plugins: [],
};
