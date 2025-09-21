import type { ColorEnum, WidthEnum } from '$components/Common.type'

export type ProgressType = {
	color?: ColorEnum
	value?: number
	max?: number
	width: WidthEnum
}
