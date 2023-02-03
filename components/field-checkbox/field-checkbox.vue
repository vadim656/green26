<template>
	<label class="field-checkbox">
		<input
			type="checkbox"
			@input="$emit('input', $event.target.checked)"
			class="field-checkbox__input"
		>
		<span
			v-html="text"
			class="field-checkbox__text"
		/>
		
		<div
			v-html="error"
			class="field-checkbox__error"
		/>
	</label>
</template>

<script>
	export default {
	    props: {
	        text: String,
		    error: String,
	    },
	}
</script>

<style src="./field-checkbox.less" lang="less" />