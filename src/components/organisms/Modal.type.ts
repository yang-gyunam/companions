export type ModalType = {
	width: string
	id: string
	closeType: CloseType
}

export enum CloseType {
	Button = 'button',
	Icon = 'icon',
	Outside = 'outside'
}
