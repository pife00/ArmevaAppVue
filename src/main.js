import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import excel from 'vue-excel-export';


Vue.use(excel);


Vue.use(Chartkick.use(Chart));
Vue.use(VueAxios, axios);
axios.defaults.baseURL= "http://ec2-3-17-172-61.us-east-2.compute.amazonaws.com:3000/api";
//axios.defaults.baseURL ="http://localhost:3000/api";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
