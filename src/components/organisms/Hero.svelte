<!-- svelte-options runes=true -->
<script lang="ts">
	import type { Snippet } from 'svelte'
	
	interface Props {
		backgroundImage?: string
		overlay?: boolean
		children?: Snippet
	}
	
	let { backgroundImage = '', overlay = true, children }: Props = $props()
</script>

<div 
	class="hero min-h-screen" 
	style={backgroundImage ? `background-image: url(${backgroundImage});` : 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);'}
>
	{#if overlay}
		<div class="hero-overlay bg-opacity-60"></div>
	{/if}
	<div class="hero-content text-center text-neutral-content">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>