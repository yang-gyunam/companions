export type DropdownType = {
	items: DropdownItemType[]
	label: string
	size: string
	position?: 'end' | 'top' | 'bottom' | 'left' | 'right'
	disabled?: boolean
}

export type DropdownItemType = {
	id: string
	value: string
}

export enum DropdownPosition {
	End = 'end',
	Top = 'top',
	Bottom = 'bottom',
	Left = 'left',
	Right = 'right'
}
