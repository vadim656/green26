<template>
    <div class="page about-page">
        <Promo
            title="О компании"
            text="Наша компания на&nbsp;протяжении долгих лет профессионально занимается строительством каркасных домов. Мы&nbsp;выполняем строительство полного цикла, что отличает нас от&nbsp;других компаний. -Монтаж любого типа фундаментов<br> &mdash;&nbsp;Разводка коммуникаций по&nbsp;дому<br> &mdash;&nbsp;Монтаж любого типа кровли<br> &mdash;&nbsp;Занимаемся благоустройством территории<br> &mdash;&nbsp;Подготовка проекта для вас"
            :image="require('@/assets/images/bg-about.jpg')"
            class="about-page__promo"
        />
        <About class="about-page__content" />
        <FeedbackForm class="about-page__feedback" />
    </div>
</template>

<script>
    export default {
        components: {
            Promo: () => import('@/components/promo/promo'),
            About: () => import('@/components/about/about'),
            FeedbackForm: () => import('@/components/feedback-form/feedback-form'),
        },
        head(){
            return {
                title: 'О нас',
            }
        },
    }
</script>

<style lang="less">
    .about-page {
        &__promo {
            margin-bottom: 70px;
            
            @media @mobile {
                margin-bottom: 40px;
            }
        }
        
        &__content {
            margin-bottom: 70px;
            
            @media @mobile {
                margin-bottom: 40px;
            }
        }
    }
</style>