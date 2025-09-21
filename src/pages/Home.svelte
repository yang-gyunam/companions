<script lang="ts">
	import { fly } from 'svelte/transition'
	import TeamCard from '$organisms/TeamCard.svelte'
	import ProjectCard from '$organisms/ProjectCard.svelte'
	import Hero from '$organisms/Hero.svelte'
	import Stat from '$organisms/Stat.svelte'
	import Card from '$organisms/Card.svelte'
	import Badge from '$atoms/Badge.svelte'
	import Progress from '$molecules/Progress.svelte'
	import { BadgeSizeEnum } from '$atoms/Badge.type'
	import { ColorEnum, WidthEnum } from '$components/Common.type'
	import { CardOrientation } from '$organisms/Card.type'
	import { SECTION_TRANSITION } from '$constants/animation'
	import { createSectionNavigation } from '$hooks/useSectionNavigation.svelte'
	import { dataService, type TeamMember, type Project } from '$services/data.service'
	import { onMount } from 'svelte'

	// Section navigation
	const sectionNav = createSectionNavigation({
		sections: ['Dashboard Overview', 'Team Highlights', 'Active Projects', 'Recent Activity'],
		initialIndex: 0
	})

	// Access reactive state from the hook
	const currentSection = $derived(sectionNav.currentSection)
	const currentSectionIndex = $derived(sectionNav.currentSectionIndex)
	const slideDirection = $derived(sectionNav.slideDirection)

	// Setup navigation event handling
	sectionNav.setupNavigation()

	// Dynamic data
	let teamMembers: TeamMember[] = $state([])
	let projects: Project[] = $state([])
	let stats = $state([
		{ title: 'Total Members', value: '0', desc: 'Active team members' },
		{ title: 'Active Projects', value: '0', desc: 'Currently in progress' },
		{ title: 'Completed Tasks', value: '0', desc: 'This month' },
		{ title: 'Success Rate', value: '0%', desc: 'Project completion' }
	])

	// Computed recent activity
	const recentTeamActivity = $derived(() => {
		if (teamMembers.length === 0 || projects.length === 0) return []

		return [
			{ teamMember: teamMembers[0]?.nameEn || 'Sarah Kim', action: 'completed task', project: projects[0]?.name || 'Mobile App', time: '2 hours ago' },
			{ teamMember: teamMembers[1]?.nameEn || 'John Park', action: 'started project', project: projects[1]?.name || 'E-commerce Platform', time: '4 hours ago' },
			{ teamMember: teamMembers[2]?.nameEn || 'Maria Lee', action: 'updated design', project: projects[2]?.name || 'Brand Identity', time: '6 hours ago' },
			{ teamMember: teamMembers[3]?.nameEn || 'David Chen', action: 'reviewed code', project: projects[3]?.name || 'API Development', time: '8 hours ago' }
		].filter(item => item.teamMember && item.project)
	})

	// Load data on mount
	onMount(async () => {
		try {
			const [teamData, projectData, teamStats, projectStats] = await Promise.all([
				dataService.getTeamMembers(),
				dataService.getProjects(),
				dataService.getTeamStats(),
				dataService.getProjectStats()
			])

			teamMembers = teamData
			projects = projectData

			// Update stats with real data
			stats = [
				{ title: 'Total Members', value: teamStats.total.toString(), desc: 'Active team members' },
				{ title: 'Active Projects', value: projectStats.active.toString(), desc: 'Currently in progress' },
				{ title: 'Completed Tasks', value: teamStats.totalTasks.toString(), desc: 'This month' },
				{ title: 'Success Rate', value: `${Math.round((projectStats.completed / projectStats.total) * 100)}%`, desc: 'Project completion' }
			]
		} catch (error) {
			console.error('Failed to load dashboard data:', error)
		}
	})
</script>

{#if currentSectionIndex === 0}
	<Hero>
		<div class="max-w-4xl text-center">
			<h1 class="text-display text-white drop-shadow-lg mb-6">{currentSection}</h1>
			<p class="text-title-3 py-6 text-white/90 max-w-2xl mx-auto">
				Get a quick overview of your team's performance and project status at a glance with comprehensive metrics and insights.
			</p>
			<div class="flex gap-4 justify-center flex-wrap">
				<button class="btn btn-primary btn-lg">Get Started</button>
				<button class="btn btn-outline btn-lg text-white hover:text-black">Learn More</button>
			</div>
			<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
				<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
					<div class="text-title-1 text-white mb-2">24+</div>
					<div class="text-body-1 text-white/80">Team Members</div>
				</div>
				<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
					<div class="text-title-1 text-white mb-2">12+</div>
					<div class="text-body-1 text-white/80">Active Projects</div>
				</div>
				<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
					<div class="text-title-1 text-white mb-2">98%</div>
					<div class="text-body-1 text-white/80">Success Rate</div>
				</div>
			</div>
		</div>
	</Hero>
{:else}
	<div class="container mx-auto px-4 py-8">
		<div class="text-center mb-12">
			<h1 class="text-title-1 mb-4">{currentSection}</h1>
			<p class="text-body-1 text-gray-600 max-w-2xl mx-auto">
				{#if currentSectionIndex === 1}
					Meet our featured team members who are driving innovation and excellence in their respective fields and projects.
				{:else if currentSectionIndex === 2}
					Explore our current active projects and see the progress being made across different development initiatives.
				{:else if currentSectionIndex === 3}
					Stay updated with the latest team activities, project updates, and collaborative efforts happening right now.
				{/if}
			</p>
		</div>
	</div>
{/if}

<div class="container mx-auto px-4 py-8">
	{#key currentSectionIndex}
		<div in:fly={{ x: slideDirection * SECTION_TRANSITION.distance, duration: SECTION_TRANSITION.duration, delay: SECTION_TRANSITION.delay }} out:fly={{ x: slideDirection * -SECTION_TRANSITION.distance, duration: SECTION_TRANSITION.duration }}>
			{#if currentSectionIndex === 0}
		<!-- Section 1: Dashboard Overview -->
		<section class="mb-12">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each stats as stat}
					<Stat>
						<div class="stat-title">{stat.title}</div>
						<div class="stat-value text-primary">{stat.value}</div>
						<div class="stat-desc">{stat.desc}</div>
					</Stat>
				{/each}
			</div>
		</section>
	
	{:else if currentSectionIndex === 1}
		<!-- Section 2: Team Highlights -->
		<section class="mb-12">
			<!-- <div class="flex justify-end items-center mb-6">
				<Badge color={ColorEnum.Primary} size={BadgeSizeEnum.LG}>Featured</Badge>
			</div> -->
			<div class="grid md:grid-cols-3 gap-6">
				{#each teamMembers.slice(0, 3) as member}
					<TeamCard teamMember={{name: member.nameEn, role: member.role, department: member.department, badge: member.badge}} />
				{/each}
			</div>
		</section>
	
	{:else if currentSectionIndex === 2}
		<!-- Section 3: Active Projects -->
		<section class="mb-12">
			<div class="flex justify-end items-center mb-6">
				<!-- <div class="flex gap-2">
					<Badge color={ColorEnum.Success}>12 Active</Badge>
					<Badge color={ColorEnum.Warning}>3 Pending</Badge>
				</div> -->
			</div>
			<div class="grid md:grid-cols-2 gap-6 mb-8">
				{#each projects.slice(0, 2) as project}
					<ProjectCard project={{name: project.name, category: project.category, status: project.status, description: project.description}} />
				{/each}
			</div>

			<div class="grid md:grid-cols-2 gap-6">
				{#each projects.slice(2, 4) as project}
					<Card param={{title: project.name, description: project.description, orientation: CardOrientation.Landscape}}>
						<div class="card-body">
							<h3 class="card-title">{project.name}</h3>
							<p class="text-sm text-gray-600 mb-4">{project.description}</p>
							<Progress color={project.progress > 80 ? ColorEnum.Success : ColorEnum.Primary} value={project.progress} width={WidthEnum.Full} />
							<div class="flex justify-between text-sm mt-2">
								<span>Progress: {project.progress}%</span>
								<span>Due: {new Date(project.endDate).toLocaleDateString()}</span>
							</div>
						</div>
					</Card>
				{/each}
			</div>
		</section>
	
	{:else if currentSectionIndex === 3}
		<!-- Section 4: Recent Activity -->
		<section class="mb-12">
			<Card param={{title: "Recent Activity", description: "Latest team activities and updates", orientation: CardOrientation.Landscape}}>
				<div class="card-body">
					<div class="space-y-4">
						{#each recentTeamActivity() as activity}
							<div class="flex items-center justify-between p-4 bg-base-200 rounded-lg">
								<div class="flex items-center gap-3">
									<div class="bg-neutral text-neutral-content rounded-full w-10 h-10 flex items-center justify-center">
										<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
									</div>
									<div>
										<p class="font-semibold">{activity.teamMember} {activity.action}</p>
										<p class="text-sm text-gray-600">{activity.project}</p>
									</div>
								</div>
								<div class="text-right">
									<p class="text-xs text-gray-500">{activity.time}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</Card>
		</section>
			{/if}
		</div>
	{/key}
</div>
