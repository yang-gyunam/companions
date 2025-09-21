<script lang="ts">
	interface Props {
		label?: string
		checked?: boolean
		disabled?: boolean
		onchange?: (checked: boolean) => void
	}

	let { 
		label = 'Remember me',
		checked = $bindable(false),
		disabled = false,
		onchange
	}: Props = $props()

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement
		checked = target.checked
		if (onchange) {
			onchange(checked)
		}
	}
</script>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text">{label}</span>
		<input 
			type="checkbox" 
			bind:checked 
			{disabled}
			class="checkbox checkbox-primary" 
			onchange={handleChange}
		/>
	</label>
</div>
