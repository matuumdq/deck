/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				teko: ["Teko", "sans-serif"],
			},
			colors: {
				"harvest-gold": {
					50: "#fcf7f0",
					100: "#f9ecdb",
					200: "#f2d5b6",
					300: "#e6af79",
					400: "#df9358",
					500: "#d87637",
					600: "#c9602d",
					700: "#a74a27",
					800: "#863d26",
					900: "#6c3422",
					950: "#3a1810",
				},
				teak: {
					50: "#fcfaf0",
					100: "#f7f2dd",
					200: "#eee2ba",
					300: "#e2cc8f",
					400: "#d5af5d",
					500: "#cd9b42",
					600: "#bf8637",
					700: "#9f6a2f",
					800: "#80552c",
					900: "#674627",
					950: "#372313",
				},
			},
		},
	},
	plugins: [],
};
