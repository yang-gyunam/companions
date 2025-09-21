<script lang="ts">
	import Indicator from '$atoms/Indicator.svelte'
	import type { IndicatorType } from '$atoms/Indicator.type'
	import { IndicatorAlignEnum } from '$atoms/Indicator.type'
	import { ColorEnum } from '$components/Common.type'

	let param1: IndicatorType = {
		align: IndicatorAlignEnum.Start,
		color: ColorEnum.Accent,
		text: ''
	}

	let param2: IndicatorType = {
		align: IndicatorAlignEnum.Center,
		color: ColorEnum.Secondary,
		text: 'new'
	}

	let param3: IndicatorType = {
		align: IndicatorAlignEnum.End,
		color: ColorEnum.Primary,
		text: 'new'
	}

	let param4: IndicatorType = {
		text: ''
	}
</script>

<div class="mx-5 my-5">
	<Indicator {...param1}>
		<div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
	</Indicator>
	<br />
	<br />
	<br />

	<Indicator {...param2}>
		<div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
	</Indicator>
	<br />
	<br />
	<br />

	<Indicator {...param3}>
		<div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
	</Indicator>
	<br />
	<br />
	<br />

	<Indicator {...param4}>
		<div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
	</Indicator>
	<br />
</div>
