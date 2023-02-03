<template>
  <div :class="bem('main-services', { small })">
    <div class="inner main-services__inner">
      <div class="main-services__content">
        <ServiceCard
          v-for="(service, index) in items"
          :key="`service-${index}`"
          :data="service"
          class="main-services__item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: Boolean,
    items: Array
  },
  computed: {
    catFilter () {
      return this.items.filter(x => x.id == 1)
    }
  },
  components: {
    ServiceCard: () => import('@/components/service-card/service-card')
  }
}
</script>

<style src="./main-services.less" lang="less" />
