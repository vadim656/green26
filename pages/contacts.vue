<template>
	<div class="page contacts-page">
		<Contacts
			class="contacts-page__contacts"
		/>
	</div>
</template>

<script>
	export default {
        components: {
            Promo: () => import('@/components/promo/promo'),
            Contacts: () => import('@/components/contacts/contacts'),
        },
        head(){
            return {
                title: 'Контакты',
            }
        },
	}
</script>

<style lang="less">
	.contacts-page {
		&__promo {
			margin-bottom: 70px;
			
			@media @mobile {
				margin-bottom: 40px;
			}
		}
	}
</style>