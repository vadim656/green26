<template>
	<BaseModal
		:min-height="300"
		:min-width="250"
		name="modal-order"
		class="modal-order"
	>
		<div class="modal-order__title">Заказ</div>
		<form
			@submit.prevent="sendForm"
			class="modal-order__form"
		>
			<Field
				v-model="form.name"
				:error="$v.form.name.$dirty ? errorName : null"
				placeholder="Ваше имя"
				class="modal-order__field"
			/>
			<Field
				v-model="form.phone"
				:error="$v.form.phone.$dirty ? errorPhone : null"
				type="tel"
				placeholder="Телефон"
				inputmode="tel"
				class="modal-order__field"
			/>
			<Field
				v-model="form.email"
				:error="$v.form.email.$dirty ? errorEmail : null"
				placeholder="E-mail"
				inputmode="email"
				class="modal-order__field"
			/>
			
			<FieldCheckbox
				v-model="form.agreement"
				:error="$v.form.agreement.$dirty ? errorAgreement : null"
				text="Отправляя форму вы соглашаетесь с условиями обработки персональных данных и политикой конфиденциальности"
				class="modal-order__agreement"
			/>
			
			<Button
				submit
				radius
				background="green"
				color="white"
				class="modal-order__button"
			>Отправить заявку</Button>
		</form>
	</BaseModal>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators';
    import { phone } from '@/tools/validators';
    
    export default {
        components: {
            Button: () => import('@/components/button/button'),
            BaseModal: () => import('@/components/modals/base-modal/base-modal'),
            Field: () => import('@/components/field/field'),
            FieldCheckbox: () => import('@/components/field-checkbox/field-checkbox'),
        },
        data: () => ({
            form: {
                name: '',
                phone: '',
                email: '',
                agreement: false,
            },
        }),
        validations: {
            form: {
                name: {
                    required,
                },
                phone: {
                    phone,
                    required,
                },
                email: {
                    email,
                    required,
                },
                agreement: {
                    checked: value => value === true,
                    required,
                },
            },
        },
        computed: {
            errorName() {
                if(!this.$v.form.name.required){
                    return 'Обязательное поле';
                }
                return null;
            },
            errorPhone() {
                if(!this.$v.form.phone.required){
                    return 'Обязательное поле';
                }
                if(!this.$v.form.phone.phone){
                    return 'Неправильный формат';
                }
                return null;
            },
            errorEmail() {
                if(!this.$v.form.email.required){
                    return 'Обязательное поле';
                }
                if(!this.$v.form.email.email){
                    return 'Неправильный формат';
                }
                return null;
            },
            errorAgreement() {
                if(!this.$v.form.agreement.checked){
                    return 'Обязательное поле';
                }
                return null;
            },
        },
        methods: {
            async sendForm() {
                this.$v.$touch();

                if(!this.$v.$invalid) {
                    this.$store.dispatch('general/sendRequestEmail', this.form).then((response) => {
                        this.$modal.hide('modal-order');
                        this.$modal.show('modal-success');
                        this.$yandexMetrika.reachGoal('click-order');
                    }).catch((e) => {
                        console.error(e)
                    });
                }
            },
        },
    }
</script>

<style src="./modal-order.less" lang="less" />