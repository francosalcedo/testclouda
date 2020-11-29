import axios from 'axios';

const resource_url = 'http://lumen.test/users';

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

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get(resource_url);
    commit('setUsers', response.data);
  },

  async fetchUser({ commit }, id) {
    const response = await axios.get(`${resource_url}/${id}`);
    commit('getUser', response.data);
  },

  async deleteUser({ commit }, id) {
    await axios.delete(`${resource_url}/${id}`);
    commit('removeUser', id);
  },

  async addUser({ commit }, user) {
    const response = await axios.post(`${resource_url}`, user);
    commit('newUser', response.data);
  },

  async updateUser({ commit }, user) {
    const response = await axios.put(`${resource_url}/${user.id}`, user);
    commit('updUser', response.data);
  }
}

const mutations = {
  setUsers: (state, users) => (state.users = users),
  removeUser: (state, id) => {
    state.users = state.users.filter((user) => user.id !== id)
  },
  newUser: (state, user) => state.users.unshift(user),
  getUser: (state, user) => state.userTemp = user,
  updUser: (state, updatedUser) => {
    const index = state.users.findIndex(t => t.id === updatedUser.id);

    if(index !== -1) {
      state.users.splice(index, 1, updatedUser);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};