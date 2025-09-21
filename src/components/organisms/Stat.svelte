<!-- svelte-options runes=true -->
<script lang="ts">
	import type { Snippet } from 'svelte'
	
	interface Props {
		className?: string
		children?: Snippet
	}
	
	let { className = '', children }: Props = $props()
</script>

<div class="stat {className}">
	{#if children}
		{@render children()}
	{/if}
</div>