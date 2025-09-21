import type { ColorEnum } from '$components/Common.type'

export type IndicatorType = {
	align?: IndicatorAlignEnum
	color?: ColorEnum
	text?: string
}

export enum IndicatorAlignEnum {
	Start = 'start',
	Center = 'center',
	End = 'end'
	// Top = 'top',
	// Middle = 'middle',
	// Bottom = 'bottom',
}
