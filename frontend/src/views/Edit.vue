<template>
  <div class="section-form">
    <h1 class="section-form__title">Editar: {{ currentUser.firstname }} {{ currentUser.lastname }}</h1>

    <form class="form" @submit="onSubmit">
      <div class="form__elem">
        <label for="formFirstName">Nombre: </label>
        <input id="formFirstName" type="text" v-model="currentUser.firstname" required>
      </div>
      <div class="form__elem">
        <label for="formFirstLastName">Apellido: </label>
        <input id="formFirstLastName" type="text" v-model="currentUser.lastname" required>
      </div>
      <div class="form__elem">
        <label for="formFirstEmail">Correo: </label>
        <input id="formFirstEmail" type="email" v-model="currentUser.email" required>
      </div>
      <div class="form__elem">
        <label for="formFirstBirthDate">Fecha de cumpleaños: </label>
        <input id="formFirstBirthDate" type="date" v-model="currentUser.birthDate" required>
      </div>

      <div class="form__elem">
        <label for="formFirstStreet">Dirección: </label>
        <input id="formFirstStreet" type="text" v-model="currentUser.address.street" required>
      </div>
      <div class="form__elem">
        <label for="formFirstCity">Ciudad: </label>
        <input id="formFirstCity" type="text" v-model="currentUser.address.city" required>
      </div>
      <div class="form__elem">
        <label for="formFirstCountry">País: </label>
        <select v-model="currentUser.address.country" id="formFirstCountry" required>
          <option value="ES">ES</option>
          <option value="UK">UK</option>
          <option value="DE">DE</option>
          <option value="US">US</option>
        </select>
      </div>
      <div class="form__elem">
        <label for="formFirstCodePostal">Codigo Postal: </label>
        <input id="formFirstCodePostal" type="text" v-model="currentUser.address.postalcode" required>
      </div>

      <div class="form__elem">
        <button class="btn" @click="onSubmit">Guardar</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Edit',
  methods : {
    ...mapActions([
      'fetchUser',
      'updateUser',
    ]),
    onSubmit(event) {
      event.preventDefault();
      this.updateUser(this.currentUser);
      this.$router.push('/');
    }
  },
  computed: mapGetters(['currentUser']),
  created() {
    this.fetchUser(this.$route.params.id);
  },

};
</script>