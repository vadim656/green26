<template>
	<div class="header">
		<div class="inner header__inner">
			<div class="header__content">
				<nuxt-link
					:to="{name: 'index'}"
					class="header__logotype"
				>
					<img
						src="@/assets/images/logotype.png"
						alt="Логотип"
						class="header__logotype-img"
					/>
				</nuxt-link>
				<div :class="bem('header__box', { opened })">
					<div class="header__menu">
						<nuxt-link
							v-for="link in links"
							:key="link.href"
							:to="{name: link.href}"
							class="header__menu-item"
						>{{ link.anchor }}</nuxt-link>
					</div>
					<ContactCard
						v-if="settings"
						type="location"
						:text="settings.address"
						class="header__contact header__contact_location"
					/>
				</div>
				<ContactCard
					v-if="settings"
					type="phone"
					:text="settings.phone"
					class="header__contact header__contact_phone"
				/>
				<div
					:class="bem('header__burger', { opened })"
					@click="handlerMenu"
				>
					<span />
					<span />
					<span />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			opened: false,
			links: [
				{
				    anchor: 'Услуги',
					href: 'services',
				},
                {
                    anchor: 'О нас',
                    href: 'about',
                },
                {
                    anchor: 'Контакты',
                    href: 'contacts',
                },
			],
		}),
		components: {
		    ContactCard: () => import('@/components/contact-card/contact-card'),
		},
		computed: {
		    settings() {
		        return this.$store.state.general.settings;
		    },
		},
		methods: {
		    handlerMenu() {
		        this.opened = !this.opened;
		        this.scrollLock(this.opened);
		    },
		},
		watch: {
		    $route(){
		        this.opened = false;
                this.scrollLock(false);
		    },
		},
		mounted() {
		    window.addEventListener('resize', () => {
                this.opened = false;
                this.scrollLock(false);
		    });
        },
    }
</script>

<style src="./header.less" lang="less" />