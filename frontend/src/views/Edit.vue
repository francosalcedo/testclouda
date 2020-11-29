<template>
  <div class="section-form">
    <h1 class="section-form__title">Editar: {{ currentUser.firstname }} {{ currentUser.lastname }}</h1>

    <form class="form" @submit.prevent="validateBeforeSubmit">
      <div class="form__elem">
        <label for="formFirstName">Nombre: </label>
        <input name="formFirstName" id="formFirstName" data-vv-as="Nombre" type="text" v-model="currentUser.firstname" v-validate="'required'">
        <span>{{ errors.first('formFirstName') }}</span>
      </div>
      <div class="form__elem">
        <label for="formFirstLastName">Apellido: </label>
        <input name="formFirstLastName" id="formFirstLastName" data-vv-as="Apellido" type="text" v-model="currentUser.lastname" v-validate="'required'">
        <span>{{ errors.first('formFirstLastName') }}</span>
      </div>
      <div class="form__elem">
        <label for="formFirstEmail">Correo: </label>
        <input name="formFirstEmail" id="formFirstEmail" data-vv-as="Correo" type="email" v-model="currentUser.email" v-validate="'required|email'">
        <span>{{ errors.first('formFirstEmail') }}</span>
      </div>
      <div class="form__elem">
        <label for="formFirstBirthDate">Fecha de cumpleaños: </label>
        <input name="formFirstBirthDate" id="formFirstBirthDate" data-vv-as="Fecha de cumpleaños" type="date" v-model="currentUser.birthDate" v-validate="'required'">
        <span>{{ errors.first('formFirstBirthDate') }}</span>
      </div>
      <div class="form__elem">
        <label for="formFirstStreet">Dirección: </label>
        <input name="formFirstStreet" id="formFirstStreet" data-vv-as="Dirección" type="text" v-model="currentUser.address.street" v-validate="'required'">
        <span>{{ errors.first('formFirstStreet') }}</span>
      </div>
      <div class="form__elem">
        <label for="formFirstCity">Ciudad: </label>
        <input name="formFirstCity" id="formFirstCity" data-vv-as="Ciudad" type="text" v-model="currentUser.address.city" v-validate="'required'">
        <span>{{ errors.first('formFirstCity') }}</span>
      </div>
      <div class="form__elem">
        <label for="formFirstCountry">País: </label>
        <select v-model="currentUser.address.country" name="formFirstCountry" id="formFirstCountry" data-vv-as="País" v-validate="'required'">
          <option value="ES">ES</option>
          <option value="UK">UK</option>
          <option value="DE">DE</option>
          <option value="US">US</option>
        </select>
        <span>{{ errors.first('formFirstCity') }}</span>
      </div>
      <div class="form__elem">
        <label for="formFirstCodePostal">Codigo Postal: </label>
        <input name="formFirstCodePostal" id="formFirstCodePostal" data-vv-as="Codigo postal" type="text" v-model="currentUser.address.postalcode" v-validate="'required'">
        <span>{{ errors.first('formFirstCodePostal') }}</span>
      </div>

      <div class="form__elem">
        <button class="btn" type="submit">Guardar</button>
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
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.updateUser(this.currentUser);
          this.$router.push('/');
        }
      });
    }
  },
  computed: mapGetters(['currentUser']),
  created() {
    this.fetchUser(this.$route.params.id);
  },

};
</script>