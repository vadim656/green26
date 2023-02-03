<template>
	<footer class="footer">
		<div class="inner footer__inner">
			<div class="footer__content">
				<div class="footer__column footer__column_left">
					<div class="footer__logotype">
						<img
							data-src="@/assets/images/logotype.png"
							alt="Логотип"
							class="footer__logotype"
							v-lazy-load
						>
					</div>
					<div class="footer__copyright">ООО “Green Group” © 2021</div>
				</div>
				<div class="footer__column footer__column_center">
					<div class="footer__menu">
						<nuxt-link
							:to="{name: 'services'}"
							class="footer__menu-item"
						>Услуги</nuxt-link>
						<nuxt-link
							:to="{name: 'about'}"
							class="footer__menu-item"
						>О нас</nuxt-link>
						<nuxt-link
							:to="{name: 'contacts'}"
							class="footer__menu-item"
						>Контакты</nuxt-link>
					</div>
					<div class="footer__contacts">
						<ContactCard
							v-if="settings"
							type="location"
							:text="settings.address"
							class="footer__contacts-item footer__contacts-item_location"
						/>
						<ContactCard
							v-if="settings"
							type="phone"
							:text="settings.phone"
							class="footer__contacts-item footer__contacts-item_phone"
						/>
					</div>
				</div>
				<div class="footer__column footer__column_right">
					<div class="footer__socials">
						<div class="footer__socials-item footer__socials-item_fb"></div>
						<div class="footer__socials-item footer__socials-item_vk"></div>
					</div>
					<Button
						border
						radius
						color="green"
						@click.native="$modal.show('modal-consultation')"
						class="footer__button"
					>Получить консультацию</Button>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		components: {
		    Button: () => import('@/components/button/button'),
            ContactCard: () => import('@/components/contact-card/contact-card'),
		},
		computed: {
            settings() {
                return this.$store.state.general.settings;
            },
		},
	}
</script>

<style src="./footer.less" lang="less" />