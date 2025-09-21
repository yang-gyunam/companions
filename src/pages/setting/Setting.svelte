<script lang="ts">
	import { appStore } from '$stores/app.store.svelte'
	import { themeStore } from '$stores/theme.store.svelte'
	import { onMount } from 'svelte'
	import Toggle from '$atoms/Toggle.svelte'
	
	let currentTheme = $state<'light' | 'dark'>('light')
	let language = $state('en')
	let notifications = $state(true)
	let autoSave = $state(true)

	// Get current theme from store
	const getCurrentTheme = () => themeStore.current
	
	// Load settings from store
	onMount(() => {
		// Initialize theme
		themeStore.initTheme()
		currentTheme = themeStore.current

		// Update section info for navigation
		updateSectionInfo()
	})

	// React to theme changes
	$effect(() => {
		currentTheme = themeStore.current
	})
	
	function updateSectionInfo() {
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new CustomEvent('updateSectionInfo', {
				detail: {
					currentSection: 'General Settings',
					sections: ['General Settings'],
					sectionIndex: 0
				}
			}))
		}
	}
	
	function handleThemeToggle() {
		themeStore.toggleTheme()
		currentTheme = themeStore.current
		appStore.addNotification({
			type: 'success',
			title: 'Theme Updated',
			message: `Switched to ${currentTheme} mode`,
			duration: 3000
		})
	}
	
	function saveSettings() {
		appStore.addNotification({
			type: 'success',
			title: 'Settings Saved',
			message: 'All settings have been saved successfully',
			duration: 4000
		})
	}
	
	function resetSettings() {
		currentTheme = 'light'
		language = 'en'
		notifications = true
		autoSave = true
		themeStore.setTheme('light')

		appStore.addNotification({
			type: 'info',
			title: 'Settings Reset',
			message: 'All settings have been reset to defaults',
			duration: 4000
		})
	}
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Settings</h1>
		<p class="text-gray-600">Manage your application preferences and configurations</p>
	</div>

	<div class="grid gap-8">
		<!-- Appearance Settings -->
		<section class="card bg-base-100 shadow-lg">
			<div class="card-body">
				<h2 class="card-title text-xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.152-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
					</svg>
					Appearance
				</h2>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div class="form-control">
						<label class="label">
							<span class="label-text font-medium">Theme</span>
						</label>
						<div class="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
							<span class="text-sm {currentTheme === 'light' ? 'font-bold' : ''}">
								☀️ Light
							</span>
							<Toggle
								value={currentTheme === 'dark'}
								onchange={handleThemeToggle}
							/>
							<span class="text-sm {currentTheme === 'dark' ? 'font-bold' : ''}">
								🌙 Dark
							</span>
						</div>
						<div class="label">
							<span class="label-text-alt">Toggle between light and dark mode</span>
						</div>
					</div>
					
					<div class="form-control">
						<label for="language-select" class="label">
							<span class="label-text font-medium">Language</span>
						</label>
						<select id="language-select" class="select select-bordered" bind:value={language}>
							<option value="en">English</option>
							<option value="ko">한국어</option>
							<option value="ja">日本語</option>
						</select>
						<div class="label">
							<span class="label-text-alt">Select your preferred language</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Notification Settings -->
		<section class="card bg-base-100 shadow-lg">
			<div class="card-body">
				<h2 class="card-title text-xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
					</svg>
					Notifications
				</h2>
				
				<div class="space-y-4">
					<div class="form-control">
						<label class="cursor-pointer label justify-start gap-4">
							<Toggle value={notifications} onchange={() => notifications = !notifications} />
							<div>
								<div class="label-text font-medium">Enable Notifications</div>
								<div class="label-text-alt">Show toast notifications for actions and updates</div>
							</div>
						</label>
					</div>
					
					<div class="form-control">
						<label class="cursor-pointer label justify-start gap-4">
							<Toggle value={autoSave} onchange={() => autoSave = !autoSave} />
							<div>
								<div class="label-text font-medium">Auto-save</div>
								<div class="label-text-alt">Automatically save changes as you work</div>
							</div>
						</label>
					</div>
				</div>
			</div>
		</section>

		<!-- System Information -->
		<section class="card bg-base-100 shadow-lg">
			<div class="card-body">
				<h2 class="card-title text-xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					System Information
				</h2>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<div class="label">
							<span class="label-text font-medium">Application Version</span>
						</div>
						<div class="text-sm text-gray-600">v1.0.0</div>
					</div>
					
					<div>
						<div class="label">
							<span class="label-text font-medium">Build Date</span>
						</div>
						<div class="text-sm text-gray-600">{new Date().toLocaleDateString()}</div>
					</div>
					
					<div>
						<div class="label">
							<span class="label-text font-medium">Framework</span>
						</div>
						<div class="text-sm text-gray-600">SvelteKit + TypeScript</div>
					</div>
					
					<div>
						<div class="label">
							<span class="label-text font-medium">UI Library</span>
						</div>
						<div class="text-sm text-gray-600">DaisyUI + Tailwind CSS</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Action Buttons -->
		<section class="flex flex-wrap gap-4 justify-end">
			<button class="btn btn-outline" onclick={resetSettings}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
					<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
				</svg>
				Reset to Defaults
			</button>
			
			<button class="btn btn-primary" onclick={saveSettings}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
					<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
				</svg>
				Save Settings
			</button>
		</section>
	</div>
</div>