<script lang="ts">
	import Alert from '$molecules/Alert.svelte'
	import type { AlertType } from '$molecules/Alert.type'
	import { ColorEnum } from '$components/Common.type'

	let param1: AlertType = {
		color: ColorEnum.Info,
		title: '테스트 제목입니다.',
		text: 'use cookies for no reason. 1111'
	}

	let param2: AlertType = {
		color: ColorEnum.Success,
		title: '테스트 제목입니다.',
		text: 'use cookies for no reason. 222'
	}

	let param3: AlertType = {
		color: ColorEnum.Warning,
		title: '테스트 제목입니다.',
		text: 'use cookies for no reason.3333'
	}

	let param4: AlertType = {
		color: ColorEnum.Error,
		text: 'use cookies for no reason. 444'
	}

	let param5: AlertType = {
		text: 'use cookies for no reason.5 555'
	}
</script>

<div class="mx-5 my-5">
	<Alert {...param1} />
	<br />

	<Alert {...param2} />
	<br />

	<Alert {...param3} />
	<br />

	<Alert {...param4} />
	<br />

	<Alert {...param5} />

	<div class="alert alert-info">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="stroke-current shrink-0 w-6 h-6"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span>New software update available.</span>
	</div>
</div>
