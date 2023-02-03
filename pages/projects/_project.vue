<template>
	<div class="page project-page">
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
			<ProjectPromo
				:data="projectInfo"
				class="project-page__promo"
			/>
			<MainProjects
				v-if="projectInfo.sameProducts.length !== 0"
				:items="projectInfo.sameProducts"
				title="Похожие проекты"
				mobile-scroll
				class="project-page__projects"
			/>
			<FeedbackForm
				class="project-page__feedback"
			/>
		</template>
	</div>
</template>

<script>
    export default {
        async fetch() {
            this.projectInfo = await this.$store.dispatch('projects/getProjectDetail', this.$route.params.project);
        },
	    data: () => ({
            projectInfo: null,
	    }),
        components: {
            ProjectPromo: () => import('@/components/project-promo/project-promo'),
            MainProjects: () => import('@/components/main-projects/main-projects'),
            FeedbackForm: () => import('@/components/feedback-form/feedback-form'),
        },
	    head(){
            if(this.projectInfo) {
                return {
                    title: this.projectInfo.seoTitle,
                }
            }
	    },
    }
</script>

<style lang="less">
	.project-page {
		&__promo {
			margin-bottom: 70px;
			
			@media @mobile {
				margin-bottom: 40px;
			}
		}
		
		&__projects {
			margin-bottom: 100px;
			
			@media @mobile {
				margin-bottom: 40px;
			}
		}
	}
</style>