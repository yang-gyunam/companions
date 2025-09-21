<!-- svelte-options runes=true -->
<script lang="ts">
	interface Props {
		titleText?: string
		currentSection?: string
		sections?: string[]
		sectionIndex?: number
		onprevious?: () => void
		onnext?: () => void
		onselect?: (index: number) => void
	}
	
	let { 
		titleText = '',
		currentSection = '',
		sections = [],
		sectionIndex = 0,
		onprevious,
		onnext,
		onselect
	}: Props = $props()
	
	// Reactive navigation states - 선형 네비게이션
	const canGoBack = $derived(sections && sections.length > 0 && sectionIndex > 0)
	const canGoForward = $derived(sections && sections.length > 0 && sectionIndex < sections.length - 1)
	const showSectionNavigation = $derived(sections && sections.length > 1)
	
	
	function goToPrevSection() {
		if (canGoBack && onprevious) {
			onprevious()
		}
	}
	
	function goToNextSection() {
		if (canGoForward && onnext) {
			onnext()
		}
	}
	
	function goToSection(targetIndex: number) {
		if (targetIndex >= 0 && targetIndex < sections.length && targetIndex !== sectionIndex && onselect) {
			onselect(targetIndex)
		}
	}
</script>

<div class="flex flex-row h-12 bg-slate-50 dark:bg-gray-800 items-center horizontalLine border-b border-gray-200 dark:border-gray-700">
	<div class="px-4">
		<div class="text-lg font-semibold text-gray-900 dark:text-gray-100">
			{titleText}
		</div>
		{#if currentSection && !showSectionNavigation}
			<div class="text-xs text-gray-600 dark:text-gray-400 mt-1">
				{currentSection}
			</div>
		{/if}
	</div>
	<div class="grow" />
	{#if showSectionNavigation}
		<div class="flex items-center gap-4">
			<div class="flex items-center gap-3">
				<div class="flex items-center gap-1">
					{#each sections as section, index}
						<button
							class="w-2 h-2 rounded-full transition-all duration-200 {
								index === sectionIndex 
									? 'bg-primary scale-125 shadow-lg' 
									: index < sectionIndex 
										? 'bg-primary/60 hover:bg-primary/80' 
										: 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
							}"
							onclick={() => goToSection(index)}
							title={section}
						></button>
						{#if index < sections.length - 1}
							<div class="w-4 h-0.5 {index < sectionIndex ? 'bg-primary/60' : 'bg-gray-200 dark:bg-gray-700'}"></div>
						{/if}
					{/each}
				</div>
				<div class="text-xs text-gray-500 dark:text-gray-400">
					{currentSection} ({sectionIndex + 1}/{sections.length})
				</div>
			</div>
			<div class="flex items-center gap-1.5 pr-4">
				<button 
					class="btn btn-xs btn-circle transition-all duration-200 {
						canGoBack 
							? 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105' 
							: 'bg-gray-100 dark:bg-gray-800 opacity-50 cursor-not-allowed'
					}"
					onclick={goToPrevSection}
					disabled={!canGoBack}
					title={canGoBack ? 'Previous section' : 'No previous section'}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4 {canGoBack ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400'}"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</button>
				<button 
					class="btn btn-xs btn-circle transition-all duration-200 {
						canGoForward 
							? 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105' 
							: 'bg-gray-100 dark:bg-gray-800 opacity-50 cursor-not-allowed'
					}"
					onclick={goToNextSection}
					disabled={!canGoForward}
					title={canGoForward ? 'Next section' : 'No next section'}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4 {canGoForward ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400'}"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</button>
			</div>
		</div>
	{/if}
</div>
