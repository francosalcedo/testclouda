<template>
  <div class="section-list">
    <table class="section-list__table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Cumpleaños</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="allUsers.length == 0">
          <td>
            No hay usuarios
          </td>
        </tr>
        <tr
            v-for="user in allUsers"
            v-bind:key="user.key"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.birthDate }}</td>
          <td>{{ user.address.country }}, {{ user.address.city }}, {{ user.address.street }}</td>
          <td>
            <router-link :to="{name: 'edit', params: {id: user.id}}" tag="button" class="btn btn-edit">Editar</router-link>
            <button class="btn btn-delete" @click="deleteUser(user.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'List',
}
</script>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Users',
  methods:{
    ...mapActions([
      'fetchUsers',
      'deleteUser',
    ])
  },
  computed: mapGetters(['allUsers']),
  created() {
    this.fetchUsers();
  }
};
</script>