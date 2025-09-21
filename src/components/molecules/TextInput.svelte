<!-- svelte-options runes=true -->
<script lang="ts">
	import { TextInputSize } from '$molecules/TextInput.type'
	import { WidthEnum } from '$components/Common.type'

	interface Props {
		label?: string
		value?: string
		size?: TextInputSize
		width?: WidthEnum
		placeholder?: string
		readonly?: boolean
		disabled?: boolean
		oninput?: (event: Event) => void
		onchange?: (event: Event) => void
		onfocus?: (event: FocusEvent) => void
		onblur?: (event: FocusEvent) => void
	}

	let { 
		label = '',
		value = $bindable(''),
		size = TextInputSize.MD,
		width = WidthEnum.Full,
		placeholder = '',
		readonly = false,
		disabled = false,
		oninput,
		onchange,
		onfocus,
		onblur
	}: Props = $props()
</script>

{#if label !== ''}
	<label class="label" for="">
		<span class="label-text">{label}</span>
	</label>
{/if}
<input
	type="text"
	bind:value
	{placeholder}
	class="input input-bordered input-{size} w-{width}"
	{readonly}
	{disabled}
	{oninput}
	{onchange}
	{onfocus}
	{onblur}
/>
