export default (axios) => ({
    getCategories() {
        return axios.get('/api/categories');
    },
    getCategoryProducts(slug) {
        return axios.get(`/api/categories/${slug}/products`);
    },
    getCategory(slug) {
        return axios.get(`/api/categories/${slug}`);
    },
});