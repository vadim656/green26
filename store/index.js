const actions = {
    async nuxtServerInit({ dispatch }){
        await dispatch('general/getSettings');
    },
};

export default {
    namespaced: true,
    actions,
}