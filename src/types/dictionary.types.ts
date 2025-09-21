export interface DictionaryCategory {
	id: string
	name: string
	count: number
	icon?: string
	color?: string
}

export interface DictionaryItem {
	id: string
	categoryId: string
	term: string
	definition: string
	synonyms?: string[]
	relatedTerms?: string[]
	examples?: string[]
	notes?: string
	createdAt: Date
	updatedAt: Date
}

export interface DictionaryDetail extends DictionaryItem {
	category: DictionaryCategory
	author?: string
	version?: string
	tags?: string[]
}