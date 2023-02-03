<template>
	<div class="contacts">
		<div class="inner contacts__inner">
			<div class="contacts__holder">
				<div class="contacts__box contacts__box_content">
					<div class="contacts__title">Контакты</div>
					<ContactCard
						v-if="settings.address"
						type="location"
						:text="settings.address"
						class="contacts__item contacts__item_location"
					/>
					<ContactCard
						v-if="settings.phone"
						type="phone"
						:text="settings.phone"
						class="contacts__item contacts__item_location"
					/>
					<ContactCard
						v-if="settings.workDays"
						type="clock"
						:text="settings.workDays"
						class="contacts__item contacts__item_location"
					/>
					<ContactCard
						v-if="settings.inn && settings.ogrn"
						type="user"
						:text="`ИНН: ${settings.inn}<br>ОГРН: ${settings.ogrn}`"
						class="contacts__item contacts__item_location"
					/>
					<Button
						radius
						color="white"
						background="green"
						@click.native="$modal.show('modal-consultation')"
						class="contacts__button"
					>Получить консультацию</Button>
				</div>
				<div class="contacts__box contacts__box_map">
					<client-only>
						<yandex-map
							ref="map"
							zoom="17"
							:coords="coords"
							:controls="[]"
							@map-was-initialized="disabledScroll"
							class="contacts__map"
						>
							<ymap-marker
								:coords="coords"
								marker-id="1"
								:icon="markerIcon"
							/>
						</yandex-map>
					</client-only>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps';
	
	export default {
	    data: () => ({
            markerIcon: {
                layout: 'default#imageWithContent',
                imageHref: '/images/location.svg',
                imageSize: [50, 50],
                imageOffset: [-25, -40],
                contentOffset: [0, 15],
            },
	    }),
		components: {
            yandexMap,
            ymapMarker,
		    ContactCard: () => import('@/components/contact-card/contact-card'),
            Button: () => import('@/components/button/button'),
		},
        methods: {
            disabledScroll() {
                this.$refs.map.myMap.behaviors.disable('scrollZoom');
            },
        },
        computed: {
            settings() {
                return this.$store.state.general.settings;
            },
	        coords() {
                return [this.settings.latitude, this.settings.longitude];
	        },
        },
	}
</script>

<style src="./contacts.less" lang="less" />