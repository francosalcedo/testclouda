<template>
  <div class="section-list">
    <table class="section-list__table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Cumpleaños</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
            v-for="user in allUsers"
            v-bind:key="user.key"
        >
          <td>{{ user.firstname }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.firstname }}</td>
          <td>
            x x
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
  components: {
  }
}
</script>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Users",
  methods:{
    ...mapActions(["fetchUsers"])
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  }
};
</script>