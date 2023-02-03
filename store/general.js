export const state = () => ({
    settings: null,
});

export const actions = {
    async getSettings({ commit }) {
        try {
            const response = await this.$api.general.getSettings();
            commit('setSettings', response.data.data);
        } catch (e) {
            console.error(e);
        }
    },
    async sendRequestEmail({ commit }, data) {
        try {
            return await this.$api.general.sendRequestEmail(data);
        } catch (e) {
            console.error(e);
        }
    },
};

export const mutations = {
    setSettings(state, settings) {
        state.settings = settings;
    },
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