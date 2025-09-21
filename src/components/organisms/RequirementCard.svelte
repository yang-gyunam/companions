<!-- svelte-options runes=true -->
<script lang="ts">
	import { RequirementTypeEnum } from '$models/constants'
	//import ci from '$assets/ci_gnyang.png';
	
	interface Props {
		type?: RequirementTypeEnum
		title?: string
		contents?: string
		createdBy?: string
		avarta?: string
	}

	let { 
		type = RequirementTypeEnum.Requirement,
		title = '',
		contents = '',
		createdBy = '',
		avarta = ''
	}: Props = $props()

	const leftBorderClass = $derived(
		type === RequirementTypeEnum.Requirement
			? 'border-l-green-500'
			: type === RequirementTypeEnum.Epic
			? 'border-l-pink-500'
			: type === RequirementTypeEnum.Story
			? 'border-l-amber-500'
			: 'border-l-gray-200'
	)
</script>

<div
	class="mt-2 pt-3 pb-4 px-4 rounded border {leftBorderClass} border-l-2 bg-white dark:bg-base-100 prose dark:prose-invert
  hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-700"
>
	<div class="flex flex-row items-center">
		<div
			class="text-sm line-clamp-1 hover:underline hover:decoration-blue-300 hover:cursor-pointer"
		>
			{title}
		</div>
		<div class="grow" />
		{#if type === RequirementTypeEnum.Requirement}
			<div
				class="shrink-0 ml-1 w-4 h-4 custom-text-3xs rounded-full text-center text-gray-50 bg-green-500"
			>
				<!-- {type} -->R
			</div>
		{:else if type === RequirementTypeEnum.Epic}
			<div
				class="shrink-0 ml-1 w-4 h-4 custom-text-3xs rounded-full text-center text-gray-50 bg-pink-500"
			>
				<!-- {type} -->E
			</div>
		{:else if type === RequirementTypeEnum.Story}
			<div
				class="shrink-0 ml-1 w-4 h-4 custom-text-3xs rounded-full text-center text-gray-50 bg-amber-500"
			>
				<!-- {type} -->S
			</div>
		{:else}
			<div class="shrink-0 ml-1 w-4 h-4 custom-text-3xs rounded-full text-center">
				<!-- {type} -->
			</div>
		{/if}
	</div>
	<div class="mt-2 pl-1 break-word custom-text-2xs h-8 text-gray-400 line-clamp-2">
		{contents}
	</div>
	<!-- <div class="mt-1 custom-text-2xs underline custom-color-seoul-sky flex justify-end">
    more
  </div> -->
	<div class="flex flex-row items-center mt-3 text-sm">
		<div class="rounded w-5">
			<img class="mask mask-circle m-0" src={avarta} alt="" />
		</div>
		<div class="ml-2 text-xs">{createdBy}</div>
		<div class="grow" />
		<div class="text-xs text-gray-400 tracking-wide">2023-04-14 17:21</div>
	</div>
</div>
