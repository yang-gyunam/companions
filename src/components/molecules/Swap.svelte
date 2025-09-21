<script lang="ts">
	import type { SwapType } from '$molecules/Swap.type'

	interface Props {
		param: SwapType
	}

	let { param }: Props = $props()
</script>

{#if param.disabled}
	<label class="swap swap-{param.type}">
		<!-- this hidden checkbox controls the state -->
		<input type="checkbox" disabled={param.disabled} />
		<div class="opacity-50">
			<slot name="one" />
		</div>
		<div class="opacity-50">
			<slot name="theOther" />
		</div>
	</label>
{:else}
	<label class="swap swap-{param.type}">
		<!-- this hidden checkbox controls the state -->
		<input type="checkbox" />
		<slot name="one" />
		<slot name="theOther" />
	</label>
{/if}
