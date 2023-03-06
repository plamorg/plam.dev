/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'appear': 'appear 0.7s cubic-bezier(.05,.63,.73,.98)',
				'fade-in': 'fade-in 0.5s',
			}, 
			keyframes: {
				'appear': {
					'0%': { opacity: 0, transform: 'translateY(10px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				}, 
				'fade-in': {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			}
		},
		fontFamily: {
			'sans': ['Epilogue', 'system-ui', 'sans-serif'],
			'serif': ['Lora', 'ui-serif', 'Georgia'],		
		}
	},
	plugins: [],
}
