<script lang="ts">
	import { ColorEnum } from '$components/Common.type'
	import { ButtonSize } from '$atoms/Button.type'

	interface Props {
		color?: ColorEnum
		size?: ButtonSize
		label: string
		disabled?: boolean
	}

	let { 
		color = ColorEnum.Primary,
		size = ButtonSize.MD,
		label,
		disabled = false
	}: Props = $props()

	const colorClass = $derived('btn-' + color)
	const sizeClass = $derived(size === null ? '' : 'btn-' + size)
</script>

<button class="btn {colorClass} {sizeClass}" {disabled}>
	{label}
	<slot />
</button>
