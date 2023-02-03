<template>
  <div class="project-card">
    <div class="project-card__holder">
      <div @click="toProduct(data.slug)" class="project-card__image">
        <img
          :data-src="data.images[0]"
          :alt="data.title"
          class="project-card__image-img"
          v-lazy-load
        />
      </div>
      <div class="project-card__content" @click="toProduct(data.slug)">
        <div class="project-card__box">
          <div @click="toProduct(data.slug)" class="project-card__title">
            {{ data.title }}
          </div>

          <div class="project-card__characteristics">
            <div v-if="data.area" class="project-card__characteristics-item">
              <div class="project-card__characteristics-item-text">
                Общая площадь:
              </div>
              <div
                class="project-card__characteristics-item-text project-card__characteristics-item-text_value"
              >
                {{ data.area }} м<sup>2</sup>
              </div>
            </div>
            <div v-if="data.size" class="project-card__characteristics-item">
              <div class="project-card__characteristics-item-text">
                Габариты:
              </div>
              <div
                class="project-card__characteristics-item-text project-card__characteristics-item-text_value"
              >
                {{ data.size }}
              </div>
            </div>
            <div
              v-if="data.numberOfStoreys"
              class="project-card__characteristics-item"
            >
              <div class="project-card__characteristics-item-text">
                Этажность:
              </div>
              <div
                class="project-card__characteristics-item-text project-card__characteristics-item-text_value"
              >
                {{ data.numberOfStoreys }}
              </div>
            </div>
          </div>
        </div>
        <div class="project-card__footer">
          <div class="project-card__price">
            от {{ priceFormatting(data.price) }} ₽
          </div>
        </div>
        <!-- <div class="project-card__info">
          <div class="project-card__info-holder">
            <div v-if="data.area" class="project-card__info-row">
              <div class="project-card__info-text">Общая площадь</div>
              <div class="project-card__info-line"></div>
              <div
                class="project-card__info-text project-card__info-text_value"
              >
                {{ data.area }} м<sup>2</sup>
              </div>
            </div>
            <div v-if="data.size" class="project-card__info-row">
              <div class="project-card__info-text">Габариты</div>
              <div class="project-card__info-line"></div>
              <div
                class="project-card__info-text project-card__info-text_value"
              >
                {{ data.size }}
              </div>
            </div>
            <div v-if="data.numberOfStoreys" class="project-card__info-row">
              <div class="project-card__info-text">Этажность</div>
              <div class="project-card__info-line"></div>
              <div
                class="project-card__info-text project-card__info-text_value"
              >
                {{ data.numberOfStoreys }}
              </div>
            </div>
            <div
              v-if="data.description"
              v-html="data.description"
              class="project-card__info-text project-card__info-text_small"
            />
          </div>
          <Button
            :to="{ name: 'projects-project', params: { project: data.slug } }"
            border
            radius
            color="green"
            class="project-card__button"
            >Подробнее →</Button
          >
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  components: {
    Button: () => import('@/components/button/button')
  },
  methods: {
    toProduct (url) {
      console.log('clicl')
      this.$router.push({ path: '/projects/' + url })
    }
  }
}
</script>

<style src="./project-card.less" lang="less" />
