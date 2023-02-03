<template>
  <div
    :class="
      bem('layout', {
        desktop: $device.isDesktop,
        tablet: $device.isTablet,
        mobile: $device.isMobile,
        ios: $device.isIos,
        windows: $device.isWindows,
        macOS: $device.isMacOS,
        android: $device.isAndroid,
        chrome: $device.isChrome,
        safari: $device.isSafari,
        firefox: $device.isFirefox,
        edge: $device.isEdge
      })
    "
  >
    <div class="layout__holder">
      <div class="layout__wrapper">
        <Header class="layout__header" />
        <div class="layout__content">
          <Nuxt />
        </div>
        <Footer class="layout__footer" />
      </div>
    </div>

    <client-only>
      <ModalConsultation class="layout__modal" />
      <ModalOrder class="layout__modal" />
      <ModalSuccess class="layout__modal" />
    </client-only>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/header/header'),
    Footer: () => import('@/components/footer/footer'),
    ModalConsultation: () =>
      import('@/components/modals/modal-consultation/modal-consultation'),
    ModalOrder: () => import('@/components/modals/modal-order/modal-order'),
    ModalSuccess: () =>
      import('@/components/modals/modal-success/modal-success')
  },
  head () {
    return {
      link: [
        {
          name: 'canonical',
          href: this.$route.fullPath
        }
      ]
    }
  }
}
</script>

<style lang="less">
.layout {
  height: 100%;

  &__holder {
    height: 100%;
    position: relative;
    z-index: 0;
  }

  &__wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__header {
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    flex: 0 0 auto;
  }

  &__content {
    position: relative;
    z-index: 0;
    margin-bottom: 70px;
    flex: 1 0 auto;

    @media @mobile {
      margin-bottom: 0;
    }
  }

  &__footer {
    flex: 0 0 auto;
  }

  &__modal {
    z-index: 1;
  }
}
</style>
