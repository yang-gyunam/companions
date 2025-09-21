export type CardType = {
	title: string
	description: string
	orientation: CardOrientation
}

export enum CardOrientation {
	Landscape = 'LANDSCAPE',
	Portrait = 'PORTRAIT'
}
