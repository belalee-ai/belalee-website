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
					/* 主题色与 src/styles/global.css 的 --brand-text 同源（Lemon Zest #4d7c0f）
					   daisyUI 主题不支持 CSS 变量引用，改色时两处要一起改 */
					"primary": "#4d7c0f",
					"primary-content": "#ffffff",
					"secondary": "#f2f2f2",
					"secondary-content": "#222222",
					"accent": "#8fd14f",
					"accent-content": "#2b3d0f",
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
