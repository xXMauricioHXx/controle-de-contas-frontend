<template>
  <PanelNewButton title="Contas" :total="getTotal" uri="/conta-cadastrar" v-on:mes-selecionado="filterConta" :showMes="true">
    <div class="row">
      <div class="col-xs-12">
        <div class="table-custom">
          <div class="row table-head">
            <div class="col-xs-5 col-sm-4 table-head-item">Descrição</div>
            <div class="col-xs-3 col-sm-4 table-head-item">Valor</div>
            <div class="col-xs-4 col-sm-4 table-head-item">Data</div>
          </div>
          <div class="row table-item" v-for="conta in contas" :key="conta._id">
            <div class="table-columns" @click="showDescription(conta._id)">
              <div class="col-xs-5 col-sm-4 table-column">{{ conta.descricao }}</div>
              <div class="col-xs-3 col-sm-4 table-column">{{ conta.valor | currency }}</div>
              <div class="col-xs-4 col-sm-4 table-column">{{ conta.dataDaCompra | dateFormat }}</div>
            </div>
            <div
              class="col-xs-12 table-description"
              :class="[ conta.open ? 'slide-down': 'slide-up']"
            >
              <div class="col-xs-12 col-sm-6">
                <ul>
                  <li>
                    <span class="description-title">Cadastrada por:</span>
                    {{ conta.usuario.nome }}
                  </li>
                  <li v-if="conta.cartao">
                    <span class="description-title">Cartão:</span>
                    {{ conta.cartao.nome }}
                  </li>
                  <li v-if="!conta.cartao">
                    <span class="description-title">Pagamento:</span>
                    À Vista
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-6">
                <ul>
                  <li>
                    <span class="description-title">Data do cadastro:</span>
                    {{ conta.dataDoCadastro | dateFormat }}
                  </li>
                  <li>
                    <span class="description-title">Data da compra:</span>
                    {{ conta.dataDaCompra | dateFormat }}
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 table-description-bottom">
                <router-link class="ctm-btn success-btn" :to="{ path: `/conta-editar/${conta._id}`}" tag="button">Editar</router-link>
                <button class="ctm-btn danger-btn" @click="deleteConta(conta._id)">Excluir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PanelNewButton>
</template>

<script>
import PanelNewButton from "@/shared/PanelNewButton.vue";
import ContasService from "@/services/ContasService.js";
import moment from "moment";

export default {
  name: "ContaLista",
  components: {
    PanelNewButton
  },
  data() {
    return {
      listaContas: [],
      contas: []
    };
  },
  computed: {
    getTotal() {
      return this.contas.reduce((acc, conta) => (acc += conta.valor), 0);
    }
  },
  async created() {
    const numeroMes = moment().month() + 1;
    this.listaContas = await ContasService.findAll();
    this.contas = this.listaContas.filter(conta => conta.mes == numeroMes);
  },
  methods: {
    showDescription(id) {
      this.contas.forEach(conta => {
        if (conta._id == id) {
          conta.open = !conta.open;
        }
      });
    },
    async deleteConta(id) {
      await ContasService.delete(id).then(response => {
        if (response.name == "AppError") {
          this.$toasted.error(
            `<i class='fas fa-exclamation-circle'></i> ${response.message}`,
            {
              theme: "toasted-primary",
              duration: 5000
            }
          );
        } else {
          this.contas = this.contas.filter(conta => conta._id != id);
        }
      });
    },
    filterConta(mes) {
      this.contas = this.listaContas.filter(conta => conta.mes == mes);
    }
  }
};
</script>
