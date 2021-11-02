import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'Akmaral',
    userInfo: {
      name: '',
      score: '',
      avatarUrl: '',
    },
    clothes: [],
    accessories: [],
  },
  mutations: {
    updateClothes(state, response) {
      state.clothes = response;
    },
    updateAccessories(state, response) {
      state.accessories = response;
    },
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    updateUserBalance(state, price) {
      state.userInfo.score -= price;
    },
  },
  actions: {
    fetchUserInfo({ commit }) {
      axios.get('templates/7ZW3y5GAuIge/data').then((response) => {
        commit('updateUserInfo', {
          name: response.data.name,
          score: response.data.score,
          avatarUrl: response.data.avatarUrl,
        });
      });
    },
    fetchShopData({ commit }) {
      Promise.all([
        axios.get('templates/-_RLsEGjof6i/data'),
        axios.get('templates/q3OPxRyEcPvP/data'),
      ]).then((response) => {
        commit('updateClothes', response[0].data);
        commit('updateAccessories', response[1].data);
      }).catch((error) => {
        console.log(error);
      });
    },
  },
});
