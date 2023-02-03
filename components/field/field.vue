<template>
	<div class="field">
		<label>
			<the-mask
				v-if="type === 'tel'"
				:type="type"
				:placeholder="placeholder"
				:inputmode="inputmode"
				mask="+7 (J##) ###-##-##"
				:tokens="{J: { pattern: /[0-79]/ }, '#': { pattern: /\d/ }}"
				@input="$emit('input', $event)"
				class="field__input"
			/>
			
			<input
				v-else
				:type="type"
				:placeholder="placeholder"
				:inputmode="inputmode"
				@input="$emit('input', $event.target.value)"
				class="field__input"
			/>
		</label>
		<div
			v-if="error"
			v-html="error"
			class="field__error"
		/>
	</div>
</template>

<script>
    import { TheMask } from 'vue-the-mask';
	
	export default {
		props: {
            inputmode: String,
		    type: {
		        type: String,
			    default: 'text',
		    },
		    placeholder: String,
			error: String,
		},
        components: {
            TheMask,
        },
	}
</script>

<style src="./field.less" lang="less" />