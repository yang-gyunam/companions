/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class', // Enable class-based dark mode
	theme: {
		extend: {
			fontFamily: {
				'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI Variable', 'Segoe UI', 'system-ui', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
				'azure': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI Variable', 'Segoe UI', 'system-ui', 'sans-serif']
			},
			fontSize: {
				'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '600' }],
				'title-1': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.025em', fontWeight: '600' }],
				'title-2': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '600' }],
				'title-3': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
				'subtitle': ['1.125rem', { lineHeight: '1.4', fontWeight: '500' }],
				'body-1': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
				'body-2': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
				'caption': ['0.875rem', { lineHeight: '1.4', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }],
				'label': ['0.75rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.025em' }]
			},
			colors: {
				azure: {
					50: '#f0f8ff',
					100: '#e1f1fe',
					200: '#bce3fc',
					300: '#80ccf9',
					400: '#3db2f4',
					500: '#1495e3',
					600: '#0575c2',
					700: '#065d9d',
					800: '#0a4f82',
					900: '#0e416c',
					950: '#092a48'
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		require('tailwind-scrollbar-hide')
	],
	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					primary: "#3b82f6",
					"primary-content": "#ffffff",
					secondary: "#64748b",
					accent: "#06b6d4",
					neutral: "#374151",
					"base-100": "#ffffff",
					"base-200": "#f8fafc",
					"base-300": "#e2e8f0",
					"base-content": "#1f2937",
				},
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					primary: "#3b82f6",
					"primary-content": "#ffffff",
					secondary: "#64748b",
					accent: "#06b6d4",
					neutral: "#374151",
					"base-100": "#1f2937",
					"base-200": "#111827",
					"base-300": "#374151",
					"base-content": "#f9fafb",
				},
			},
		],
		darkTheme: 'dark', // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true // Shows info about daisyUI version and used config in the console when building your CSS
	}
}
