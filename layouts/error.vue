<template>
    <div class="error">
        <div class="error__code">{{ error.statusCode }}</div>
        <div class="error__text">{{ messages.errors[error.statusCode] }}</div>
        <nuxt-link :to="{name: 'index'}">Перейти на главную</nuxt-link>
    </div>
</template>

<script>
    import messages from "@/_data_/messages";

    export default {
        props: ['error'],
        data: () => ({
            messages,
        }),
    }
</script>

<style lang="less">
    .error{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;

        &__code{
            font-weight: 700;
            font-size: 100px;
        }
    }
</style>