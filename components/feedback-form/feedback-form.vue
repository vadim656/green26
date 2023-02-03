<template>
	<div class="feedback-form">
		<div class="inner feedback-form__inner">
			<div class="feedback-form__holder">
				<div class="feedback-form__box feedback-form__box_image">
					<div class="feedback-form__image">
						<img
							src="@/assets/images/builder.png"
							alt="Строитель"
							class="feedback-form__image-img"
						/>
					</div>
				</div>
				<div class="feedback-form__box feedback-form__box_content">
					<form
						@submit.prevent="sendForm"
						class="feedback-form__form"
					>
						<div class="feedback-form__title">Оставьте заявку и&nbsp;мы&nbsp;перезвоним вам в&nbsp;течении 15&nbsp;минут</div>
						<div class="feedback-form__content">
							<Field
								v-model="form.name"
								:error="$v.form.name.$dirty ? errorName : null"
								placeholder="Ваше имя"
								class="feedback-form__field"
							/>
							<Field
								v-model="form.phone"
								:error="$v.form.phone.$dirty ? errorPhone : null"
								type="tel"
								placeholder="Телефон"
								inputmode="tel"
								class="feedback-form__field"
							/>
							<Field
								v-model="form.email"
								:error="$v.form.email.$dirty ? errorEmail : null"
								placeholder="E-mail"
								inputmode="email"
								class="feedback-form__field"
							/>
						</div>
						<div class="feedback-form__footer">
							<Button
								submit
								radius
								background="green-dark"
								color="white"
								class="feedback-form__button"
								
								
							>Отправить заявку</Button>
							
							<FieldCheckbox
								v-model="form.agreement"
								:error="$v.form.agreement.$dirty ? errorAgreement : null"
								text="Отправляя форму вы соглашаетесь с условиями обработки персональных данных и политикой конфиденциальности"
								class="feedback-form__agreement"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators';
    import { phone } from '@/tools/validators';
	
	export default {
		components: {
		    Button: () => import('@/components/button/button'),
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
                        this.$modal.show('modal-success');
						this.$yandexMetrika.reachGoal('click-15-min');
                    }).catch((e) => {
                        console.error(e)
                    });
                }
		    },
		},
	}
</script>

<style src="./feedback-form.less" lang="less" />