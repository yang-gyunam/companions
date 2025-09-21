<script lang="ts">
	import type { ImageType } from '$atoms/Image.type'

	interface Props {
		param: ImageType
	}

	let { param }: Props = $props()

	const alt = $derived(param.alt ?? '')
</script>

<img class="h-auto max-w-sm" src={param.src} {alt} />
