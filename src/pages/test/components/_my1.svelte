<script lang="ts">
	import TeamCard from '$organisms/TeamCard.svelte'
	import ProjectCard from '$organisms/ProjectCard.svelte'

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

<div class="container mt-2 mb-6 px-2">
	<section class="bg-slate-50 text-left">
		<div class="text-md font-semibold mb-2">Project</div>

		<div class="grid md:grid-cols-2 gap-4 xl:gap-x-6 place-content-stretch">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	</section>
</div>

<div class="container mt-2 mb-6 px-2">
	<section class="bg-slate-50 text-left">
		<div class="text-md font-semibold mb-2">People</div>

		<div class="grid md:grid-cols-3 gap-4 xl:gap-x-6">
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
		</div>
	</section>
</div>

<div class="p-0">
	<div class="grid justify-end mt-auto p-6 bg-slate-50 dark:bg-neutral">
		<div class="text-sm">Copyright© 2020 - 2023 All rights reserved.</div>
		<!-- <div class="flex-1">
        <h1 class="text-2xl">Footer</h1>
      </div>
        -->
	</div>
</div>
