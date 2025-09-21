<script lang="ts">
	import { ColorEnum } from '$components/Common.type'

	interface Props {
		color?: ColorEnum
		hover?: boolean
		text?: string
		url?: string
	}

	let { 
		color = ColorEnum.Primary,
		hover = true,
		text = '',
		url = ''
	}: Props = $props()

	const colorClass = $derived('link-' + color)
	const hoverClass = $derived(hover === true ? 'link-hover' : '')
</script>

<a class="link {colorClass} {hoverClass}" href={url}>
	{text}
	<slot />
</a>
