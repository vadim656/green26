<template>
	<div class="main-promo">
		<div class="inner main-promo__inner">
			<div class="main-promo__title">Cтроим<br> <span>дом вашей мечты,</span> от проекта до отделки</div>
			<div class="main-promo__subtitle">С гарантией 10 лет</div>
			<div class="main-promo__stats">
				<div class="main-promo__stats-item">
					<div class="main-promo__stats-item-text main-promo__stats-item-text_big">7<br> лет</div>
					<div class="main-promo__stats-item-text">строим дома и&nbsp;бани из&nbsp;бруса</div>
				</div>
				<div class="main-promo__stats-item">
					<div class="main-promo__stats-item-text main-promo__stats-item-text_big">10<br> бригад</div>
					<div class="main-promo__stats-item-text">в&nbsp;нашем постоянном штате</div>
				</div>
				<div class="main-promo__stats-item">
					<div class="main-promo__stats-item-text main-promo__stats-item-text_big">50+<br> проектов</div>
					<div class="main-promo__stats-item-text">домов и&nbsp;бань в&nbsp;нашем каталоге</div>
				</div>
			</div>
			
			<Button
				radius
				background="green"
				color="white"
				class="main-promo__button"
				@click.native="$modal.show('modal-consultation')"
			>Расчитать стоимость</Button>
		</div>
		<div class="main-promo__background">
			<div class="inner main-promo__background-inner">
				<div class="main-promo__background-item main-promo__background-item_main"></div>
			</div>
			<div class="main-promo__background-item main-promo__background-item_grass"></div>
			<div class="main-promo__background-item main-promo__background-item_clouds"></div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
		    Button: () => import('@/components/button/button'),
		}
	}
</script>

<style src="./main-promo.less" lang="less" />