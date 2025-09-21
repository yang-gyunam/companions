<script lang="ts">
	import Dropdown from '$molecules/Dropdown.svelte'
	import type { DropdownType, DropdownItemType } from '$molecules/Dropdown.type'
	import { DropdownPosition } from '$molecules/Dropdown.type'

	const items: DropdownItemType[] = [
		{ id: '1', value: 'item 1' },
		{ id: '2', value: 'item 2' }
	]

	const param1: DropdownType = {
		items: items,
		label: 'Menu',
		size: '52',
		position: DropdownPosition.Bottom,
		disabled: false
	}

	const param2: DropdownType = {
		items: items,
		label: 'Menu',
		size: '52',
		disabled: true
	}

	const param3: DropdownType = {
		items: items,
		label: 'Menu',
		size: '52',
		position: DropdownPosition.End
	}
</script>

<div class="flex">
	<div class="flex-auto w-32">
		<Dropdown param={param1} />
	</div>
	<div class="flex-auto w-32">
		<Dropdown param={param2} />
	</div>

	<div class="flex-auto w-32">
		<Dropdown param={param3} />
	</div>

	<hr />

	<!-- <div class="dropdown dropdown-bottom dropdown-end">
    <label tabindex="0" class="btn m-1">Click</label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div> -->
</div>
