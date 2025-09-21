<script lang="ts">
	import Button from '$atoms/Button.svelte'
	import type { ButtonType } from '$atoms/Button.type'
	import { ButtonSize } from '$atoms/Button.type'
	import { ColorEnum } from '$components/Common.type'

	let param1: ButtonType = {
		color: ColorEnum.Primary,
		//size: '',
		label: 'save'
	}

	let param2: ButtonType = {
		color: ColorEnum.Secondary,
		size: ButtonSize.XS,
		label: 'secondary'
	}

	let param3: ButtonType = {
		color: ColorEnum.Accent,
		size: ButtonSize.LG,
		label: 'accent',
		disabled: true
	}

	let param4: ButtonType = {
		color: ColorEnum.Primary,
		size: ButtonSize.XS,
		label: 'save',
		disabled: false
	}

	let param5: ButtonType = {
		color: ColorEnum.Accent,
		size: ButtonSize.WIDE,
		label: 'accent'
	}
</script>

<div class="mx-5 my-5">
	<Button {...param1} />

	<Button {...param2} />

	<Button {...param3} />

	<Button {...param4} />

	<Button {...param5}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/>
		</svg>
	</Button>

	<Button {...param5}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/>
		</svg>
	</Button>

	<!-- <hr/> -->

	<!-- <button class="btn btn-active">Button</button>
<button class="btn btn-active btn-primary">Button</button>
<button class="btn btn-active btn-secondary">Button</button>
<button class="btn btn-active btn-accent">Button</button>
<button class="btn btn-active btn-ghost">Button</button>
<button class="btn btn-active btn-link">Button</button> -->
</div>
