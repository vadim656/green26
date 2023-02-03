<template>
	<div class="promo">
		<div class="inner promo__inner">
			<div
				v-html="title"
				class="promo__title"
			/>
			<div
				v-html="text"
				class="promo__text"
			/>
			<Button
				radius
				color="white"
				background="green"
				@click.native="$modal.show('modal-consultation')"
				class="promo__button"
			>Получить консультацию</Button>
		</div>
		
		<div class="promo__background">
			<img
				:data-src="image"
				:alt="title"
				class="promo__background-img"
				v-lazy-load
			>
		</div>
	</div>
</template>

<script>
	export default {
	    props: {
	        title: {
	            type: String,
		        required: true,
	        },
		    text: {
	            type: String,
                required: true,
		    },
		    image: {
	            type: String,
		    },
	    },
		components: {
		    Button: () => import('@/components/button/button'),
		},
	}
</script>

<style src="./promo.less" lang="less" />