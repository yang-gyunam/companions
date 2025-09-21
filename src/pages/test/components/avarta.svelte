<script lang="ts">
	import Avarta from '$molecules/Avarta.svelte'
	import type { AvartaType } from '$molecules/Avarta.type'
	import { AvartaShapeEnum, AvartaConnectedEnum } from '$molecules/Avarta.type'
	import { WidthEnum } from '$components/Common.type'

	let param1: AvartaType = {
		src: '', // External image removed for licensing
		width: WidthEnum.W8,
		shape: AvartaShapeEnum.Rounded
	}

	let param2: AvartaType = {
		src: '', // External image removed for licensing
		width: WidthEnum.W10,
		shape: AvartaShapeEnum.Rounded,
		connected: AvartaConnectedEnum.Online
	}

	let param3: AvartaType = {
		src: '', // External image removed for licensing
		width: WidthEnum.W24,
		shape: AvartaShapeEnum.Rounded,
		connected: AvartaConnectedEnum.Online
	}

	let param4: AvartaType = {
		src: '', // External image removed for licensing
		width: WidthEnum.W32,
		shape: AvartaShapeEnum.Rounded,
		connected: AvartaConnectedEnum.Offline
	}

	let param5: AvartaType = {
		src: '', // External image removed for licensing
		width: WidthEnum.W44,
		shape: AvartaShapeEnum.Rectangle,
		connected: AvartaConnectedEnum.Online
	}
</script>

<div class="mx-5 my-5">
	<Avarta {...param1} />
	<br />

	<Avarta {...param2} />
	<br />

	<Avarta {...param3} />
	<br />

	<Avarta {...param4} />
	<br />

	<Avarta {...param5} />
	<br />
</div>
