import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VModal from 'vue-js-modal';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import JsonCSV from 'vue-json-csv';
import excel from 'vue-excel-export';
import VueGoogleCharts from 'vue-google-charts';


Vue.use(excel);

Vue.use(VueGoogleCharts);
Vue.use(Chartkick);
Vue.use(Chartkick.use(Chart));
Vue.use(VueAxios, axios);
Vue.use(VModal);
Vue.component('downloadCsv', JsonCSV);

axios.defaults.baseURL= "http://ec2-3-128-34-113.us-east-2.compute.amazonaws.com:3000/api";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
