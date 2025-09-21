import type { WidthEnum } from '$components/Common.type'

export type TextInputType = {
	label?: string
	value: string
	size?: TextInputSize
	width?: WidthEnum
	placeholder?: string
	readonly?: boolean
	disabled?: boolean
}

export enum TextInputSize {
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg'
}
