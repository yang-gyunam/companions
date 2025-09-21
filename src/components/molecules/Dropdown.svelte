<!-- svelte-options runes=true -->
<script lang="ts">
	import type { DropdownItemType, DropdownType } from '$organisms/Dropdown.type'

	interface Props {
		param: DropdownType
	}

	let { param }: Props = $props()
</script>

<div class="dropdown dropdown-{param.position}">
	{#if param.disabled}
		<label tabindex="0" class="btn m-1" disabled={param.disabled}>{param.label}</label>
	{:else}
		<label tabindex="0" class="btn m-1" for="">{param.label}</label>
	{/if}
	<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-{param.size}">
		{#each param.items as { id, value }, index}
			<li data-id={id}><a>{value}</a></li>
		{/each}
	</ul>
</div>
