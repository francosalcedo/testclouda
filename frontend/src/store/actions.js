import axios from 'axios';

export const resource_url = '';

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

  export default actions;