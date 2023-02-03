export default (axios) => ({
    getSettings() {
        return axios.get('/api/common/settings');
    },
    sendRequestEmail(data) {
        return axios.post('/api/common/send-request-email', data);
    },
});