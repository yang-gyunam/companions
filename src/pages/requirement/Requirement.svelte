<!-- svelte-options runes=true -->
<script lang="ts">
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import { RequirementTypeEnum } from '$models/constants'
	import RequirementCard from '$organisms/RequirementCard.svelte'
	import RequirementDetailCard from '$organisms/RequirementDetailCard.svelte'
	import ProjectSelectionCard from '$organisms/ProjectSelectionCard.svelte'
	import Badge from '$atoms/Badge.svelte'
	import { ColorEnum } from '$components/Common.type'
	import type { Project, RequirementItem, SectionNavigationEvent, SectionInfoEvent } from '$types/requirement.types'
	import { mockProjects, mockRequirementItems } from '$data/requirement.mock'
	import { SECTION_TRANSITION } from '$constants/animation'
	import { createSectionNavigation } from '$hooks/useSectionNavigation.svelte'
	import { appStore } from '$stores/app.store.svelte'

	// Section navigation with validation
	const sectionNav = createSectionNavigation({
		sections: ['Project Selection', 'Work Items'],
		initialIndex: 0,
		validationFn: (targetIndex, currentIndex) => {
			// Prevent navigation to Work Items if no project is selected
			if (targetIndex === 1 && !selectedProject) {
				return false
			}
			return true
		},
		onValidationFailed: (targetIndex, currentIndex) => {
			if (targetIndex === 1 && !selectedProject) {
				appStore.addNotification({
					type: 'warning',
					title: 'Project Required',
					message: 'Please select a project first to view work items.',
					duration: 4000
				})
			}
		}
	})

	// Access reactive state from the hook
	const currentSection = $derived(sectionNav.currentSection)
	const currentSectionIndex = $derived(sectionNav.currentSectionIndex)
	const slideDirection = $derived(sectionNav.slideDirection)

	// Setup navigation event handling
	sectionNav.setupNavigation()
	

	// Projects data for selection
	const projects: Project[] = mockProjects
	let projectLoadError = $state(false)

	let selectedProject = $state<Project | null>(null) // No default selection
	
	// Go back to project selection if no project is selected while in Work Items
	$effect(() => {
		if (currentSectionIndex === 1 && !selectedProject) {
			sectionNav.goToSection(0)
		}
	})

	// Error handling for project selection
	function handleProjectSelect(project: Project) {
		try {
			selectedProject = selectedProject?.id === project.id ? null : project
		} catch (error) {
			console.error('Error selecting project:', error)
			selectedProject = null
		}
	}

	// Requirement items data
	const [param1, param2, param3, param4, param5, param6] = mockRequirementItems
</script>

<div class="container mx-auto px-4 py-8">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold mb-4">{currentSection}</h1>
		<p class="text-gray-600 max-w-2xl mx-auto">
			{#if currentSectionIndex === 0}
				Choose a project to view and manage its requirements, epics, and user stories.
			{:else if currentSectionIndex === 1}
				View and manage work items for the selected project including requirements, epics, and stories.
			{/if}
		</p>
	</div>
</div>

<div class="container mx-auto px-4 py-8">
	{#key currentSectionIndex}
		<div in:fly={{ x: slideDirection * SECTION_TRANSITION.distance, duration: SECTION_TRANSITION.duration, delay: SECTION_TRANSITION.delay }} out:fly={{ x: slideDirection * -SECTION_TRANSITION.distance, duration: SECTION_TRANSITION.distance }}>
			{#if currentSectionIndex === 0}
				<!-- Section 1: Project Selection -->
				<section class="mb-12" role="region" aria-label="Project Selection">
					<div class="flex justify-end items-center mb-6">
						<!-- <Badge color={ColorEnum.Info}>Select Project</Badge> -->
					</div>
					
					{#if projectLoadError}
						<div class="alert alert-error mb-8">
							<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<span>Error loading projects. Please try again later.</span>
						</div>
					{:else if projects.length === 0}
						<div class="alert alert-info mb-8">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
							<span>No projects available at the moment.</span>
						</div>
					{:else}
						<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
							{#each projects as project (project.id)}
								<ProjectSelectionCard 
									{project}
									isSelected={selectedProject?.id === project.id}
									onSelect={() => handleProjectSelect(project)}
								/>
							{/each}
						</div>
					{/if}

					<div class="text-center">
						{#if selectedProject}
							<p class="text-gray-600 mb-4">Selected Project: <span class="font-semibold">{selectedProject.name}</span></p>
							<button class="btn btn-primary" onclick={sectionNav.goToNextSection}>
								View Work Items
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</button>
						{:else}
							<p class="text-gray-400 mb-4">Please select a project to continue</p>
							<button class="btn btn-disabled" disabled>
								View Work Items
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</button>
						{/if}
					</div>
				</section>

			{:else if currentSectionIndex === 1}
				<!-- Section 2: Work Items -->
				<section class="mb-12" role="region" aria-label="Work Items">
					{#if selectedProject}
						<div class="flex justify-between items-center mb-6">
							<!-- <div class="flex items-center gap-3">
								<Badge color={ColorEnum.Primary}>{selectedProject.name}</Badge>
								<span class="text-gray-500">→</span>
								<Badge color={ColorEnum.Info}>Work Items</Badge>
							</div>
							<div class="flex gap-2">
								<Badge color={ColorEnum.Primary}>{selectedProject.requirements} Req</Badge>
								<Badge color={ColorEnum.Secondary}>{selectedProject.epics} Epic</Badge>
								<Badge color={ColorEnum.Accent}>{selectedProject.stories} Story</Badge>
							</div> -->
						</div>
					{/if}

					<div class="w-auto">
						<div class="flex flex-row">
							<!-- left section -->
							<div class="flex flex-col">
								<!-- command area -->
								<div class="flex flex-row items-center">
									<div class="flex items-center">
										<button tabindex="0" class="btn btn-sm btn-ghost btn-circle ml">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
												<path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
											</svg>
										</button>
									</div>
									<div class="grow flex place-content-center">
										<input type="text" placeholder="Search work items..." class="input input-sm input-bordered w-40" />
										<button tabindex="0" class="btn btn-sm btn-ghost btn-circle ml-1">
											<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
											</svg>
										</button>
									</div>
									<div class="flex items-center">
										<button tabindex="0" class="btn btn-sm btn-ghost btn-circle ml">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
												<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
											</svg>
										</button>
									</div>
								</div>
								<!-- list items -->
								<div class="custom-list-height overflow-scroll scrollbar-hide">
									{#if !param1}
										<div class="alert alert-warning w-80 mx-2 my-2">
											<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
											</svg>
											<span>No work items available.</span>
										</div>
									{:else}
										<div class="flex flex-col items-start w-80">
											<RequirementCard {...param1} />
											<RequirementCard {...param2} />
											<RequirementCard {...param3} />
											<RequirementCard {...param4} />
											<RequirementCard {...param5} />
											<RequirementCard {...param6} />
										</div>
									{/if}
								</div>
							</div>

							<!-- right section -->
							<div class="ml-3 flex flex-col flex-grow">
								<!-- command area -->
								<div class="flex flex-row w-full items-center">
									<div class="grow" />
									<div class="justify-end">
										<button tabindex="0" class="btn btn-sm btn-ghost btn-circle" aria-label="More options for detail view">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
												<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
											</svg>
										</button>
									</div>
								</div>

								<div class="h-auto">
									<RequirementDetailCard />
								</div>
							</div>
						</div>
					</div>
				</section>
			{/if}
		</div>
	{/key}
</div>
