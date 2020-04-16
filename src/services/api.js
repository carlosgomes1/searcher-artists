import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.vagalume.com.br',
});

export default api;
