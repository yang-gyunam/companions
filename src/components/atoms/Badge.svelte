<script lang="ts">
	import { ColorEnum } from '$components/Common.type'
	import { BadgeOutlineEnum, BadgeSizeEnum } from '$atoms/Badge.type'

	interface Props {
		color?: ColorEnum
		outline?: BadgeOutlineEnum
		size?: BadgeSizeEnum
		text?: string
	}

	let { 
		color = ColorEnum.Primary,
		outline = BadgeOutlineEnum.None,
		size = BadgeSizeEnum.MD,
		text = ''
	}: Props = $props()

	const colorClass = $derived('badge-' + color)
	const outlineClass = $derived(outline === BadgeOutlineEnum.None ? '' : 'badge-' + BadgeOutlineEnum.Outline)
	const sizeClass = $derived('badge-' + size)
</script>

<div class="badge {colorClass} {outlineClass} {sizeClass}">{text}</div>
