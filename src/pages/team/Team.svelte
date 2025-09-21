<script lang="ts">
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import TeamCard from '$organisms/TeamCard.svelte'
	import Badge from '$atoms/Badge.svelte'
	import TextInput from '$molecules/TextInput.svelte'
	import Card from '$organisms/Card.svelte'
	import { BadgeSizeEnum } from '$atoms/Badge.type'
	import { ColorEnum } from '$components/Common.type'
	import { CardOrientation } from '$organisms/Card.type'
	import { SECTION_TRANSITION } from '$constants/animation'
	import { createSectionNavigation } from '$hooks/useSectionNavigation.svelte'
	import { dataService, type TeamMember } from '$services/data.service'

	// Section navigation
	const sectionNav = createSectionNavigation({
		sections: ['Team Statistics', 'Team Members'],
		initialIndex: 0
	})

	// Access reactive state from the hook
	const currentSection = $derived(sectionNav.currentSection)
	const currentSectionIndex = $derived(sectionNav.currentSectionIndex)
	const slideDirection = $derived(sectionNav.slideDirection)

	// Setup navigation event handling
	sectionNav.setupNavigation()

	// Dynamic data
	let teamMembers = $state<TeamMember[]>([])
	let departments = $state(['All', 'Engineering', 'Design', 'Product', 'Marketing'])
	let selectedDepartment = $state('All')
	let searchQuery = $state('')

	// Load team data on mount
	onMount(async () => {
		try {
			teamMembers = await dataService.getTeamMembers()

			// Extract unique departments from data
			const uniqueDepartments = [...new Set(teamMembers.map(member => member.department))]
			departments = ['All', ...uniqueDepartments.sort()]
		} catch (error) {
			console.error('Failed to load team data:', error)
		}
	})

	const filteredTeamMembers = $derived(teamMembers.filter(teamMember => {
		const matchesDepartment = selectedDepartment === 'All' || teamMember.department === selectedDepartment

		if (searchQuery.trim() === '') {
			return matchesDepartment
		}

		const query = searchQuery.toLowerCase().trim()
		const matchesName = teamMember.name.toLowerCase().includes(query) || teamMember.nameEn.toLowerCase().includes(query)
		const matchesRole = teamMember.role.toLowerCase().includes(query)
		const matchesDept = teamMember.department.toLowerCase().includes(query)
		const matchesBadge = teamMember.badge?.toLowerCase().includes(query) || false
		const matchesStatus = teamMember.status.toLowerCase().includes(query)
		const matchesSkills = teamMember.skills.some(skill => skill.toLowerCase().includes(query))

		return matchesDepartment && (matchesName || matchesRole || matchesDept || matchesBadge || matchesStatus || matchesSkills)
	}))

	const searchResultsCount = $derived(filteredTeamMembers.length)
	const showingAllMembers = $derived(searchQuery.trim() === '' && selectedDepartment === 'All')

	// Keyboard shortcuts
	function handleKeydown(event) {
		// ESC to clear search
		if (event.key === 'Escape' && searchQuery.trim() !== '') {
			searchQuery = ''
			event.preventDefault()
		}
		// Ctrl+K or Cmd+K to focus search
		if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
			const searchInput = document.querySelector('input[placeholder*="Search"]')
			if (searchInput) {
				searchInput.focus()
				event.preventDefault()
			}
		}
	}

	const engineeringCount = $derived(teamMembers.filter(tm => tm.department === 'Engineering' && tm.status === 'active').length)
	const designCount = $derived(teamMembers.filter(tm => tm.department === 'Design' && tm.status === 'active').length)
	const productCount = $derived(teamMembers.filter(tm => tm.department === 'Product' && tm.status === 'active').length)
	const marketingCount = $derived(teamMembers.filter(tm => tm.department === 'Marketing' && tm.status === 'active').length)
	const totalActiveTeamMembers = $derived(teamMembers.filter(tm => tm.status === 'active').length)
	const newTeamMembers = $derived(teamMembers.filter(tm => tm.badge === 'NEW').length)
	const seniorTeamMembers = $derived(teamMembers.filter(tm => tm.badge === 'SENIOR' || tm.badge === 'LEAD' || tm.badge === 'EXPERT').length)
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="container mx-auto px-4 py-8">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold mb-4">{currentSection}</h1>
		<p class="text-gray-600 max-w-2xl mx-auto">
			{#if currentSectionIndex === 0}
				Get insights into our team composition, growth, and diversity metrics. See how our talented professionals are distributed across different departments.
			{:else if currentSectionIndex === 1}
				Meet the talented individuals who make our success possible. From developers to designers, each team member brings unique skills and passion to our projects.
			{/if}
		</p>
	</div>

	{#key currentSectionIndex}
		<div in:fly={{ x: slideDirection * 300, duration: 400, delay: 100 }} out:fly={{ x: slideDirection * -300, duration: 300 }}>
			{#if currentSectionIndex === 0}
				<!-- Section 1: Team Statistics -->
				<section class="mb-12">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="stats shadow bg-base-100">
				<div class="stat place-items-center">
					<div class="stat-title">Total Members</div>
					<div class="stat-value text-primary">{totalActiveTeamMembers}</div>
					<div class="stat-desc">Active employees</div>
				</div>
			</div>
			<div class="stats shadow bg-base-100">
				<div class="stat place-items-center">
					<div class="stat-title">Engineering</div>
					<div class="stat-value text-secondary">{engineeringCount}</div>
					<div class="stat-desc">{Math.round(engineeringCount/totalActiveTeamMembers*100)}% of team</div>
				</div>
			</div>
			<div class="stats shadow bg-base-100">
				<div class="stat place-items-center">
					<div class="stat-title">Design & Product</div>
					<div class="stat-value text-accent">{designCount + productCount}</div>
					<div class="stat-desc">{Math.round((designCount + productCount)/totalActiveTeamMembers*100)}% of team</div>
				</div>
			</div>
			<div class="stats shadow bg-base-100">
				<div class="stat place-items-center">
					<div class="stat-title">Senior Level</div>
					<div class="stat-value text-info">{seniorTeamMembers}</div>
					<div class="stat-desc">Experienced professionals</div>
				</div>
			</div>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
			<div class="stats shadow bg-base-100">
				<div class="stat">
					<div class="stat-figure text-primary">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
						</svg>
					</div>
					<div class="stat-title">Team Diversity</div>
					<div class="stat-value">{totalActiveTeamMembers > 0 ? Math.round((designCount + productCount) / totalActiveTeamMembers * 100) : 0}%</div>
					<div class="stat-desc">Non-technical roles</div>
				</div>
			</div>
			<div class="stats shadow bg-base-100">
				<div class="stat">
					<div class="stat-figure text-secondary">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
						</svg>
					</div>
					<div class="stat-title">Growth Rate</div>
					<div class="stat-value">15%</div>
					<div class="stat-desc">Team expansion this year</div>
				</div>
			</div>
			<div class="stats shadow bg-base-100">
				<div class="stat">
					<div class="stat-figure text-accent">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
						</svg>
					</div>
					<div class="stat-title">Retention Rate</div>
					<div class="stat-value">94%</div>
					<div class="stat-desc">Employee satisfaction</div>
				</div>
			</div>
		</div>
	</section>
	
	{:else if currentSectionIndex === 1}
		<!-- Section 2: Team Members & Search -->
		<section class="mb-12">
			<!-- Search and Filter Section -->
			<div class="flex flex-col lg:flex-row gap-6 mb-8">
		<div class="flex-1 relative">
			<TextInput placeholder="Search team members by name, role, department, or badge..." bind:value={searchQuery} />
			{#if searchQuery.trim() !== ''}
				<button
					class="absolute right-3 top-1/2 transform -translate-y-1/2 btn btn-ghost btn-sm btn-circle"
					onclick={() => searchQuery = ''}
					title="Clear search (ESC)"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			{:else}
				<div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
					<kbd class="kbd kbd-sm">⌘K</kbd>
				</div>
			{/if}
		</div>
		<div class="flex gap-2 flex-wrap">
			{#each departments as dept}
				<button
					class="btn {selectedDepartment === dept ? 'btn-primary' : 'btn-outline'}"
					onclick={() => selectedDepartment = dept}
				>
					{dept}
					{#if dept !== 'All'}
						<div class="badge badge-sm ml-1">
							{teamMembers.filter(tm => tm.department === dept && tm.status === 'active').length}
						</div>
					{/if}
				</button>
			{/each}
		</div>
	</div>

	<!-- Search Results Info -->
	{#if !showingAllMembers}
		<div class="alert alert-info mb-6">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<div>
				<h3 class="font-bold">Search Results</h3>
				<div class="text-xs">
					Showing {searchResultsCount} of {teamMembers.length} team members
					{#if searchQuery.trim() !== ''}
						for "{searchQuery}"
					{/if}
					{#if selectedDepartment !== 'All'}
						in {selectedDepartment} department
					{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if filteredTeamMembers.length === 0}
		<!-- No Results Found -->
		<div class="text-center py-12">
			<div class="mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
				</svg>
			</div>
			<h3 class="text-lg font-semibold text-gray-600 mb-2">No team members found</h3>
			<p class="text-gray-500 mb-4">
				{#if searchQuery.trim() !== ''}
					No results found for "{searchQuery}"
					{#if selectedDepartment !== 'All'}
						in {selectedDepartment} department
					{/if}
				{:else if selectedDepartment !== 'All'}
					No team members found in {selectedDepartment} department
				{:else}
					No team members match your current filters
				{/if}
			</p>
			<div class="space-x-2">
				{#if searchQuery.trim() !== ''}
					<button class="btn btn-primary" onclick={() => searchQuery = ''}>
						Clear Search
					</button>
				{/if}
				{#if selectedDepartment !== 'All'}
					<button class="btn btn-outline" onclick={() => selectedDepartment = 'All'}>
						Show All Departments
					</button>
				{/if}
			</div>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
			{#each filteredTeamMembers as teamMember (teamMember.id)}
				<TeamCard teamMember={{name: teamMember.nameEn, role: teamMember.role, department: teamMember.department, badge: teamMember.badge}} />
			{/each}
		</div>
	{/if}
		</section>
	{/if}
		</div>
	{/key}

</div>
