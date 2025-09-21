<script lang="ts">

	import { getCurrentPath } from '$stores/router.store.svelte'
	import '$src/app.css'

	import Top from '$templates/Top.svelte'
	import Left from '$templates/Left.svelte'
	import Title from '$templates/Title.svelte'
	import Footer from '$templates/Footer.svelte'
	import NotificationContainer from '$organisms/NotificationContainer.svelte'
	import { MenuEnum } from '$src/models/constants'
	import { appStore } from '$stores/app.store.svelte'

	let selectedMenu = $state('')
	
	// Set default section info based on current page
	function setDefaultSections(menu: string) {
		if (menu === MenuEnum.Home) {
			currentSection = 'Dashboard Overview'
			sections = ['Dashboard Overview', 'Team Highlights', 'Active Projects', 'Recent Activity']
			sectionIndex = 0
		} else if (menu === MenuEnum.Team) {
			currentSection = 'Team Statistics'
			sections = ['Team Statistics', 'Team Members']
			sectionIndex = 0
		} else if (menu === MenuEnum.Project) {
			currentSection = 'Project Overview'
			sections = ['Project Overview', 'Project Details', 'Project Statistics']
			sectionIndex = 0
		} else if (menu === MenuEnum.Requirement) {
			currentSection = 'Project Selection'
			sections = ['Project Selection', 'Work Items']
			sectionIndex = 0
		} else if (menu === MenuEnum.Dictionary) {
			currentSection = 'Categories'
			sections = ['Categories', 'Dictionary List', 'Detail View']
			sectionIndex = 0
		} else {
			currentSection = ''
			sections = []
			sectionIndex = 0
		}
	}
	
	$effect(() => {
		const path = getCurrentPath()
		const p = path.replace('/', '')

		if (p.toUpperCase() === MenuEnum.Home.toUpperCase() || p === '') {
			selectedMenu = MenuEnum.Home
		} else if (p.toUpperCase() === MenuEnum.Team.toUpperCase()) {
			selectedMenu = MenuEnum.Team
		} else if (p.toUpperCase() === MenuEnum.Project.toUpperCase()) {
			selectedMenu = MenuEnum.Project
		} else if (p.toUpperCase() === MenuEnum.Requirement.toUpperCase()) {
			selectedMenu = MenuEnum.Requirement
		} else if (p.toUpperCase() === MenuEnum.Dictionary.toUpperCase()) {
			selectedMenu = MenuEnum.Dictionary
		} else {
			selectedMenu = MenuEnum.Setting
		}
		
		// Set default sections for current page
		setDefaultSections(selectedMenu)
	})
	const onClickMenu = (e: MouseEvent, name: string): void => {
		selectedMenu = name
		// Update sections when menu changes
		setDefaultSections(name)
		// Update global app state
		appStore.setCurrentMenu(name)
	}

	const topParam = $derived({
		onClickMenu: onClickMenu,
		selectedMenu: selectedMenu
	})

	const leftParam = $derived({
		onClickMenu: onClickMenu,
		selectedMenu: selectedMenu
	})

	// Section navigation state
	let currentSection = $state('')
	let sections = $state<string[]>([])
	let sectionIndex = $state(0)

	const selectedMenuParam = $derived({
		titleText: selectedMenu,
		currentSection: currentSection,
		sections: sections,
		sectionIndex: sectionIndex
	})

	// Listen for section updates from pages
	$effect(() => {
		const handleSectionUpdate = (event: CustomEvent) => {
			if (event.detail) {
				currentSection = event.detail.currentSection || ''
				sections = event.detail.sections || []
				sectionIndex = event.detail.sectionIndex || 0
			}
		}

		window.addEventListener('updateSectionInfo', handleSectionUpdate)
		
		return () => {
			window.removeEventListener('updateSectionInfo', handleSectionUpdate)
		}
	})
</script>

<Top {...topParam} />

<!-- flex flex-col space-y-4 my-0 lg:flex-row lg:space-x-3 lg:space-y-0 bg-slate-50 dark:bg-slate-600 -->
<div class="horizontalLine flex flex-col lg:flex-row bg-slate-50 dark:bg-base-200">
	<Left {...leftParam} />
	<main class="w-full">
		<Title {...selectedMenuParam} />
		<div class="pl-3 pr-4 pt-2 pb-3">
			<slot />
		</div>

		<Footer />
	</main>
</div>

<!-- Global notification container -->
<NotificationContainer />

<!-- <Footer /> -->
