import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { USERS } from './endpoints';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  actions: {
    getUsers({ commit }) {
      const users = fetch(USERS);
      users
        .then((res) => res.json())
        .then((res) => {
          console.log('THEN/CATCH GET users', res);
          commit('getUser', res);
        });
    },
    async deleteUser({ commit }, id) {
      try {
        let { data: user } = await axios.delete(USERS + id, {
          'content-type': 'application/json',
        });
        console.log('AXIOS DELETE user', user);
        commit('deleteUser', { id, user });
      } catch (error) {
        console.error('Error in deleteUser()', error.message);
      }
    },
    async postUser({ commit }, newUser) {
      try {
        let { data: user } = await axios.post(USERS, newUser, {
          'content-type': 'application/json',
        });
        commit('postUser', user);
        console.log('AXIOS POST user', user);
      } catch (error) {
        console.error('Error en postUser()', error.message);
      }
    },
  },
  mutations: {
    getUser(state, res) {
      state.users = res;
    },
    deleteUser(state, payload) {
      let index = state.users.findIndex((user) => user.id == payload.id);
      if (index == -1) throw new Error('Usuario no encontrado.');
      state.users.splice(index, 1);
    },
    postUser(state, newUser) {
      console.log('desde postUser', newUser);
      state.users.push(newUser);
    },
  },
});
