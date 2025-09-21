// Animation timing constants
export const ANIMATION_DURATION = {
	FAST: 200,
	NORMAL: 300,
	SLOW: 400,
	VERY_SLOW: 600
} as const

export const ANIMATION_DELAY = {
	NONE: 0,
	SHORT: 50,
	NORMAL: 100,
	LONG: 200
} as const

// Animation distance for slide effects
export const SLIDE_DISTANCE = {
	SHORT: 100,
	NORMAL: 300,
	LONG: 500
} as const

// Default animation settings for section transitions
export const SECTION_TRANSITION = {
	duration: ANIMATION_DURATION.SLOW,
	delay: ANIMATION_DELAY.NORMAL,
	distance: SLIDE_DISTANCE.NORMAL
} as const