import Vue from "vue";
import Router from "vue-router";

import Contas from "./views/Contas.vue";
import Cartao from "./views/Cartao.vue";
import CadastroConta from "./views/CadastroConta.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "conta-lista",
      component: Contas
    },
    {
      path: "/cartoes",
      name: "cartao-lista",
      component: Cartao
    },
    {
      path: "/conta-cadastrar",
      name: "cadastrar-conta",
      component: CadastroConta
    },
    {
      path: "/conta-editar/:id",
      name: "conta-editar",
      component: CadastroConta
    }
  ]
});
