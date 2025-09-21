<!-- svelte-options runes=true -->
<script lang="ts">

	import { fly } from 'svelte/transition'
	import Badge from '$atoms/Badge.svelte'
	import { ColorEnum } from '$components/Common.type'
	import { SECTION_TRANSITION } from '$constants/animation'
	import { createSectionNavigation } from '$hooks/useSectionNavigation.svelte'
	import { getColorClass } from '$utils/tailwind'

	// Section navigation
	const sectionNav = createSectionNavigation({
		sections: ['Categories', 'Dictionary List', 'Detail View'],
		initialIndex: 0
	})

	// Access reactive state from the hook
	const currentSection = $derived(sectionNav.currentSection)
	const currentSectionIndex = $derived(sectionNav.currentSectionIndex)
	const slideDirection = $derived(sectionNav.slideDirection)

	// Setup navigation event handling
	sectionNav.setupNavigation()

	// Categories data
	const categories = [
		{ id: 'cat-1', name: 'Business Terms', count: 45, color: 'blue', description: 'Core business terminology and concepts' },
		{ id: 'cat-2', name: 'Technical Terms', count: 78, color: 'green', description: 'Technical and engineering terms' },
		{ id: 'cat-3', name: 'Process Terms', count: 32, color: 'purple', description: 'Process and workflow terminology' },
		{ id: 'cat-4', name: 'Financial Terms', count: 56, color: 'orange', description: 'Financial and accounting terms' },
		{ id: 'cat-5', name: 'Legal Terms', count: 23, color: 'red', description: 'Legal and compliance terminology' },
		{ id: 'cat-6', name: 'Marketing Terms', count: 41, color: 'pink', description: 'Marketing and sales terminology' }
	]

	let selectedCategory = $state<any>(null)
	let selectedItem = $state<any>(null)

	// Sample dictionary data
	const dictionaryItems = [
		{ id: 1, createdBy: 'Cy Ganderton', businessObject: 'Quality Control Specialist', description: 'Littel, Schaden and Vandervort', category: 'Canada', created: '12/16/2020', level: 3 },
		{ id: 2, createdBy: 'Hart Hagerty', businessObject: 'Desktop Support Technician', description: 'Zemlak, Daniel and Leannon', category: 'United States', created: '12/5/2020', level: 5 },
		{ id: 3, createdBy: 'Brice Swyre', businessObject: 'Tax Accountant', description: 'Carroll Group', category: 'China', created: '8/15/2020', level: 5 },
		{ id: 4, createdBy: 'Marjy Ferencz', businessObject: 'Office Assistant I', description: 'Rowe-Schoen', category: 'Russia', created: '3/25/2021', level: 6 },
		{ id: 5, createdBy: 'Yancy Tear', businessObject: 'Community Outreach Specialist', description: 'Wyman-Ledner', category: 'Brazil', created: '5/22/2020', level: 6 },
		{ id: 6, createdBy: 'Irma Vasilik', businessObject: 'Editor', description: 'Wiza, Bins and Emard', category: 'Venezuela', created: '12/8/2020', level: 6 },
		{ id: 7, createdBy: 'Meghann Durtnal', businessObject: 'Staff Accountant IV', description: 'Schuster-Schimmel', category: 'Philippines', created: '2/17/2021', level: 6 },
		{ id: 8, createdBy: 'Sammy Seston', businessObject: 'Accountant I', description: "O'Hara, Welch and Keebler", category: 'Indonesia', created: '5/23/2020', level: 1 }
	]

	function getLevelColor(level: number) {
		if (level <= 2) return 'sky'
		if (level <= 4) return 'green'
		if (level <= 6) return 'indigo'
		return 'pink'
	}
</script>

<div class="container mx-auto px-4 py-8">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold mb-4">{currentSection}</h1>
		<p class="text-gray-600 max-w-2xl mx-auto">
			{#if currentSectionIndex === 0}
				Browse and select dictionary categories to explore terms and definitions.
			{:else if currentSectionIndex === 1}
				View and search through dictionary items in the selected category.
			{:else}
				Detailed view of the selected dictionary item with full information.
			{/if}
		</p>
	</div>
</div>

<div class="container mx-auto px-4 py-8">
	{#key currentSectionIndex}
		<div in:fly={{ x: slideDirection * SECTION_TRANSITION.distance, duration: SECTION_TRANSITION.duration, delay: SECTION_TRANSITION.delay }} out:fly={{ x: slideDirection * -SECTION_TRANSITION.distance, duration: SECTION_TRANSITION.distance }}>
			
			{#if currentSectionIndex === 0}
				<!-- Section 1: Categories -->
				<section class="mb-12">
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{#each categories as category (category.id)}
							<div 
								class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer {selectedCategory?.id === category.id ? 'ring-2 ring-primary' : ''}"
								onclick={() => selectedCategory = selectedCategory?.id === category.id ? null : category}
								onkeydown={(e) => e.key === 'Enter' && (selectedCategory = selectedCategory?.id === category.id ? null : category)}
								tabindex="0"
								role="button"
								aria-pressed={selectedCategory?.id === category.id}
							>
								<div class="card-body">
									<h3 class="card-title text-lg">{category.name}</h3>
									<p class="text-sm text-gray-600 mb-4">{category.description}</p>
									<div class="flex justify-between items-center">
										<Badge color={ColorEnum.Secondary} text="{category.count} items" />
										<div class="w-4 h-4 rounded-full {getColorClass(category.color, 'bg', 500)}" aria-hidden="true"></div>
									</div>
								</div>
							</div>
						{/each}
					</div>

					<div class="text-center mt-8">
						{#if selectedCategory}
							<p class="text-gray-600 mb-4">Selected Category: <span class="font-semibold">{selectedCategory.name}</span></p>
							<button class="btn btn-primary" onclick={sectionNav.goToNextSection}>
								View Dictionary Items
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</button>
						{:else}
							<p class="text-gray-400 mb-4">Please select a category to continue</p>
							<button class="btn btn-disabled" disabled>
								View Dictionary Items
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</button>
						{/if}
					</div>
				</section>

			{:else if currentSectionIndex === 1}
				<!-- Section 2: Dictionary List -->
				<section>
					<div class="flex flex-row flex-nowrap items-center mb-4">
						<div class="grow"></div>
						<div class="flex">
							<input type="text" placeholder="Search dictionary items..." class="input input-sm input-bordered w-60" aria-label="Search dictionary items" />
							<button tabindex="0" class="btn btn-sm btn-ghost btn-circle ml-1" aria-label="Submit search">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</button>
						</div>
					</div>

					<div class="grid place-content-stretch mt-2 rounded bg-white dark:bg-base-100">
						<div class="overflow-x-auto">
							<table class="table table-md table-zebra">
								<thead>
									<tr class="bg-slate-100 dark:bg-slate-200">
										<th>No</th>
										<th>Create By</th>
										<th>Business Object</th>
										<th>Description</th>
										<th>Category</th>
										<th>Created</th>
										<th>Level</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{#each dictionaryItems as item (item.id)}
										<tr class="hover cursor-pointer" onclick={() => selectedItem = item}>
											<th>{item.id}</th>
											<td>{item.createdBy}</td>
											<td>{item.businessObject}</td>
											<td>{item.description}</td>
											<td>{item.category}</td>
											<td>{item.created}</td>
											<td>
												<div class="flex gap-px">
													{#each Array(6) as _, i}
														<div class="border w-2 h-5 {getColorClass(getLevelColor(item.level), 'border', 600)} {i < item.level ? getColorClass(getLevelColor(item.level), 'bg', 400 - Math.floor(i/2)*100) : ''}"></div>
													{/each}
												</div>
											</td>
											<td>
												<button 
													class="btn btn-xs btn-ghost"
													onclick={(e) => {
														e.stopPropagation();
														selectedItem = item;
														sectionNav.goToNextSection();
													}}
												>
													View
												</button>
											</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>

					<div class="text-center mt-8">
						<button class="btn btn-outline" onclick={sectionNav.goToPrevSection}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
							</svg>
							Back to Categories
						</button>
					</div>
				</section>

			{:else if currentSectionIndex === 2}
				<!-- Section 3: Detail View -->
				<section>
					{#if selectedItem}
						<div class="max-w-4xl mx-auto">
							<div class="card bg-base-100 shadow-xl">
								<div class="card-body">
									<h2 class="card-title text-2xl mb-4">{selectedItem.businessObject}</h2>
									
									<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<h3 class="font-semibold text-gray-600 mb-2">Basic Information</h3>
											<div class="space-y-2">
												<div class="flex justify-between">
													<span class="text-gray-500">ID:</span>
													<span>#{selectedItem.id}</span>
												</div>
												<div class="flex justify-between">
													<span class="text-gray-500">Created By:</span>
													<span>{selectedItem.createdBy}</span>
												</div>
												<div class="flex justify-between">
													<span class="text-gray-500">Created Date:</span>
													<span>{selectedItem.created}</span>
												</div>
												<div class="flex justify-between">
													<span class="text-gray-500">Category:</span>
													<span>{selectedItem.category}</span>
												</div>
											</div>
										</div>

										<div>
											<h3 class="font-semibold text-gray-600 mb-2">Details</h3>
											<div class="space-y-2">
												<div class="flex justify-between">
													<span class="text-gray-500">Level:</span>
													<div class="flex gap-px">
														{#each Array(6) as _, i}
															<div class="border w-2 h-5 {getColorClass(getLevelColor(selectedItem.level), 'border', 600)} {i < selectedItem.level ? getColorClass(getLevelColor(selectedItem.level), 'bg', 400 - Math.floor(i/2)*100) : ''}"></div>
														{/each}
													</div>
												</div>
												<div class="flex justify-between">
													<span class="text-gray-500">Status:</span>
													<Badge color={ColorEnum.Success} text="Active" />
												</div>
											</div>
										</div>
									</div>

									<div class="mt-6">
										<h3 class="font-semibold text-gray-600 mb-2">Description</h3>
										<p class="text-gray-700">{selectedItem.description}</p>
									</div>

									<div class="mt-6">
										<h3 class="font-semibold text-gray-600 mb-2">Additional Notes</h3>
										<textarea class="textarea textarea-bordered w-full" placeholder="Add notes here..." rows="3"></textarea>
									</div>

									<div class="card-actions justify-end mt-6">
										<button class="btn btn-outline" onclick={sectionNav.goToPrevSection}>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
												<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
											</svg>
											Back to List
										</button>
										<button class="btn btn-primary">Save Changes</button>
									</div>
								</div>
							</div>
						</div>
					{:else}
						<div class="alert alert-info max-w-2xl mx-auto">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
							<span>No item selected. Please go back and select an item from the list.</span>
						</div>
						<div class="text-center mt-4">
							<button class="btn btn-outline" onclick={sectionNav.goToPrevSection}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
								</svg>
								Back to List
							</button>
						</div>
					{/if}
				</section>
			{/if}
		</div>
	{/key}
</div>