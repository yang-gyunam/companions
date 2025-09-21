<script lang="ts">
	import Modal from '$organisms/Modal.svelte'

	import type { ModalType } from '$organisms/Modal.type'
	import { CloseType } from '$organisms/Modal.type'

	const param1: ModalType = {
		width: '10/12',
		id: 'my-modal',
		closeType: CloseType.Button
	}

	const param2: ModalType = {
		width: '10/12',
		id: 'my-modal2',
		closeType: CloseType.Icon
	}

	const param3: ModalType = {
		width: '10/12',
		id: 'my-modal3',
		closeType: CloseType.Outside
	}
</script>

<div class="mx-5 my-5">
	<!-- The button to open modal -->
	<label for="my-modal" class="btn">open modal</label>

	<Modal param={param1}>
		<svelte:fragment slot="contentSlot">
			<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
			<p class="py-4">
				You've been selected for a chance to get one year of subscription to use Wikipedia for free!
			</p>
		</svelte:fragment>

		<label slot="buttonSlot" for="my-modal" class="btn">Close</label>
	</Modal>

	<!-- The button to open modal -->
	<label for="my-modal2" class="btn">open modal2</label>

	<Modal param={param2}>
		<svelte:fragment slot="contentSlot">
			<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
			<p class="py-4">
				You've been selected for a chance to get one year of subscription to use Wikipedia for free!
			</p>
		</svelte:fragment>
	</Modal>

	<!-- The button to open modal -->
	<label for="my-modal3" class="btn">open modal3</label>

	<Modal param={param3}>
		<svelte:fragment slot="contentSlot">
			<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
			<p class="py-4">
				You've been selected for a chance to get one year of subscription to use Wikipedia for free!
			</p>
		</svelte:fragment>
	</Modal>
</div>
