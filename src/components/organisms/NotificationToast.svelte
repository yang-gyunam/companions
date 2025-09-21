<!-- svelte-options runes=true -->
<script lang="ts">
	import { appStore, type Notification } from '$stores/app.store.svelte'
	import { fly } from 'svelte/transition'
	
	interface Props {
		notification: Notification
	}
	
	let { notification }: Props = $props()
	
	const getIconClass = (type: string) => {
		switch (type) {
			case 'success': return 'text-success'
			case 'error': return 'text-error'
			case 'warning': return 'text-warning'
			case 'info': return 'text-info'
			default: return 'text-gray-500'
		}
	}
	
	const getIcon = (type: string) => {
		switch (type) {
			case 'success':
				return 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
			case 'error':
				return 'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
			case 'warning':
				return 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
			case 'info':
				return 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
			default:
				return 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
		}
	}
</script>

<div 
	class="alert shadow-lg mb-4 max-w-sm"
	class:alert-success={notification.type === 'success'}
	class:alert-error={notification.type === 'error'}
	class:alert-warning={notification.type === 'warning'}
	class:alert-info={notification.type === 'info'}
	in:fly={{ x: 300, duration: 300 }}
	out:fly={{ x: 300, duration: 200 }}
	role="alert"
>
	<div class="flex items-start">
		<svg 
			xmlns="http://www.w3.org/2000/svg" 
			fill="none" 
			viewBox="0 0 24 24" 
			stroke-width="1.5" 
			stroke="currentColor" 
			class="w-5 h-5 {getIconClass(notification.type)} flex-shrink-0"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d={getIcon(notification.type)} />
		</svg>
		
		<div class="ml-3 flex-1">
			<div class="font-medium text-sm">
				{notification.title}
			</div>
			{#if notification.message}
				<div class="text-xs mt-1 opacity-75">
					{notification.message}
				</div>
			{/if}
		</div>
		
		<button 
			class="btn btn-ghost btn-xs ml-2"
			onclick={() => appStore.removeNotification(notification.id)}
			aria-label="Close notification"
		>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
</div>