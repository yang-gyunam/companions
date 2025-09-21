<!-- svelte-options runes=true -->
<script lang="ts">
	import Badge from '$atoms/Badge.svelte'
	import { ColorEnum } from '$components/Common.type'
	import type { Project } from '../../types/requirement.types'

	interface Props {
		project: Project
		isSelected?: boolean
		onSelect: () => void
	}

	let { project, isSelected = false, onSelect }: Props = $props()

	function getProjectPlaceholderColor(projectName: string): string {
		const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-indigo-500']
		let hash = 0
		for (let i = 0; i < projectName.length; i++) {
			hash = ((hash << 5) - hash) + projectName.charCodeAt(i)
			hash = hash & hash
		}
		return colors[Math.abs(hash) % colors.length]
	}

	function getStatusColor(status: string): ColorEnum {
		switch (status) {
			case 'In Progress':
				return ColorEnum.Primary
			case 'Planning':
				return ColorEnum.Warning
			case 'Review':
				return ColorEnum.Info
			case 'Completed':
				return ColorEnum.Success
			default:
				return ColorEnum.Secondary
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault()
			onSelect()
		}
	}
</script>

<div 
	class="cursor-pointer" 
	onclick={onSelect} 
	onkeydown={handleKeyDown} 
	tabindex="0" 
	role="button"
	aria-pressed={isSelected}
	aria-label="Select project {project.name}"
>
	<div class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 {isSelected ? 'ring-2 ring-primary' : ''}">
		<figure class="relative">
			{#if project.imageUrl}
				<img
					src={project.imageUrl}
					alt={project.name}
					class="h-48 w-full object-cover"
					loading="lazy"
				/>
			{:else}
				<div class="h-48 w-full {getProjectPlaceholderColor(project.name)} flex items-center justify-center">
					<div class="text-center text-white">
						<svg class="w-16 h-16 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17l2.5-3.5L14 17H9zm6-5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
						</svg>
						<p class="text-sm font-medium opacity-90">Project Image</p>
					</div>
				</div>
			{/if}
			<div class="absolute top-4 right-4">
				{#if isSelected}
					<Badge color={ColorEnum.Primary} text="Selected" />
				{:else}
					<Badge color={getStatusColor(project.status)} text={project.status} />
				{/if}
			</div>
		</figure>
		<div class="card-body">
			<div class="mb-4">
				<h3 class="card-title text-lg">{project.name}</h3>
				<p class="text-sm text-gray-600 mb-2">{project.description}</p>
			</div>
			
			<div class="flex gap-2 mb-4">
				<Badge color={ColorEnum.Secondary} text={project.category} />
			</div>

			<div class="stats stats-vertical w-full text-center shadow-sm border rounded-lg">
				<div class="stat py-2">
					<div class="stat-title text-xs">Requirements</div>
					<div class="stat-value text-lg text-primary">{project.requirements}</div>
				</div>
				<div class="stat py-2">
					<div class="stat-title text-xs">Epics</div>
					<div class="stat-value text-lg text-secondary">{project.epics}</div>
				</div>
				<div class="stat py-2">
					<div class="stat-title text-xs">Stories</div>
					<div class="stat-value text-lg text-accent">{project.stories}</div>
				</div>
			</div>
		</div>
	</div>
</div>