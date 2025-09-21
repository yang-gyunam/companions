<script lang="ts">
	import Link from '$atoms/Link.svelte'
	import type { LinkType } from '$atoms/Link.type'
	import { ColorEnum } from '$components/Common.type'

	let param1: LinkType = {
		color: ColorEnum.Secondary,
		hover: true,
		text: '',
		url: '/project'
	}

	let param2: LinkType = {
		color: ColorEnum.Primary,
		hover: true,
		text: '',
		url: '/project'
	}

	let param3: LinkType = {
		color: ColorEnum.Accent,
		hover: false,
		text: 'move to Project',
		url: '/project'
	}

	let param4: LinkType = {
		color: ColorEnum.Warning,
		hover: true,
		text: 'move to Project',
		url: '/project'
	}
</script>

<div class="mx-5 my-5">
	<Link {...param1}>
		<div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
	</Link>

	<Link {...param2}>
		<div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
	</Link>

	<Link {...param3} />
	<br />

	<Link {...param4} />
	<br />

	<!-- <a class="link link-warning">I'm a simple link</a>

  <a class="link link-primary">I'm a simple link</a>

  <a class="link link-error">I'm a simple link</a> -->
</div>
