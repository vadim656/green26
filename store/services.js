export const state = () => ({
    all: [],
});

export const actions = {
    async getCategories({ commit }) {
        try {
            const response = await this.$api.services.getCategories();
            return response.data.items;
        } catch(e) {
            console.error(e);
        }
    },
    async getCategory({ commit }, slug) {
        try {
            const response = await this.$api.services.getCategory(slug);
            return response.data.data;
        } catch (e) {
            console.error(e);
        }
    },
    async getCategoryProducts({ commit }, slug) {
        try {
            const response = await this.$api.services.getCategoryProducts(slug);
            return response.data.items;
        } catch (e) {
            console.error(e);
        }
    },
};

export const mutations = {

};

export const getters = {

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}