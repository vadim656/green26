<template>
	<BaseModal
		:min-height="300"
		:min-width="250"
		name="modal-success"
		class="modal-success"
	>
		<div class="modal-success__title">Сообщение отправлено!</div>
		<div class="modal-success__text">Наш менеджер свяжется с&nbsp;Вами в&nbsp;течении 15&nbsp;минут.</div>
		<Button
			radius
			background="green"
			color="white"
			@click.native="$modal.hide('modal-success')"
			class="modal-success__button"
		>Хорошо</Button>
	</BaseModal>
</template>

<script>
    export default {
        components: {
            Button: () => import('@/components/button/button'),
            BaseModal: () => import('@/components/modals/base-modal/base-modal'),
        },
    }
</script>

<style src="./modal-success.less" lang="less" />