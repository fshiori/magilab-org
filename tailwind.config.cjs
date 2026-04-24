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
				magilab: {
					"primary": "#ffffff",
					"secondary": "#f3f4f6",
					"accent": "#37cdbe",
					"neutral": "#3d4451",
					"base-100": "#050505",
					"base-200": "#0a0a0a",
					"base-300": "#141414",
					"info": "#2094f0",
					"success": "#009485",
					"warning": "#ff9900",
					"error": "#ff5724",
				},
			},
			"dark",
		],
		darkTheme: "magilab",
		logs: false,
	}
}
