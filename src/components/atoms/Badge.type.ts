import type { ColorEnum } from '$components/Common.type'

export type BadgeType = {
	color?: ColorEnum
	outline?: BadgeOutlineEnum
	size?: BadgeSizeEnum
	text?: string
}

export enum BadgeOutlineEnum {
	Outline = 'outline',
	None = ''
}

export enum BadgeSizeEnum {
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg'
}
