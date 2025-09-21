import type { Project, RequirementItem } from '$types/requirement.types'
import type { DictionaryCategory, DictionaryItem } from '$types/dictionary.types'

// App-wide state
export interface AppState {
	// Navigation
	menu: string
	currentSection: string
	sections: string[]
	sectionIndex: number
	
	// User preferences
	theme: 'light' | 'dark' | 'auto'
	language: string
	
	// Loading states
	isLoading: boolean
	loadingMessage?: string
	
	// Error states
	error?: string
	
	// Toast notifications
	notifications: Notification[]
}

export interface Notification {
	id: string
	type: 'success' | 'error' | 'warning' | 'info'
	title: string
	message?: string
	duration?: number
	timestamp: Date
}

// Create app state store
function createAppStore() {
	let state = $state<AppState>({
		menu: '',
		currentSection: '',
		sections: [],
		sectionIndex: 0,
		theme: 'light',
		language: 'en',
		isLoading: false,
		notifications: []
	})

	return {
		get current() {
			return state
		},
		
		// Legacy compatibility
		subscribe: (callback: (value: AppState) => void) => {
			$effect(() => {
				callback(state)
			})
		},
		
		set: (newState: AppState) => {
			state = newState
		},
		
		update: (updater: (state: AppState) => AppState) => {
			state = updater(state)
		},
		
		// Actions
		setCurrentMenu: (menu: string) => {
			state = { ...state, menu }
		},
		
		setTheme: (theme: 'light' | 'dark' | 'auto') => {
			state = { ...state, theme }
		},
		
		setLoading: (isLoading: boolean, message?: string) => {
			state = { ...state, isLoading, loadingMessage: message }
		},
		
		setError: (error?: string) => {
			state = { ...state, error }
		},
		
		addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => {
			const newNotification: Notification = {
				...notification,
				id: crypto.randomUUID(),
				timestamp: new Date()
			}
			state = { 
				...state, 
				notifications: [...state.notifications, newNotification] 
			}
			
			// Auto-remove notification after duration
			if (notification.duration !== 0) {
				setTimeout(() => {
					state = {
						...state,
						notifications: state.notifications.filter(n => n.id !== newNotification.id)
					}
				}, notification.duration || 5000)
			}
		},
		
		removeNotification: (id: string) => {
			state = {
				...state,
				notifications: state.notifications.filter(n => n.id !== id)
			}
		},
		
		clearNotifications: () => {
			state = { ...state, notifications: [] }
		}
	}
}

export const appStore = createAppStore()

// Project-specific state
function createProjectStore() {
	let state = $state<{
		selectedProject: Project | null
		projects: Project[]
		requirementItems: RequirementItem[]
	}>({
		selectedProject: null,
		projects: [],
		requirementItems: []
	})

	return {
		get current() {
			return state
		},
		
		// Legacy compatibility
		subscribe: (callback: (value: typeof state) => void) => {
			$effect(() => {
				callback(state)
			})
		},
		
		set: (newState: typeof state) => {
			state = newState
		},
		
		update: (updater: (state: typeof state) => typeof state) => {
			state = updater(state)
		},
		
		// Actions
		setSelectedProject: (project: Project | null) => {
			state = { ...state, selectedProject: project }
		},
		
		setProjects: (projects: Project[]) => {
			state = { ...state, projects }
		},
		
		setRequirementItems: (items: RequirementItem[]) => {
			state = { ...state, requirementItems: items }
		},
		
		// Clear all project data
		clearProject: () => {
			state = {
				...state,
				selectedProject: null,
				projects: [],
				requirementItems: []
			}
		}
	}
}

export const projectStore = createProjectStore()

// Dictionary-specific state
function createDictionaryStore() {
	let state = $state<{
		selectedCategory: DictionaryCategory | null
		selectedItem: DictionaryItem | null
		categories: DictionaryCategory[]
		items: DictionaryItem[]
		searchQuery: string
	}>({
		selectedCategory: null,
		selectedItem: null,
		categories: [],
		items: [],
		searchQuery: ''
	})

	return {
		get current() {
			return state
		},
		
		// Legacy compatibility
		subscribe: (callback: (value: typeof state) => void) => {
			$effect(() => {
				callback(state)
			})
		},
		
		set: (newState: typeof state) => {
			state = newState
		},
		
		update: (updater: (state: typeof state) => typeof state) => {
			state = updater(state)
		},
		
		// Actions
		setSelectedCategory: (category: DictionaryCategory | null) => {
			state = { ...state, selectedCategory: category }
		},
		
		setSelectedItem: (item: DictionaryItem | null) => {
			state = { ...state, selectedItem: item }
		},
		
		setCategories: (categories: DictionaryCategory[]) => {
			state = { ...state, categories }
		},
		
		setItems: (items: DictionaryItem[]) => {
			state = { ...state, items }
		},
		
		setSearchQuery: (query: string) => {
			state = { ...state, searchQuery: query }
		},
		
		// Clear all dictionary data
		clearDictionary: () => {
			state = {
				...state,
				selectedCategory: null,
				selectedItem: null,
				categories: [],
				items: [],
				searchQuery: ''
			}
		}
	}
}

export const dictionaryStore = createDictionaryStore()

// Derived stores for computed values
const isProjectSelected = $derived(projectStore.current.selectedProject !== null)
const hasDictionarySelection = $derived(dictionaryStore.current.selectedCategory !== null)
const notificationCount = $derived(appStore.current.notifications.length)

export function getIsProjectSelected() {
	return isProjectSelected
}

export function getHasDictionarySelection() {
	return hasDictionarySelection
}

export function getNotificationCount() {
	return notificationCount
}