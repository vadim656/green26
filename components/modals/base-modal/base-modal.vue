<template>
	<modal
		:adaptive="true"
		:name="name"
		transition="fade"
		classes="base-modal"
		@before-open="handleOpen"
		@before-close="handleClose"
	>
		<div class="base-modal__body">
			<div
				@click="$modal.hide(name)"
				class="base-modal__close"
			>
				<svg-icon name="close" />
			</div>
			
			<div class="base-modal__content">
				<slot/>
			</div>
		</div>
		<div
			@click="$modal.hide(name)"
			class="base-modal__blackout"
		/>
	</modal>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: '',
                required: true
            },
        },
        methods: {
            handleOpen() {
                document.querySelector('body').classList.add('scroll-lock')
            },
            handleClose() {
                document.querySelector('body').classList.remove('scroll-lock')
            },
        }
    };
</script>

<style src="./base-modal.less" lang="less" />