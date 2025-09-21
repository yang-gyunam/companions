<script lang="ts">
	import { appStore } from '$stores/app.store.svelte'
	import NotificationToast from './NotificationToast.svelte'
	
	const notifications = $derived(appStore.current.notifications)
</script>

{#if notifications.length > 0}
	<div 
		class="fixed top-4 right-4 z-50 space-y-2"
		aria-live="polite" 
		aria-label="Notifications"
	>
		{#each notifications as notification (notification.id)}
			<NotificationToast {notification} />
		{/each}
	</div>
{/if}