<template>
	<div class="page services-category-page">
		<div
			v-if="$fetchState.pending"
			class="page__loader"
		>
			<div class="inner page__inner">Загрузка...</div>
		</div>
		<div
			v-else-if="$fetchState.error"
			class="page__loader"
		>
			<div class="inner page__inner">Произошла ошибка! Перезагрузите страницу!</div>
		</div>
		<template v-else>
			<Promo
				:title="categoryInfo.title"
				:text="categoryInfo.description"
				:image="categoryInfo.imageUrl"
				class="services-category-page__promo"
			/>
			<MainServices
				v-if="categoryInfo.children.length !== 0"
				:items="categoryInfo.children"
				small
				class="services-category-page__services"
			/>
			<MainProjects
				v-if="categoryInfo.products.length !== 0"
				:items="categoryInfo.products"
				class="services-category-page__projects"
			/>
			<FeedbackForm
				class="services-category-page__feedback"
			/>
		</template>
	</div>
</template>

<script>
    export default {
        async fetch() {
            this.categoryInfo = await this.$store.dispatch('services/getCategory', this.$route.params.category);
        },
	    data: () => ({
            categoryInfo: null,
	    }),
        components: {
            Promo: () => import('@/components/promo/promo'),
	        MainServices: () => import('@/components/main-services/main-services'),
            MainProjects: () => import('@/components/main-projects/main-projects'),
            FeedbackForm: () => import('@/components/feedback-form/feedback-form'),
        },
        head(){
            if(this.categoryInfo) {
                return {
                    title: this.categoryInfo.seoTitle,
                }
            }
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
		
		&__services, &__projects {
			margin-bottom: 110px;
			
			@media @mobile {
				margin-bottom: 40px;
			}
		}
		
		&__feedback {
		
		}
	}
</style>