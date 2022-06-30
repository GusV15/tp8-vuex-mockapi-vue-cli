import Vue from 'vue';
import VueRouter from 'vue-router';

import AddUsers from './components/AddUsers.vue';
import Users from './components/Users.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/addusers', component: AddUsers },
    { path: '/users', props: true, name: 'users', component: Users },
    { path: '/', redirect: '/addusers' },
    { path: '/*', redirect: '/addusers' },
  ],
});
