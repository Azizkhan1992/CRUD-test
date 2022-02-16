import Vue from "vue";
import axios from "axios";

const BASE_URL = 'http://localhost:8000/api/admin';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        common:{
            'X-Requested-With': 'XMLHttpRequest',
        }
}
});

const _token = localStorage.getItem('token');

if(_token){
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + _token;
}

Vue.prototype.$api = instance;

export default instance;