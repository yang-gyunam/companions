<!-- svelte-options runes=true -->
<script lang="ts">
  import type { Router } from '$lib/router.svelte.js';
  
  interface Props {
    router: Router;
  }
  
  let { router }: Props = $props();
  
  const CurrentComponent = $derived(router.component);
</script>

{#if CurrentComponent}
  <CurrentComponent />
{:else}
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">404 - 페이지를 찾을 수 없습니다</h1>
      <p class="text-gray-600">요청하신 페이지가 존재하지 않습니다.</p>
    </div>
  </div>
{/if}