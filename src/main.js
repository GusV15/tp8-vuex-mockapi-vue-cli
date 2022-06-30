import Vue from 'vue';
import App from './App.vue';

import './form';
import './axios';
import './alerts';
import './globalMixins';
import { router } from '../src/router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
