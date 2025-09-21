<script lang="ts">
	import { ColorEnum, WidthEnum } from '$components/Common.type'

	interface Props {
		color?: ColorEnum
		value?: number
		max?: number
		width: WidthEnum
	}

	let { 
		color = ColorEnum.Primary,
		value = -1,
		max = -1,
		width
	}: Props = $props()

	const colorClass = $derived('progress-' + color)
</script>

{#if value === -1 || max === -1}
	<progress class="progress w-{width} {colorClass}"></progress>
{:else}
	<progress class="progress w-{width} {colorClass}" {value} {max}></progress>
{/if}
