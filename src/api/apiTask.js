import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 100000,
    headers: {
        'Accept': 'application/json'
    }
});

instance.interceptors.request.use(function (config) {
    let userData = JSON.parse(localStorage.getItem('user-data'));

    if (!(userData && userData['token'])) {
        userData = {
            token: null
        }
    }

    config.headers.Authorization = 'Bearer ' + userData.token;

    return config;
}, err => new Promise.reject(err));

instance.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})

export default instance;