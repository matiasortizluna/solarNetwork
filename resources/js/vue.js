require('./bootstrap');

window.Vue = require('vue');
var $ = require('jquery');
window.jQuery = require('jquery');
window.$ = window.jQuery;
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

Vue.use(BootstrapVue);

import Stocks from './components/Stocks/stocks';
Vue.use(VueRouter);

import Paginate from 'vuejs-paginate';

Vue.component('paginate', Paginate);
import VueToastify from 'vue-toastify'

import VueExcelXlsx from "vue-excel-xlsx";
import Vue from "vue";

Vue.use(VueExcelXlsx);


Vue.use(VueToastify, {
    position: "top-right"
});

const routes = [
    {path: '/', component: Stocks},
];

const router = new VueRouter({
    routes
});


const app = new Vue({
    el: '#app',
    data: function () {
        return {
            user: null,
        }
    },
    router,
    methods: {
        getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }
    },
    created() {
        axios.defaults.headers.common['Apitoken'] = this.getCookie('api_token');
        // axios.get("api/user/autenticado").then(response => {
        //     // this.$socket.emit('login', response.data);
        //     this.user = response.data.tipo;
        // });
    },
});


