<script lang="ts">
	import TeamCard from '$organisms/TeamCard.svelte'
</script>

<!-- Container for demo purpose -->
<div class="container my-24 px-6 mx-auto">
	<!-- Section: Design Block -->
	<section class="mb-32 text-center lg:text-left">
		<h2 class="text-3xl font-bold mb-12 text-center">
			Meet the <u class="text-blue-600">team</u>
		</h2>

		<div class="grid md:grid-cols-3 gap-6 xl:gap-x-12">
			<TeamCard />

			<TeamCard />

			<TeamCard />
		</div>
	</section>
	<!-- Section: Design Block -->
</div>
<!-- Container for demo purpose -->
