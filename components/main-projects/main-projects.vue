<template>
	<div :class="bem('main-projects', { mobileScroll })">
		<div class="inner main-projects__inner">
			<div
				v-if="title"
				v-html="title"
				class="main-projects__title"
			/>
			
			<div class="main-projects__content">
				<ProjectCard
					v-for="(project, i) in items"
					:key="project.id"
					:data="project"
					class="main-projects__item"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	    props: {
	        title: String,
		    mobileScroll: Boolean,
		    items: Array,
	    },
		components: {
		    ProjectCard: () => import('@/components/project-card/project-card'),
		},
	}
</script>

<style src="./main-projects.less" lang="less" />