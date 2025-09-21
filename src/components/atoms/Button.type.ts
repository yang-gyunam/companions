import type { ColorEnum } from '$components/Common.type'

export type ButtonType = {
	color: ColorEnum
	size?: ButtonSize
	label: string
	disabled?: boolean
}

export enum ButtonSize {
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	WIDE = 'wide',
	BLOCK = 'block'
}
