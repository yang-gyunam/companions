<!-- svelte-options runes=true -->
<script lang="ts">
	import { MenuEnum } from '$models/constants'
	import ci from '$assets/ci_gnyang.png'

	interface Props {
		onClickMenu: (e: MouseEvent, name: string) => void
		selectedMenu?: string
	}

	let { onClickMenu, selectedMenu = '' }: Props = $props()
</script>

<header>
	<div
		class="flex flex-row flex-nowrap items-center pl-6 h-12 custom-bgcolor-seoul-sky horizontalLine"
	>
		<div class="w-6">
			<img src={ci} />
		</div>
		<div class="pl-4">
			<a
				href="#/"
				class="link link-hover text-title-3 text-white font-azure"
				onclick={(e) => onClickMenu(e, MenuEnum.Home)}>Companions</a
			>
		</div>
		<div class="grow" />
		<div class="dropdown dorpdown-bottom dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle btn-sm mr-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </label>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-box w-48 mt-2 mr-2">
        <li><a class="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">Homepage</a></li>
        <li><a class="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">About</a></li>
      </ul>
		</div>
	</div>
</header>
