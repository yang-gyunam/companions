<script lang="ts">
	import Badge from '$atoms/Badge.svelte'
	import type { BadgeType } from '$atoms/Badge.type'
	import { BadgeOutlineEnum } from '$atoms/Badge.type'
	import { ColorEnum } from '$components/Common.type'

	let param1: BadgeType = {
		color: ColorEnum.Info,
		text: '1111'
	}

	let param2: BadgeType = {
		color: ColorEnum.Primary,
		text: '2222'
	}

	let param3: BadgeType = {
		color: ColorEnum.Secondary,
		outline: BadgeOutlineEnum.Outline,
		text: '3333'
	}

	let param4: BadgeType = {
		color: ColorEnum.Warning,
		text: '4444',
		outline: BadgeOutlineEnum.Outline
	}

	let param5: BadgeType = {
		color: ColorEnum.Secondary
	}
</script>

<div class="mx-5 my-5">
	<Badge {...param1} />
	<br />

	<Badge {...param2} />
	<br />

	<Badge {...param3} />
	<br />

	<Badge {...param4} />
	<br />

	<Badge {...param5} />
</div>
