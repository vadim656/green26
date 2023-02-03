export default (axios) => ({
    getPopularProjects() {
        return axios.get('/api/products/popular');
    },
    // getProjectsServices(slug) {
    //     return axios.get(`/api/products/${slug}`);
    // },
    getProjectDetail(slug) {
        return axios.get(`/api/products/${slug}`);
    },
});