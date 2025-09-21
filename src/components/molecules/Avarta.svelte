<script lang="ts">
	import { WidthEnum } from '$components/Common.type'
	import { AvartaShapeEnum, AvartaConnectedEnum } from '$molecules/Avarta.type'

	interface Props {
		src: string
		width?: WidthEnum
		shape?: AvartaShapeEnum
		connected?: AvartaConnectedEnum
	}

	let { 
		src,
		width = WidthEnum.W24,
		shape = AvartaShapeEnum.Rounded,
		connected = AvartaConnectedEnum.None
	}: Props = $props()

	const widthClass = $derived(width === undefined ? '' : width)
	const connectedClass = $derived(connected === undefined ? '' : connected)
</script>

<div class="avatar {connectedClass}">
	<div class="{widthClass} {shape}-full">
		<img {src} alt="" />
	</div>
</div>
