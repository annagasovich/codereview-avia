import axios from 'axios';

export default () => {
    const options = {};
    options.baseURL = import.meta.env.VITE_BACKEND;
    const instance = axios.create(options);
    return instance;
};