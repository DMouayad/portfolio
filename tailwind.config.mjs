/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [
			{
				corporate: {
					...require("daisyui/src/theming/themes")["corporate"],
					"--rounded-box": "1rem",
					"--rounded-btn": "6px",
					"--rounded-badge": "1.9rem",
					"--text-grey": "#787878"
				}
			}
		]
	},
	theme: {
		extend: {
			fontFamily: {
				'sans': ["Ralway Variable"],
			},
		}
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
