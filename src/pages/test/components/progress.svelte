<script lang="ts">
	import Progress from '$molecules/Progress.svelte'
	import type { ProgressType } from '$molecules/Progress.type'
	import { ColorEnum, WidthEnum } from '$components/Common.type'

	let param1: ProgressType = {
		color: ColorEnum.Primary,
		value: 10,
		max: 100,
		width: WidthEnum.W24
	}

	let param2: ProgressType = {
		color: ColorEnum.Secondary,
		width: WidthEnum.W44
	}

	let param3: ProgressType = {
		color: ColorEnum.Primary,
		value: 80,
		max: 100,
		width: WidthEnum.W24
	}

	let param4: ProgressType = {
		color: ColorEnum.Primary,
		value: 20,
		max: 100,
		width: WidthEnum.W40
	}

	let param5: ProgressType = {
		color: ColorEnum.Primary,
		value: 0,
		max: 100,
		width: WidthEnum.W44
	}
</script>

<div class="mx-5 my-5">
	<Progress {...param1} />
	<br />

	<Progress {...param2} />
	<br />

	<Progress {...param3} />
	<br />

	<Progress {...param4} />
	<br />

	<Progress {...param5} />
</div>

<progress class="progress w-24 progress-primary" max="100" value="10" />
