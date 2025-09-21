<script lang="ts">
	import Card from '$organisms/Card.svelte'
	import type { CardType } from '$organisms/Card.type'
	import { CardOrientation } from '$organisms/Card.type'

	let param1: CardType = {
		title: 'card title',
		description:
			"Landscape - Some quick example text to build on the card title and make up the bulk of the card's content.",
		orientation: CardOrientation.Landscape
	}

	let param2: CardType = {
		title: 'card title',
		description:
			"Portrait - Some quick example text to build on the card title and make up the bulk of the card's content.",
		orientation: CardOrientation.Portrait
	}
</script>

<div class="grid md:grid-cols-3 gap-6 xl:gap-x-12">
	<Card param={param1} />
</div>

<br />

<div class="grid md:grid-cols-3 gap-6 xl:gap-x-12">
	<Card param={param2} />
</div>
