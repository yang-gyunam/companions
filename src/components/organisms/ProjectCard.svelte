<script lang="ts">
	interface Props {
		project?: {
			name?: string
			category?: string
			status?: string
			image?: string
			description?: string
			requirements?: number
			epic?: number
			story?: number
		}
	}

	let { project = {} }: Props = $props()

	const projectPlaceholderColors = [
		'bg-blue-500',
		'bg-green-500',
		'bg-purple-500',
		'bg-red-500',
		'bg-yellow-500',
		'bg-indigo-500'
	]

	// Generate consistent values based on project name
	function getConsistentIndex(name: string, max: number): number {
		if (!name) return 0
		
		let hash = 0
		for (let i = 0; i < name.length; i++) {
			const char = name.charCodeAt(i)
			hash = ((hash << 5) - hash) + char
			hash = hash & hash // Convert to 32bit integer
		}
		
		return Math.abs(hash) % max
	}

	const displayName = $derived(project.name || 'Project Name')
	const placeholderColor = $derived(projectPlaceholderColors[getConsistentIndex(displayName, projectPlaceholderColors.length)])
	const requirements = $derived(project.requirements || (getConsistentIndex(displayName, 200) + 50))
	const epic = $derived(project.epic || (getConsistentIndex(displayName + 'epic', 1500) + 500))
	const story = $derived(project.story || (getConsistentIndex(displayName + 'story', 3000) + 1000))
</script>

<div class="w-full">
	<div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
		<figure class="relative">
			{#if project.image}
				<img src={project.image} alt={displayName} class="h-48 w-full object-cover" />
			{:else}
				<div class="h-48 w-full {placeholderColor} flex items-center justify-center">
					<div class="text-center text-white">
						<svg class="w-16 h-16 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17l2.5-3.5L14 17H9zm6-5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
						</svg>
						<p class="text-sm font-medium opacity-90">Project Image</p>
					</div>
				</div>
			{/if}
			<div class="absolute top-4 right-4">
				{#if project.status}
					<div class="badge badge-primary badge-lg">{project.status}</div>
				{/if}
			</div>
		</figure>
		<div class="card-body p-4">
			<h3 class="card-title text-lg">{displayName}</h3>
			{#if project.description}
				<p class="text-sm text-gray-600 mb-4">{project.description}</p>
			{/if}
			{#if project.category}
				<div class="badge badge-outline mb-4">{project.category}</div>
			{/if}
			<div class="stats stats-vertical lg:stats-horizontal w-full shadow-sm border rounded-lg">
				<div class="stat text-center py-2">
					<div class="stat-title text-xs">Requirements</div>
					<div class="stat-value text-lg">
						{requirements}
						<div class="badge badge-primary badge-sm">+{Math.floor(Math.random() * 10) + 1}</div>
					</div>
				</div>
				<div class="stat text-center py-2">
					<div class="stat-title text-xs">Epic</div>
					<div class="stat-value text-lg">
						{epic.toLocaleString()}
						<div class="badge badge-secondary badge-sm">+{Math.floor(Math.random() * 50) + 10}</div>
					</div>
				</div>
				<div class="stat text-center py-2">
					<div class="stat-title text-xs">Story</div>
					<div class="stat-value text-lg">
						{(story / 1000).toFixed(1)}K
						<div class="badge badge-accent badge-sm">+{Math.floor(Math.random() * 100) + 20}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
