export const state = () => ({
    all: [],
});

export const actions = {
    async getPopularProjects({ commit }) {
        try {
            const response = await this.$api.projects.getPopularProjects();
            return response.data.items;
        } catch (e) {
            console.error(e);
        }
    },
    async getProjectDetail({ commit }, slug) {
        try {
            const response = await this.$api.projects.getProjectDetail(slug);
            return response.data.data;
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