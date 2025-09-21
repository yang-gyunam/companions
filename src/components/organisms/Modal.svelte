<script lang="ts">
	import { CloseType, type ModalType } from '$organisms/Modal.type'

	interface Props {
		param: ModalType
	}

	let { param }: Props = $props()
</script>

<!-- Put this part before </body> tag -->
<input type="checkbox" id={param.id} class="modal-toggle" />

{#if param.closeType === CloseType.Outside}
	<label for={param.id} class="modal cursor-pointer">
		<label class="modal-box relative w-{param.width}" for="">
			<slot name="contentSlot" />
		</label>
	</label>
{:else}
	<div class="modal">
		{#if param.closeType === CloseType.Icon}
			<div class="modal-box relative w-{param.width}">
				<label for={param.id} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
				<slot name="contentSlot" />
			</div>
		{:else if param.closeType === CloseType.Button}
			<div class="modal-box w-{param.width}">
				<slot name="contentSlot" />
				<div class="modal-action">
					<slot name="buttonSlot" />
				</div>
			</div>
		{/if}
	</div>
{/if}
