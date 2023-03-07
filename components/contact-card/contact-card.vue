<template>
  <div v-bind="bind" :class="bem('contact-card', { type })">
    <div v-if="type" class="contact-card__icon">
      <svg-icon :name="type" />
    </div>
    <div v-html="text" class="contact-card__text" />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    text: String
  },
  computed: {
    bind () {
      if (this.type === 'phone') {
        return {
          is: 'a',
          href: `tel: ${this.text.replaceAll(' ', '').replaceAll('-', '').replace('(', '').replace(')', '')}`
        }
      }

      return {
        is: 'div'
      }
    }
  }
}
</script>

<style src="./contact-card.less" lang="less" />
