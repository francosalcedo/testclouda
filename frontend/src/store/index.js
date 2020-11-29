import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';

const state = {
  users: [],
  userTemp: {},
};

const getters = {
  allUsers: (state) => {
    return state.users
  },

  currentUser: (state) => {
    return state.userTemp
  }
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  removeUser: (state, id) => state.users = state.users.filter((user) => user.id !== id),
  newUser: (state, user) => state.users.unshift(user),
  getUser: (state, user) => state.userTemp = user,
  updUser: (state, updatedUser) => {
    const index = state.users.findIndex(t => t.id === updatedUser.id);

    if(index !== -1) {
      state.users.splice(index, 1, updatedUser);
    }
  }
};

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
  }
})
