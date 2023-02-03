<template>
	<div class="page services-page">
		<Promo
			title="Услуги"
			text="Компания &laquo;GreenGroup&raquo; занимается строительством загородных домов для круглогодичного и&nbsp;сезонного проживания в&nbsp;СКФО и&nbsp;ЮФО. Предлагаем строительство по&nbsp;типовым проектам, которые представлены на&nbsp;нашем сайте. Поэтажный план любого проекта можно скорре ктировать под себя, также возможно строительство по&nbsp;индивидуальному проекту. Мы&nbsp;относимся к&nbsp;вашему дому как к&nbsp;своему. Работа по&nbsp;договору. Выдача гарантии."
			:image="require('@/assets/images/bg-services.jpg')"
			class="services-page__promo"
		/>
		<MainServices
			:items="services"
			class="services-page__services"
		/>
		<FeedbackForm
			class="services-page__feedback"
		/>
	</div>
</template>

<script>
	export default {
	    async fetch() {
	        this.services = await this.$store.dispatch('services/getCategories');
	    },
		data: () => ({
            services: null,
		}),
		components: {
		    Promo: () => import('@/components/promo/promo'),
            MainServices: () => import('@/components/main-services/main-services'),
            FeedbackForm: () => import('@/components/feedback-form/feedback-form'),
		},
        head(){
            return {
                title: 'Услуги',
            }
        },
	}
</script>

<style lang="less">
	.services-page {
		&__promo {
			margin-bottom: 70px;
			
			@media @mobile {
				margin-bottom: 40px;
			}
		}
		
		&__services {
			margin-bottom: 110px;
			
			@media @mobile {
				margin-bottom: 40px;
			}
		}
	}
</style>