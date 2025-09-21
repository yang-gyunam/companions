import type { WidthEnum } from '$components/Common.type'

export type AvartaType = {
	src: string
	width?: WidthEnum
	shape: AvartaShapeEnum
	connected?: AvartaConnectedEnum
}

export enum AvartaShapeEnum {
	Rounded = 'rounded',
	Rectangle = 'rectangle'
}

export enum AvartaConnectedEnum {
	Online = 'online',
	Offline = 'offline',
	None = ''
}
