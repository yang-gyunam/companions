import type { Project, RequirementItem } from '$types/requirement.types'

export const mockProjects: Project[] = [
	{
		id: 'proj-001',
		name: 'E-commerce Platform',
		category: 'Web Development',
		status: 'In Progress',
		description: 'Full-stack e-commerce solution with modern React frontend',
		requirements: 45,
		epics: 12,
		stories: 134
	},
	{
		id: 'proj-002',
		name: 'Mobile Banking App',
		category: 'Mobile App',
		status: 'Planning',
		description: 'Secure mobile banking application with biometric authentication',
		requirements: 28,
		epics: 8,
		stories: 89
	},
	{
		id: 'proj-003',
		name: 'Brand Identity Redesign',
		category: 'Design',
		status: 'Review',
		description: 'Complete brand identity overhaul including logo and guidelines',
		requirements: 15,
		epics: 5,
		stories: 42
	}
]

export const mockRequirementItems: RequirementItem[] = [
	{
		type: 'Requirement',
		id: '#10001',
		title: 'Lorem Ipsum is simply dummy text',
		contents: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		createdBy: 'Mark Young',
		avarta: null
	},
	{
		type: 'Epic',
		id: '#10002',
		title: 'Standard dummy text ever since the 1500s',
		contents: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		createdBy: 'Peter Parker',
		avarta: null
	},
	{
		type: 'Story',
		id: '#10003',
		title: 'Five centuries, but also the leap into electronic ',
		contents: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
		createdBy: 'Dennis Martin',
		avarta: null
	},
	{
		type: 'Requirement',
		id: '#10004',
		title: 'It was popularised in the 1960s with the release of Letraset',
		contents: 'It was popularised in the 1960s.',
		createdBy: 'Gyunam Yang',
		avarta: null
	},
	{
		type: 'Requirement',
		id: '#10005',
		title: 'In the 1960s with the release of Letraset',
		contents: 'The Ipsum passages, desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
		createdBy: 'Peter Yang',
		avarta: null
	},
	{
		type: 'Requirement',
		id: '#10006',
		title: 'It software like Aldus PageMaker',
		contents: 'It was publishing software like Aldus PageMaker including versions of Lorem Ipsum',
		createdBy: 'Mark spensor',
		avarta: null
	}
]