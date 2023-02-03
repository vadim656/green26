<template>
	<div class="page services-category-page">
		<Promo
			title="Каркасное строительство"
			text="Задача организации, в особенности же сложившаяся структура организации влечет за собой процесс внедрения и модернизации инновационных методов управления процессами."
			class="services-category-page__promo"
		/>
		<MainProjects
			class="services-category-page__projects"
		/>
		<FeedbackForm
			class="services-category-page__feedback"
		/>
	</div>
</template>

<script>
    export default {
        components: {
            Promo: () => import('@/components/promo/promo'),
            MainProjects: () => import('@/components/main-projects/main-projects'),
            FeedbackForm: () => import('@/components/feedback-form/feedback-form'),
        },
    }
</script>

<style lang="less">
	.services-category-page {
		&__promo {
			margin-bottom: 70px;
			
			@media @mobile {
				margin-bottom: 40px;
			}
		}
		
		&__projects {
			margin-bottom: 110px;
			
			@media @mobile {
				margin-bottom: 40px;
			}
		}
		
		&__feedback {
		
		}
	}
</style>