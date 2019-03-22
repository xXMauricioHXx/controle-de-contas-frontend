import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import Vuelidate from "vuelidate";
import VueToasted from "vue-toasted";
import money from "v-money";

import router from "./router";
import "./pipes";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(VueToasted, {
  iconPack: "material"
});
Vue.use(money, {
  precision: 4
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// //SELECT ELEMENT
// <div class="form-group">
//   <div class="row">
//     <div class="col-xs-12 col-sm-12 col-md-6">
//       <label for="descricao">
//         Descrição:
//         <span class="required-input">*</span>
//       </label>
//       <textarea
//         id="descricao"
//         rows="5"
//         cols="10"
//         class="form-control ctm-intput"
//       ></textarea>
//       <span
//         class="error-message"
//         v-if="showError"
//       >Descrição inválida!</span>
//     </div>
//   </div>
// </div>
