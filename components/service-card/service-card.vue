<template>
  <div class="service-card">
    <div class="service-card__holder">
      <div class="service-card__content">
        <div v-html="data.title" class="service-card__title" />
        <div v-if="data.productsMinPrice" class="service-card__price">
          от {{ priceFormatting(data.productsMinPrice) }} ₽
        </div>
      </div>
      <nuxt-link
        :to="{ name: 'services-category', params: { category: data.slug } }"
        class="service-card__details"
      >
        Подробнее <span>→</span>
      </nuxt-link>
    </div>
    <div class="service-card__image">
      <img
        :data-src="data.cardImageUrl"
        :alt="data.title"
        class="service-card__image-img"
        v-lazy-load
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style src="./service-card.less" lang="less" />
