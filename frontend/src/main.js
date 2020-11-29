import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate';
import es from 'vee-validate/dist/locale/es';

Vue.config.productionTip = false

Validator.localize({ es: es })
Vue.use(VeeValidate, {locale: 'es'});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
