<script lang="ts">
	import RadialProgress from '$molecules/RadialProgress.svelte'
	import type { RadialProgressType } from '$molecules/RadialProgress.type'
	import { ColorEnum } from '$components/Common.type'

	let param1: RadialProgressType = {
		color: ColorEnum.Primary,
		percent: 10
	}

	let param2: RadialProgressType = {
		color: ColorEnum.Secondary,
		percent: 40
	}

	let param3: RadialProgressType = {
		color: ColorEnum.Success,
		percent: 50
	}

	let param4: RadialProgressType = {
		color: ColorEnum.Accent,
		percent: 90
	}
</script>

<div class="mx-5 my-5">
	<RadialProgress {...param1} />
	<br />
	<br />
	<br />
	<RadialProgress {...param2} />
	<br />
	<br />
	<br />

	<RadialProgress {...param3} />
	<br />
	<br />
	<br />

	<RadialProgress {...param4} />
</div>
