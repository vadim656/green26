<template>
  <div class="project-promo">
    <div class="inner project-promo__inner">
      <div class="project-promo__holder">
        <div class="project-promo__box project-promo__box_slider">
          <client-only>
            <Swiper
              ref="sliderImages"
              :options="optionsSlider"
              @slide-change="slideChangeSliderImages"
              class="project-promo__slider"
            >
              <SwiperSlide
                v-for="(slide, index) in data.images"
                :key="`slide-${index}`"
                class="project-promo__slider-item"
              >
                <img
                  :data-src="slide"
                  :title="`Изображение ${index + 1}`"
                  class="project-promo__slider-item-img"
                  v-lazy-load
                />
              </SwiperSlide>
            </Swiper>

            <div
              v-if="data.images.length > 1"
              class="project-promo__navigation project-promo__navigation_prev project-promo__navigation_disabled"
            >
              <svg-icon name="arrow-left" />
            </div>
            <div
              v-if="data.images.length > 1"
              class="project-promo__navigation project-promo__navigation_next"
            >
              <svg-icon name="arrow-left" />
            </div>

            <Swiper
              v-if="data.images.length > 1"
              ref="sliderThumbs"
              :options="optionsThumbs"
              class="project-promo__thumbs"
            >
              <SwiperSlide
                v-for="(thumb, index) in data.images"
                :key="`thumb-${index}`"
                @click.native="clickThumb(index)"
                :class="
                  bem('project-promo__thumbs-item', {
                    active: indexActiveSlide === index
                  })
                "
              >
                <img
                  :data-src="thumb"
                  :title="`Изображение ${index + 1}`"
                  class="project-promo__thumbs-item-img"
                  v-lazy-load
                />
              </SwiperSlide>
            </Swiper>

            <template #placeholder>
              <div class="project-promo__slider">
                <div class="project-promo__slider-wrapper">
                  <div class="project-promo__slider-item"></div>
                </div>
              </div>

              <div
                v-if="data.images.length > 1"
                class="project-promo__navigation project-promo__navigation_prev project-promo__navigation_disabled"
              ></div>
              <div
                v-if="data.images.length > 1"
                class="project-promo__navigation project-promo__navigation_next"
              ></div>

              <div v-if="data.images.length > 1" class="project-promo__thumbs">
                <div class="project-promo__thumbs-wrapper">
                  <div
                    class="project-promo__thumbs-item project-promo__thumbs-item_active project-promo__thumbs-item_mr"
                  ></div>
                  <div
                    class="project-promo__thumbs-item project-promo__thumbs-item_mr"
                  ></div>
                  <div
                    class="project-promo__thumbs-item project-promo__thumbs-item_mr"
                  ></div>
                  <div
                    class="project-promo__thumbs-item project-promo__thumbs-item_mr"
                  ></div>
                  <div
                    class="project-promo__thumbs-item project-promo__thumbs-item_mr"
                  ></div>
                </div>
              </div>
            </template>
          </client-only>
        </div>

        <div class="project-promo__box project-promo__box_content">
          <div v-html="data.title" class="project-promo__title" />
          <div class="project-promo__specifications">
            <div v-if="data.area" class="project-promo__specifications-row">
              <div class="project-promo__specifications-text">
                Общая площадь
              </div>
              <div
                class="project-promo__specifications-text project-promo__specifications-text_value"
              >
                {{ data.area }} м<sup>2</sup>
              </div>
            </div>
            <div v-if="data.size" class="project-promo__specifications-row">
              <div class="project-promo__specifications-text">Габариты</div>
              <div
                class="project-promo__specifications-text project-promo__specifications-text_value"
              >
                {{ data.size }}
              </div>
            </div>
            <div
              v-if="data.numberOfStoreys"
              class="project-promo__specifications-row"
            >
              <div class="project-promo__specifications-text">Этажность</div>
              <div
                class="project-promo__specifications-text project-promo__specifications-text_value"
              >
                {{ data.numberOfStoreys }}
              </div>
            </div>
          </div>
          <p v-html="productDesc" class="project-promo__text"></p>

          <div class="project-promo__footer">
            <Button
              radius
              color="white"
              background="green"
              @click.native="$modal.show('modal-order')"
              class="project-promo__button"
              >Отправить заявку</Button
            >
            <div class="project-promo__price">
              от {{ priceFormatting(data.price) }} ₽
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    data: Object
  },
  components: {
    Swiper,
    SwiperSlide,
    Button: () => import('@/components/button/button')
  },
  data: () => ({
    indexActiveSlide: 0
  }),
  computed: {
    //   добавиляет переносы из текста
    productDesc () {
      const data = this.data.description
      if (data && data.includes('\n')) {
        return data.replaceAll('\n', '<br>')
      } else {
        return data
      }
    },
    optionsSlider () {
      return {
        wrapperClass: 'project-promo__slider-wrapper',
        navigation: {
          nextEl: '.project-promo__navigation_next',
          prevEl: '.project-promo__navigation_prev',
          disabledClass: 'project-promo__navigation_disabled'
        }
      }
    },
    optionsThumbs () {
      return {
        wrapperClass: 'project-promo__thumbs-wrapper',
        spaceBetween: 10,
        slidesPerView: 5,
        slideToClickedSlide: true,
        breakpoints: {
          768: {
            spaceBetween: 14
          }
        }
      }
    }
  },
  methods: {
    clickThumb (index) {
      this.$refs.sliderImages.$swiper.slideTo(index)
    },
    slideChangeSliderImages () {
      this.indexActiveSlide = this.$refs.sliderImages.$swiper.activeIndex
      this.$refs.sliderThumbs.$swiper.slideTo(this.indexActiveSlide)
    }
  }
}
</script>

<style src="./project-promo.less" lang="less" />
