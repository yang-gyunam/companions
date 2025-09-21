export interface SectionNavigationEvent extends CustomEvent {
	detail: {
		targetIndex?: number
		direction?: 'next' | 'prev'
	}
}

export interface SectionNavigationConfig {
	sections: string[]
	initialIndex?: number
	validationFn?: (targetIndex: number, currentIndex: number) => boolean
	onValidationFailed?: (targetIndex: number, currentIndex: number) => void
}

export function createSectionNavigation(config: SectionNavigationConfig) {
	const sections = config.sections
	const validationFn = config.validationFn
	const onValidationFailed = config.onValidationFailed

	// Create reactive state with Svelte 5 runes
	let currentSectionIndex = $state(config.initialIndex || 0)
	let slideDirection = $state(1)

	// Derived state
	const currentSection = $derived(sections[currentSectionIndex])

	const goToNextSection = () => {
		const targetIndex = currentSectionIndex + 1
		if (targetIndex < sections.length) {
			if (validationFn && !validationFn(targetIndex, currentSectionIndex)) {
				if (onValidationFailed) {
					onValidationFailed(targetIndex, currentSectionIndex)
				}
				return
			}
			slideDirection = 1
			currentSectionIndex = targetIndex
			updateSectionInfo(targetIndex)
		}
	}

	const goToPrevSection = () => {
		const targetIndex = currentSectionIndex - 1
		if (targetIndex >= 0) {
			if (validationFn && !validationFn(targetIndex, currentSectionIndex)) {
				if (onValidationFailed) {
					onValidationFailed(targetIndex, currentSectionIndex)
				}
				return
			}
			slideDirection = -1
			currentSectionIndex = targetIndex
			updateSectionInfo(targetIndex)
		}
	}

	const goToSection = (targetIndex: number) => {
		if (targetIndex >= 0 && targetIndex < sections.length && targetIndex !== currentSectionIndex) {
			if (validationFn && !validationFn(targetIndex, currentSectionIndex)) {
				if (onValidationFailed) {
					onValidationFailed(targetIndex, currentSectionIndex)
				}
				return
			}
			slideDirection = targetIndex > currentSectionIndex ? 1 : -1
			currentSectionIndex = targetIndex
			updateSectionInfo(targetIndex)
		}
	}

	const updateSectionInfo = (index: number) => {
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new CustomEvent('updateSectionInfo', {
				detail: {
					currentSection: sections[index],
					sections: sections,
					sectionIndex: index
				}
			}))
		}
	}

	const handleGlobalNavigation = (event: Event) => {
		const customEvent = event as SectionNavigationEvent
		
		if (customEvent.detail.targetIndex !== undefined) {
			goToSection(customEvent.detail.targetIndex)
		} else if (customEvent.detail.direction === 'next') {
			goToNextSection()
		} else if (customEvent.detail.direction === 'prev') {
			goToPrevSection()
		}
	}

	const setupNavigation = () => {
		// Using $effect instead of onMount for Svelte 5
		$effect(() => {
			window.addEventListener('sectionNavigation', handleGlobalNavigation)

			return () => {
				window.removeEventListener('sectionNavigation', handleGlobalNavigation)
			}
		})
		
		// Initial update (run once)
		updateSectionInfo(currentSectionIndex)
	}

	return {
		// Reactive state - expose as getters for reactivity
		get currentSectionIndex() { return currentSectionIndex },
		get slideDirection() { return slideDirection },
		get currentSection() { return currentSection },
		sections,

		// Actions
		goToNextSection,
		goToPrevSection,
		goToSection,
		setupNavigation
	}
}