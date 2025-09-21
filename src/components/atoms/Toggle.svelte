<script lang="ts">
	interface Props {
		value?: boolean
		disabled?: boolean
		className?: string
		onchange?: (value: boolean) => void
	}
	
	let { 
		value = $bindable(false),
		disabled = false,
		className = '',
		onchange
	}: Props = $props()
	
	function handleChange() {
		value = !value
		if (onchange) {
			onchange(value)
		}
	}
</script>

<input 
	type="checkbox"
	class="toggle toggle-primary {className}"
	bind:checked={value}
	onchange={handleChange}
	{disabled}
/>