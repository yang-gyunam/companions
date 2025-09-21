<!-- svelte-options runes=true -->
<script lang="ts">
	import type { Snippet } from 'svelte'
	import { getCurrentMenu } from '$stores/router.store.svelte'
	import { router } from '$src/routes'
	import Top from '$templates/Top.svelte'
	import Left from '$templates/Left.svelte'
	import Title from '$templates/Title.svelte'
	import Footer from '$templates/Footer.svelte'
	import { MenuEnum } from '$src/models/constants'
	import { appStore } from '$stores/app.store.svelte'

	interface Props {
		hideLeftMenu?: boolean
		children?: Snippet
	}

	let { hideLeftMenu = false, children }: Props = $props()

	let currentSection = $state('')
	let sections = $state<string[]>([])
	let sectionIndex = $state(0)
	
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

	const selectedMenu = $derived.by(() => {
		const menu = getCurrentMenu()
		if (menu.toUpperCase() === MenuEnum.Home.toUpperCase() || menu === '') {
			return MenuEnum.Home
		} else if (menu.toUpperCase() === MenuEnum.Team.toUpperCase()) {
			return MenuEnum.Team
		} else if (menu.toUpperCase() === MenuEnum.Project.toUpperCase()) {
			return MenuEnum.Project
		} else if (menu.toUpperCase() === MenuEnum.Requirement.toUpperCase()) {
			return MenuEnum.Requirement
		} else if (menu.toUpperCase() === MenuEnum.Dictionary.toUpperCase()) {
			return MenuEnum.Dictionary
		} else if (menu.toUpperCase() === MenuEnum.Setting.toUpperCase()) {
			return MenuEnum.Setting
		} else if (menu.toUpperCase() === 'TEST') {
			return 'TEST'
		}
		return MenuEnum.Home
	})

	// Only update when selectedMenu changes - track dependencies explicitly
	let lastSelectedMenu = $state('')
	
	$effect(() => {
		if (selectedMenu !== lastSelectedMenu) {
			setDefaultSections(selectedMenu)
			lastSelectedMenu = selectedMenu
			
			// Update app store when menu changes
			appStore.update(state => ({
				...state,
				menu: selectedMenu,
				currentSection,
				sections,
				sectionIndex
			}))
		}
	})
	
	// Listen for section updates from pages
	$effect(() => {
		const handleSectionUpdate = (event: CustomEvent) => {
			if (event.detail) {
				currentSection = event.detail.currentSection || currentSection
				sections = event.detail.sections || sections
				sectionIndex = typeof event.detail.sectionIndex === 'number' ? event.detail.sectionIndex : sectionIndex
				
				// Force update of app store
				appStore.update(state => ({
					...state,
					currentSection,
					sections,
					sectionIndex
				}))
			}
		}
		
		window.addEventListener('updateSectionInfo', handleSectionUpdate as EventListener)
		
		return () => {
			window.removeEventListener('updateSectionInfo', handleSectionUpdate as EventListener)
		}
	})

	// Navigation functions
	function nextSection() {
		// Dispatch event for the current page to handle
		window.dispatchEvent(new CustomEvent('sectionNavigation', {
			detail: { direction: 'next' }
		}))
	}

	function previousSection() {
		// Dispatch event for the current page to handle
		window.dispatchEvent(new CustomEvent('sectionNavigation', {
			detail: { direction: 'prev' }
		}))
	}

	function selectSection(index: number) {
		// Dispatch event for the current page to handle
		window.dispatchEvent(new CustomEvent('sectionNavigation', {
			detail: { targetIndex: index }
		}))
	}
	
	function handleMenuClick(e: MouseEvent, menuItem: string) {
		// Navigate using the router
		//console.log('Menu clicked:', menuItem)
		
		// Map menu items to routes
		const routeMap: { [key: string]: string } = {
			'Home': '/',
			'Team': '/team',
			'Project': '/project', 
			'Requirement': '/requirement',
			'Dictionary': '/dictionary',
			'Setting': '/setting'
		}
		
		const route = routeMap[menuItem]
		if (route) {
			router.navigate(route)
		}
	}
</script>

<div class="flex flex-col h-screen">
	<Top onClickMenu={handleMenuClick} />
	
	<div class="drawer lg:drawer-open flex-1">
		{#if !hideLeftMenu}
			<input id="ob-drawer" type="checkbox" class="drawer-toggle" />
		{/if}
		
		<div class="drawer-content relative">
			<Title
				titleText={selectedMenu}
				{currentSection}
				{sections}
				{sectionIndex}
				onnext={nextSection}
				onprevious={previousSection}
				onselect={selectSection}
			/>
			<main class="min-h-screen p-4">
				{#if children}
					{@render children()}
				{/if}
			</main>
			<Footer />
		</div>
		
		{#if !hideLeftMenu}
			<div class="drawer-side">
				<label for="ob-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
				<Left onClickMenu={handleMenuClick} />
			</div>
		{/if}
	</div>
</div>