export interface Project {
	id: string
	name: string
	category: string
	status: 'In Progress' | 'Planning' | 'Review' | 'Completed'
	description: string
	requirements: number
	epics: number
	stories: number
	imageUrl?: string
}

export interface RequirementItem {
	type: 'Requirement' | 'Epic' | 'Story'
	id: string
	title: string
	contents: string
	createdBy: string
	avarta: string
}

export interface SectionNavigationEvent extends CustomEvent {
	detail: {
		targetIndex?: number
		direction?: 'next' | 'prev'
	}
}

export interface SectionInfoEvent extends CustomEvent {
	detail: {
		currentSection: string
		sections: string[]
		sectionIndex: number
	}
}