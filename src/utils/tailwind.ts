/**
 * Utility functions for dynamic Tailwind CSS classes
 * Tailwind requires full class names to be present in the code for proper purging
 */

export const getColorClass = (color: string, type: 'bg' | 'text' | 'border' = 'bg', shade: number = 500): string => {
	const colorMap: Record<string, Record<string, string>> = {
		bg: {
			blue: `bg-blue-${shade}`,
			red: `bg-red-${shade}`,
			green: `bg-green-${shade}`,
			yellow: `bg-yellow-${shade}`,
			purple: `bg-purple-${shade}`,
			pink: `bg-pink-${shade}`,
			indigo: `bg-indigo-${shade}`,
			gray: `bg-gray-${shade}`,
			orange: `bg-orange-${shade}`,
			teal: `bg-teal-${shade}`,
		},
		text: {
			blue: `text-blue-${shade}`,
			red: `text-red-${shade}`,
			green: `text-green-${shade}`,
			yellow: `text-yellow-${shade}`,
			purple: `text-purple-${shade}`,
			pink: `text-pink-${shade}`,
			indigo: `text-indigo-${shade}`,
			gray: `text-gray-${shade}`,
			orange: `text-orange-${shade}`,
			teal: `text-teal-${shade}`,
			primary: 'text-primary',
			secondary: 'text-secondary',
			accent: 'text-accent',
			info: 'text-info',
			success: 'text-success',
			warning: 'text-warning',
			error: 'text-error',
		},
		border: {
			blue: `border-blue-${shade}`,
			red: `border-red-${shade}`,
			green: `border-green-${shade}`,
			yellow: `border-yellow-${shade}`,
			purple: `border-purple-${shade}`,
			pink: `border-pink-${shade}`,
			indigo: `border-indigo-${shade}`,
			gray: `border-gray-${shade}`,
			orange: `border-orange-${shade}`,
			teal: `border-teal-${shade}`,
		}
	}

	return colorMap[type]?.[color] || `${type}-gray-${shade}`
}

// Specific color classes for common use cases
export const backgroundColors = {
	blue: {
		100: 'bg-blue-100',
		200: 'bg-blue-200',
		300: 'bg-blue-300',
		400: 'bg-blue-400',
		500: 'bg-blue-500',
		600: 'bg-blue-600',
	},
	red: {
		100: 'bg-red-100',
		200: 'bg-red-200',
		300: 'bg-red-300',
		400: 'bg-red-400',
		500: 'bg-red-500',
		600: 'bg-red-600',
	},
	green: {
		100: 'bg-green-100',
		200: 'bg-green-200',
		300: 'bg-green-300',
		400: 'bg-green-400',
		500: 'bg-green-500',
		600: 'bg-green-600',
	},
	yellow: {
		100: 'bg-yellow-100',
		200: 'bg-yellow-200',
		300: 'bg-yellow-300',
		400: 'bg-yellow-400',
		500: 'bg-yellow-500',
		600: 'bg-yellow-600',
	},
	purple: {
		100: 'bg-purple-100',
		200: 'bg-purple-200',
		300: 'bg-purple-300',
		400: 'bg-purple-400',
		500: 'bg-purple-500',
		600: 'bg-purple-600',
	},
	pink: {
		100: 'bg-pink-100',
		200: 'bg-pink-200',
		300: 'bg-pink-300',
		400: 'bg-pink-400',
		500: 'bg-pink-500',
		600: 'bg-pink-600',
	},
	indigo: {
		100: 'bg-indigo-100',
		200: 'bg-indigo-200',
		300: 'bg-indigo-300',
		400: 'bg-indigo-400',
		500: 'bg-indigo-500',
		600: 'bg-indigo-600',
	},
}