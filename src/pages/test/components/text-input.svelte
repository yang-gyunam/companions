<script lang="ts">
	import TextInput from '$molecules/TextInput.svelte'

	import type { TextInputType } from '$molecules/TextInput.type'
	import { TextInputSize } from '$molecules/TextInput.type'
	import { WidthEnum } from '$components/Common.type'

	let param1: TextInputType = {
		value: 'this is text',
		size: TextInputSize.MD,
		width: WidthEnum.W72
	}

	let param2: TextInputType = {
		label: 'label',
		value: 'this is text',
		size: TextInputSize.SM,
		width: WidthEnum.W60,
		placeholder: 'input text'
	}

	let param3: TextInputType = {
		label: 'label-readonly',
		value: '무궁화꽃이피었습니다무궁화꽃이피었습니다',
		size: TextInputSize.LG,
		readonly: true
	}

	let param4: TextInputType = {
		label: 'disabled text',
		value: '무궁화꽃이피었습니다무궁화꽃이피었습니다무궁화꽃이피었습니다',
		size: TextInputSize.SM,
		disabled: true
	}
</script>

<div class="flex form-control mx-10 my-10">
	<TextInput {...param1} />
	<br /><br />
	<TextInput {...param2} />
	<br /><br />
	<TextInput {...param3} />
	<br /><br />
	<TextInput {...param4} />
</div>
