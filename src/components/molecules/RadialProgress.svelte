<script lang="ts">
	import { ColorEnum } from '$components/Common.type'

	interface Props {
		color?: ColorEnum
		percent: number
		size?: string
		thickness?: string
	}

	let { 
		color = ColorEnum.Primary,
		percent,
		size = '3rem',
		thickness = '2px'
	}: Props = $props()

	const cssVars = $derived(`--value:${percent}; --size:${size}; --thickness:${thickness};`)
</script>

{#if color === undefined}
	<div class="radial-progress" style={cssVars}>{percent}%</div>
{:else}
	<div 
		class="radial-progress" 
		class:text-primary={color === ColorEnum.Primary}
		class:text-secondary={color === ColorEnum.Secondary}
		class:text-accent={color === ColorEnum.Accent}
		class:text-info={color === ColorEnum.Info}
		class:text-success={color === ColorEnum.Success}
		class:text-warning={color === ColorEnum.Warning}
		class:text-error={color === ColorEnum.Error}
		style={cssVars}
	>
		{percent}%
	</div>
{/if}
