<template>
  <div class="page main-page">
    <MainPromo class="main-page__promo" />
    <!-- <MainServices
            v-if="categories.length !== 0"
            :items="categories"
            class="main-page__services"
        /> -->
    <MainServices
      v-if="categoryInfo && categoryInfo.children"
      :items="categoryInfo.children"
      small
      class="services-category-page__services"
    />

    <MainProjects
    
      v-if="popularProjects.length !== 0"
      mobile-scroll
      title="Популярные проекты"
      :items="popularProjects"
      class="main-page__projects"
    />

    <FeedbackForm class="main-page__feedback" />
  </div>
</template>

<script>
export default {
  async fetch () {
    await Promise.all([
      this.$store.dispatch('services/getCategories'),
      this.$store.dispatch('projects/getPopularProjects'),
      this.$store.dispatch('services/getCategory', 'karkasnye-doma')
    ]).then(([categories, projects, catPromo]) => {
      this.categories = categories
      this.popularProjects = projects
      this.categoryInfo = catPromo
    })
  },
  data: () => ({
    categories: [],
    popularProjects: [],
    categoryInfo: []
  }),

  components: {
    MainPromo: () => import('@/components/main-promo/main-promo'),
    MainServices: () => import('@/components/main-services/main-services'),
    MainProjects: () => import('@/components/main-projects/main-projects'),
    FeedbackForm: () => import('@/components/feedback-form/feedback-form')
  },
  head () {
    return {
      title:
        'Green Group - Каркасное строительство и благоустройство территорий'
    }
  }
}
</script>

<style lang="less">
.services-category-page__services {
  margin-top: 40px;
}
.services-category-page {
  &__promo {
    margin-bottom: 70px;

    @media @mobile {
      margin-bottom: 40px;
    }
  }

  &__services,
  &__projects {
    margin-bottom: 110px;

    @media @mobile {
      margin-bottom: 40px;
    }
  }

  &__feedback {
  }
}
.main-page {
  &__promo {
    @media @tablet {
      margin-bottom: 40px;
    }

    & + .main-page__feedback {
      margin-top: 110px;

      @media @tablet {
        margin-top: 40px;
      }
    }

    & .main-page__projects {
      margin-top: 70px;

      @media @tablet {
        margin-top: 40px;
      }
    }
  }

  &__services {
    margin-top: -70px;
    margin-bottom: 70px;

    @media @tablet {
      margin-top: 0;
      margin-bottom: 40px;
    }
  }

  &__projects {
    margin-bottom: 110px;

    @media @tablet {
      margin-bottom: 40px;
    }
  }

  &__feedback {
  }
}
</style>
