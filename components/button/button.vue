<template>
  <button
    v-bind="bind"
    :class="bem('button', { background, color, border, radius, disabled })"
  >
    <div class="button__holder">
      <slot />
    </div>
    <div v-if="loader" class="button__loader"></div>
  </button>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: 'transparent'
    },
    color: String,
    border: Boolean,
    radius: Boolean,
    disabled: Boolean,
    loader: Boolean,
    href: String,
    to: [String, Object],
    submit: Boolean
  },
  computed: {
    bind () {
      if (this.href) {
        return {
          is: 'a',
          target: '_blank',
          href: this.href
        }
      } else if (this.to) {
        return {
          is: 'nuxt-link',
          to: this.to
        }
      } else if (this.submit) {
        return {
          is: 'button'
        }
      } else {
        return {
          is: 'div'
        }
      }
    }
  }
}
</script>

<style src="./button.less" lang="less"></style>
