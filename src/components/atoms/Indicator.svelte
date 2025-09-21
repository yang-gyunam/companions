<script lang="ts">
	import { ColorEnum } from '$components/Common.type'
	import { IndicatorAlignEnum } from '$atoms/Indicator.type'

	interface Props {
		align?: IndicatorAlignEnum
		color?: ColorEnum
		text?: string
	}

	let { 
		align = IndicatorAlignEnum.Start,
		color = ColorEnum.Primary,
		text = ''
	}: Props = $props()

	const alignClass = $derived('indicator-' + align)
	const colorClass = $derived('badge-' + color)
</script>

<div class="indicator">
	<span class="indicator-item indicator-top {alignClass} badge {colorClass}">{text}</span>
	<slot />
</div>
