<script lang="ts">
	interface Props {
		teamMember?: {
			name?: string
			role?: string
			department?: string
			avatar?: string
			badge?: string
			social?: { facebook?: string, twitter?: string, linkedin?: string }
		}
	}

	let { teamMember = {} }: Props = $props()

	const displayName = $derived(teamMember.name || 'Team Member')
	const displayRole = $derived(teamMember.role || 'Professional')
	const displayBadge = $derived(teamMember.badge || '')
</script>

<div class="mb-6 lg:mb-0">
	<div class="relative block rounded-xl border-2 shadow-lg bg-white dark:bg-base-100 p-6 hover:shadow-xl transition-shadow duration-300">
		<div class="lg:flex flex-row items-center">
			<div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 lg:pr-6">
				<div class="relative">
					{#if teamMember.avatar}
						<img
							src={teamMember.avatar}
							alt={displayName}
							class="w-full rounded-full mb-6 lg:mb-0 border-4 border-primary/20"
						/>
					{:else}
						<div class="w-full aspect-square rounded-full mb-6 lg:mb-0 border-4 border-primary/20 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
							<svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>
						</div>
					{/if}
					<div class="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-white flex items-center justify-center">
						<div class="w-3 h-3 bg-white rounded-full"></div>
					</div>
				</div>
			</div>
			<div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
				<h5 class="text-lg font-bold mb-2 text-gray-800">
					{displayName}
					{#if displayBadge}
						<div class="badge badge-accent ml-2">{displayBadge}</div>
					{/if}
				</h5>
				<p class="text-gray-500 mb-2 font-medium">{displayRole}</p>
				{#if teamMember.department}
					<div class="badge badge-outline badge-sm mb-4">{teamMember.department}</div>
				{/if}
				<div class="flex items-center gap-1 mb-4">
					<div class="rating rating-sm">
						{#each Array(5) as _, i}
							<div class="mask mask-star-2 bg-yellow-400 w-4 h-4"></div>
						{/each}
					</div>
					<span class="text-xs text-gray-500 ml-2">5.0 (12 reviews)</span>
				</div>
				<ul class="list-inside flex mx-auto justify-center lg:justify-start gap-3">
					<button class="btn btn-circle btn-sm btn-ghost hover:btn-primary" aria-label="Facebook">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4">
							<path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
						</svg>
					</button>
					<button class="btn btn-circle btn-sm btn-ghost hover:btn-info" aria-label="Twitter">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4">
							<path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
						</svg>
					</button>
					<button class="btn btn-circle btn-sm btn-ghost hover:btn-secondary" aria-label="LinkedIn">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4">
							<path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
						</svg>
					</button>
				</ul>
			</div>
		</div>
	</div>
</div>
