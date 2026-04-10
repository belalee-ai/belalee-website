/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
				airbnb: {
					"primary": "#ff385c",
					"primary-content": "#ffffff",
					"secondary": "#f2f2f2",
					"secondary-content": "#222222",
					"accent": "#ff385c",
					"accent-content": "#ffffff",
					"neutral": "#222222",
					"neutral-content": "#ffffff",
					"base-100": "#ffffff",
					"base-200": "#f2f2f2",
					"base-300": "#e5e5e5",
					"base-content": "#222222",
					"info": "#428bff",
					"info-content": "#ffffff",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#c13515",
					"error-content": "#ffffff",
				},
			},
		],
		logs: false,
	}
}
