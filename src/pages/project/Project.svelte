<script lang="ts">
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import ProjectCard from '$organisms/ProjectCard.svelte'
	import Card from '$organisms/Card.svelte'
	import Badge from '$atoms/Badge.svelte'
	import Progress from '$molecules/Progress.svelte'
	import TextInput from '$molecules/TextInput.svelte'
	import Hero from '$organisms/Hero.svelte'
	import { ColorEnum, WidthEnum } from '$components/Common.type'
	import { CardOrientation } from '$organisms/Card.type'
	import { SECTION_TRANSITION } from '$constants/animation'
	import { createSectionNavigation } from '$hooks/useSectionNavigation.svelte'
	import { dataService, type Project, type TeamMember } from '$services/data.service'

	// Section navigation using the hook
	const sectionNav = createSectionNavigation({
		sections: ['Project Overview', 'Project Details', 'Project Statistics'],
		initialIndex: 0
	})

	// Access reactive state from the hook
	const currentSection = $derived(sectionNav.currentSection)
	const currentSectionIndex = $derived(sectionNav.currentSectionIndex)
	const slideDirection = $derived(sectionNav.slideDirection)

	// Setup navigation event handling
	sectionNav.setupNavigation()

	// Dynamic data
	let projects: Project[] = $state([])
	let teamMembers: TeamMember[] = $state([])
	let projectCategories = $state(['All'])
	let projectStatuses = $state(['All'])

	let selectedCategory = $state('All')
	let selectedStatus = $state('All')
	let searchQuery = $state('')

	// Load data on mount
	onMount(async () => {
		try {
			const [projectData, teamData] = await Promise.all([
				dataService.getProjects(),
				dataService.getTeamMembers()
			])

			projects = projectData
			teamMembers = teamData

			// Extract unique categories and statuses from data
			const uniqueCategories = [...new Set(projects.map(p => p.category))]
			const uniqueStatuses = [...new Set(projects.map(p => p.status))]

			projectCategories = ['All', ...uniqueCategories.sort()]
			projectStatuses = ['All', ...uniqueStatuses.sort()]
		} catch (error) {
			console.error('Failed to load project data:', error)
		}
	})

	// Helper functions
	const getTeamMemberNames = (memberIds: number[]) => {
		return memberIds.map(id => {
			const member = teamMembers.find(m => m.id === id)
			return member ? member.nameEn : `Member ${id}`
		})
	}

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'Completed': return ColorEnum.Success
			case 'In Progress': return ColorEnum.Primary
			case 'Review': return ColorEnum.Info
			case 'Planning': return ColorEnum.Warning
			case 'On Hold': return ColorEnum.Error
			default: return ColorEnum.Neutral
		}
	}

	const getProgressColor = (progress: number) => {
		if (progress >= 90) return ColorEnum.Success
		if (progress >= 70) return ColorEnum.Primary
		if (progress >= 40) return ColorEnum.Info
		return ColorEnum.Warning
	}

	// Filter projects based on search criteria
	const filteredProjects = $derived(projects.filter(project => {
		const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
		const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus

		if (searchQuery === '') {
			return matchesCategory && matchesStatus
		}

		const query = searchQuery.toLowerCase()
		const teamNames = getTeamMemberNames(project.teamMembers)
		const matchesSearch =
			project.name.toLowerCase().includes(query) ||
			project.nameKo.toLowerCase().includes(query) ||
			project.description.toLowerCase().includes(query) ||
			project.client.toLowerCase().includes(query) ||
			project.technologies.some(tech => tech.toLowerCase().includes(query)) ||
			project.tags.some(tag => tag.toLowerCase().includes(query)) ||
			teamNames.some(name => name.toLowerCase().includes(query))

		return matchesCategory && matchesStatus && matchesSearch
	}))
</script>

<div class="container mx-auto px-4 py-8">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold mb-4">{currentSection}</h1>
		<p class="text-gray-600 max-w-2xl mx-auto">
			{#if currentSectionIndex === 0}
				Discover our ongoing and completed projects. From web development to mobile apps, each project showcases our commitment to innovation and excellence.
			{:else if currentSectionIndex === 1}
				Explore detailed information about each project including progress, team members, and timeline details.
			{:else if currentSectionIndex === 2}
				Get comprehensive insights into our project performance metrics, completion rates, and statistical overview.
			{/if}
		</p>
	</div>
</div>

<div class="container mx-auto px-4 py-8">
	{#key currentSectionIndex}
		<div in:fly={{ x: slideDirection * SECTION_TRANSITION.distance, duration: SECTION_TRANSITION.duration, delay: SECTION_TRANSITION.delay }} out:fly={{ x: slideDirection * -SECTION_TRANSITION.distance, duration: SECTION_TRANSITION.duration }}>
			{#if currentSectionIndex === 0}
		<!-- Section 1: Project Overview -->
		<section class="mb-12">
			<div class="flex flex-col xl:flex-row gap-6 mb-8">
				<div class="flex-1">
					<TextInput placeholder="Search projects..." bind:value={searchQuery} />
				</div>
				<div class="flex gap-4 flex-wrap">
					<div class="dropdown">
						<label tabindex="0" class="btn btn-outline">Category: {selectedCategory}</label>
						<ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
							{#each projectCategories as category}
								<li><a href="#!" onclick={() => selectedCategory = category}>{category}</a></li>
							{/each}
						</ul>
					</div>
					<div class="dropdown">
						<label tabindex="0" class="btn btn-outline">Status: {selectedStatus}</label>
						<ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
							{#each projectStatuses as status}
								<li><a href="#!" onclick={() => selectedStatus = status}>{status}</a></li>
							{/each}
						</ul>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
				{#each filteredProjects as project (project.name)}
					<ProjectCard project={{name: project.name, category: project.category, status: project.status, description: project.description}} />
				{/each}
			</div>
		</section>
	
	{:else if currentSectionIndex === 1}
		<!-- Section 2: Project Details -->
		<section class="mb-12">
			<div class="grid gap-6">
				{#each filteredProjects as project (project.name)}
					<Card param={{title: project.name, description: project.description, orientation: CardOrientation.Landscape}}>
						<div class="card-body">
							<div class="flex flex-col lg:flex-row lg:items-start gap-4">
								<div class="flex-1">
									<div class="flex flex-wrap gap-2 mb-4">
										<Badge color={ColorEnum.Secondary}>{project.category}</Badge>
										<Badge color={getStatusColor(project.status)}>{project.status}</Badge>
									</div>
									<p class="text-gray-600 mb-4">{project.description}</p>
									<div class="grid grid-cols-2 gap-4 text-sm">
										<div>
											<span class="font-semibold">Start Date:</span>
											<span class="ml-2">{new Date(project.startDate).toLocaleDateString()}</span>
										</div>
										<div>
											<span class="font-semibold">Due Date:</span>
											<span class="ml-2">{new Date(project.endDate).toLocaleDateString()}</span>
										</div>
									</div>
								</div>
								<div class="lg:w-80">
									<div class="mb-4">
										<div class="flex justify-between items-center mb-2">
											<span class="text-sm font-semibold">Progress</span>
											<span class="text-sm">{project.progress}%</span>
										</div>
										<Progress color={getProgressColor(project.progress)} value={project.progress} width={WidthEnum.Full} />
									</div>
									<div class="mb-4">
										<span class="text-sm font-semibold">Team Members</span>
										<div class="flex -space-x-2 mt-2">
											{#each getTeamMemberNames(project.teamMembers) as member}
												<div class="relative">
													<div class="bg-neutral text-neutral-content rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
														<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
														</svg>
													</div>
													<div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
														{member}
													</div>
												</div>
											{/each}
										</div>
									</div>
								</div>
							</div>
						</div>
					</Card>
				{/each}
			</div>
		</section>

	{:else if currentSectionIndex === 2}
		<!-- Section 3: Project Statistics -->
		<section class="mb-12">
			<!-- Key Performance Indicators with Charts -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				<div class="stat bg-white dark:bg-base-100 rounded-lg shadow-lg p-6 text-center">
					<div class="stat-figure text-primary">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
					</div>
					<div class="stat-title">Total Projects</div>
					<div class="stat-value text-primary">{projects.length}</div>
					<div class="stat-desc text-success">↗︎ +2 from last month</div>
				</div>

				<div class="stat bg-white dark:bg-base-100 rounded-lg shadow-lg p-6 text-center">
					<div class="stat-figure text-success">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
						</svg>
					</div>
					<div class="stat-title">Success Rate</div>
					<div class="stat-value text-success">{Math.round((projects.filter(p => p.status === 'Completed').length / projects.length) * 100)}%</div>
					<div class="stat-desc text-success">↗︎ +5% from last quarter</div>
				</div>

				<div class="stat bg-white dark:bg-base-100 rounded-lg shadow-lg p-6 text-center">
					<div class="stat-figure text-info">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
						</svg>
					</div>
					<div class="stat-title">Avg Progress</div>
					<div class="stat-value text-info">{Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%</div>
					<div class="stat-desc">Across all projects</div>
				</div>

				<div class="stat bg-white dark:bg-base-100 rounded-lg shadow-lg p-6 text-center">
					<div class="stat-figure text-warning">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
						</svg>
					</div>
					<div class="stat-title">Team Efficiency</div>
					<div class="stat-value text-warning">85%</div>
					<div class="stat-desc">Optimal productivity range</div>
				</div>
			</div>

			<!-- Detailed Analytics Grid -->
			<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
				<!-- Project Timeline Chart -->
				<Card param={{title: "Project Timeline", description: "Progress over time", orientation: CardOrientation.Landscape}}>
					<div class="card-body">
						<div class="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
							<div class="flex items-end justify-center gap-2 mb-4">
								<div class="bg-primary w-6 h-8 rounded-t opacity-80"></div>
								<div class="bg-primary w-6 h-16 rounded-t opacity-90"></div>
								<div class="bg-success w-6 h-12 rounded-t"></div>
								<div class="bg-info w-6 h-20 rounded-t opacity-85"></div>
								<div class="bg-warning w-6 h-24 rounded-t"></div>
								<div class="bg-primary w-6 h-14 rounded-t opacity-75"></div>
							</div>
							<div class="text-center">
								<div class="text-xl font-bold text-gray-700 dark:text-gray-300">Timeline View</div>
								<div class="text-sm text-gray-500">Last 6 months progress</div>
							</div>
						</div>
					</div>
				</Card>

				<!-- Status Distribution Pie -->
				<Card param={{title: "Status Distribution", description: "Current project states", orientation: CardOrientation.Landscape}}>
					<div class="card-body">
						<div class="space-y-3">
							{#each [...new Set(projects.map(p => p.status))] as status}
								{@const statusCount = projects.filter(p => p.status === status).length}
								{@const percentage = Math.round((statusCount / projects.length) * 100)}
								<div class="flex items-center justify-between">
									<div class="flex items-center gap-3">
										<div class="w-4 h-4 rounded-full {status === 'Completed' ? 'bg-success' : status === 'In Progress' ? 'bg-primary' : status === 'Review' ? 'bg-info' : status === 'Planning' ? 'bg-warning' : 'bg-error'}"></div>
										<span class="text-sm font-medium">{status}</span>
									</div>
									<div class="flex items-center gap-2">
										<span class="text-sm">{statusCount}</span>
										<div class="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
											<div class="h-2 rounded-full {status === 'Completed' ? 'bg-success' : status === 'In Progress' ? 'bg-primary' : status === 'Review' ? 'bg-info' : status === 'Planning' ? 'bg-warning' : 'bg-error'}" style="width: {percentage}%"></div>
										</div>
										<span class="text-xs text-gray-500 w-8">{percentage}%</span>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</Card>

				<!-- Performance Metrics -->
				<Card param={{title: "Performance Metrics", description: "Key indicators", orientation: CardOrientation.Landscape}}>
					<div class="card-body">
						<div class="space-y-4">
							<div class="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
								<div>
									<div class="font-semibold">On-Time Delivery</div>
									<div class="text-xs text-gray-600">Last 3 months</div>
								</div>
								<div class="text-2xl font-bold text-green-600">92%</div>
							</div>
							<div class="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
								<div>
									<div class="font-semibold">Budget Efficiency</div>
									<div class="text-xs text-gray-600">Under budget ratio</div>
								</div>
								<div class="text-2xl font-bold text-blue-600">87%</div>
							</div>
							<div class="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
								<div>
									<div class="font-semibold">Client Satisfaction</div>
									<div class="text-xs text-gray-600">Average rating</div>
								</div>
								<div class="text-2xl font-bold text-purple-600">4.8</div>
							</div>
						</div>
					</div>
				</Card>
			</div>

			<!-- Bottom Row Statistics -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<!-- Resource Utilization -->
				<Card param={{title: "Resource Utilization", description: "Team workload distribution", orientation: CardOrientation.Landscape}}>
					<div class="card-body">
						<div class="space-y-4">
							{#each [...new Set(projects.flatMap(p => p.teamMembers))].slice(0, 5) as memberId}
								{@const memberProjects = projects.filter(p => p.teamMembers.includes(memberId))}
								{@const workload = Math.min(memberProjects.length * 25, 100)}
								<div class="flex items-center justify-between">
									<div class="flex items-center gap-3">
										<div class="bg-neutral text-neutral-content rounded-full w-8 h-8 flex items-center justify-center">
											<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
											</svg>
										</div>
										<div>
											<div class="font-medium text-sm">{getTeamMemberNames([memberId])[0] || `Member ${memberId}`}</div>
											<div class="text-xs text-gray-500">{memberProjects.length} projects</div>
										</div>
									</div>
									<div class="flex items-center gap-2">
										<div class="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
											<div class="h-2 rounded-full {workload >= 80 ? 'bg-error' : workload >= 60 ? 'bg-warning' : 'bg-success'}" style="width: {workload}%"></div>
										</div>
										<span class="text-xs text-gray-500 w-8">{workload}%</span>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</Card>

				<!-- Upcoming Milestones -->
				<Card param={{title: "Upcoming Milestones", description: "Critical deadlines", orientation: CardOrientation.Landscape}}>
					<div class="card-body">
						<div class="space-y-3">
							{#each projects.filter(p => p.status !== 'Completed').sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()).slice(0, 4) as project}
								{@const daysLeft = Math.ceil((new Date(project.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
								<div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
									<div>
										<div class="font-semibold text-sm">{project.name}</div>
										<div class="text-xs text-gray-500">{project.category} • {project.progress}% complete</div>
									</div>
									<div class="text-right">
										<div class="text-sm font-bold {daysLeft < 30 ? 'text-error' : daysLeft < 60 ? 'text-warning' : 'text-success'}">{daysLeft} days</div>
										<div class="text-xs text-gray-500">{project.dueDate}</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</Card>
			</div>
		</section>
			{/if}
		</div>
	{/key}
</div>
