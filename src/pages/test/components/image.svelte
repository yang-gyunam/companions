<script lang="ts">
	import Image from '$atoms/Image.svelte'
	import type { ImageType } from '$atoms/Image.type'

	let param1: ImageType = {
		src: '' // External image removed for licensing
	}

	let param2: ImageType = {
		src: '', // External image removed for licensing
		alt: 'noname'
	}
</script>

<div class="mx-5 my-5">
	<Image param={param1} />

	<Image param={param2} />
</div>
