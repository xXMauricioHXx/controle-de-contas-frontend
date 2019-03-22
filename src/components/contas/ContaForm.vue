<template>
  <PanelDefault title="Cadastro de Contas">
    <form class="ctm-form" v-on:submit.prevent="submit">
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-10 col-lg-6">
            <label for="descricao">
              Descrição:
              <span class="required-input">*</span>
            </label>
            <input
              type="text"
              name="descricao"
              class="form-control ctm-intput"
              id="descricao"
              placeholder="Informe uma descrição"
              v-model="form.descricao"
              :class="[ !$v.form.descricao.required && formSubmited ? 'invalid-input-error': '']"
            >
            <span
              class="error-message"
              v-if="!$v.form.descricao.required && formSubmited"
            >O campo descrição é obrigátorio!</span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
            <label for="valor">
              Valor:
              <span class="required-input">*</span>
            </label>
            <money
              v-model="form.valor"
              v-bind="money"
              class="form-control ctm-intput"
              id="valor"
              :class="[ form.valor <= 0 && formSubmited ? 'invalid-input-error': '']"
            ></money>
            <span
              class="error-message"
              v-if="form.valor <= 0 && formSubmited"
            >O campo valor é obrigátorio!</span>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
            <label for="parcelas">Parcelas:</label>
            <input
              type="number"
              name="parcelas"
              class="form-control ctm-intput"
              id="parcelas"
              placeholder="Informe o número de parcelas"
              v-model="form.parcelas"
            >
            <span class="error-message" v-if="showError">Nome inválido!</span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-10 col-lg-6">
            <div class="ctm-btn-group">
              <label for="cartoes">Cartão:</label>
              <button
                type="button"
                class="btn dropdown-toggle form-control ctm-select"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="cartoes"
              >
                <span
                  v-bind:class="{'ctm-placeholder': !(!!cartaoSelecionado)}"
                >{{ this.cartaoSelecionado || "Selecione um cartão..." }}</span>
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li
                  class="ctm-select-item"
                  v-for="cartao in cartoes"
                  :key="cartao._id"
                  v-on:click="selectCard(cartao)"
                >{{ cartao.nome }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
            <label for="dataDaCompra">
              Data da Compra:
              <span class="required-input">*</span>
            </label>
            <input
              type="date"
              name="dataDaCompra"
              id="dataDaCompra"
              class="form-control ctm-intput"
              v-model="form.dataDaCompra"
              :class="[ !$v.form.dataDaCompra.required && formSubmited ? 'invalid-input-error': '']"
            >
            <span
              class="error-message"
              v-if="!$v.form.dataDaCompra.required && formSubmited"
            >Data da compra é obrigátorio!</span>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
            <label for="dataDoCadastro">
              Data do Cadastro:
              <span class="required-input">*</span>
            </label>
            <input
              type="date"
              name="dataDoCadastro"
              id="dataDoCadastro"
              class="form-control ctm-intput"
              v-model="form.dataDoCadastro"
              :class="[ !$v.form.dataDoCadastro.required && formSubmited ? 'invalid-input-error': '']"
            >
            <span
              class="error-message"
              v-if="!$v.form.dataDoCadastro.required && formSubmited"
            >Data do cadastro é obrigátorio!</span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-10 col-lg-6">
            <label>
              Tipo de compra:
              <span class="required-input">*</span>
            </label>
            <br>
            <div class="ctm-input-raidio">
              <span>Cartão</span>
              <input
                type="radio"
                value="Cartão"
                id="tipoCompra"
                name="tipoCompra"
                v-model="form.tipoCompra"
              >
            </div>
            <div class="ctm-input-raidio">
              <span>Á Vista</span>
              <input
                type="radio"
                value="A vista"
                id="tipoCompra"
                name="tipoCompra"
                v-model="form.tipoCompra"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
            <div class="ctm-btn-group">
              <label for="usuario">
                Usuário:
                <span class="required-input">*</span>
              </label>
              <button
                type="button"
                class="btn dropdown-toggle form-control ctm-select"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="usuario"
                :class="[ !$v.form.usuario.required && formSubmited ? 'invalid-input-error': '']"
              >
                <span
                  v-bind:class="{'ctm-placeholder': !(!!usuarioSelecionado)}"
                >{{ usuarioSelecionado || "Selecione um usuário..." }}</span>
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li
                  class="ctm-select-item"
                  v-for="usuario in usuarios"
                  :key="usuario._id"
                  v-on:click="selectUser(usuario)"
                >{{ usuario.nome }}</li>
              </ul>
            </div>
            <span
              class="error-message"
              v-if="!$v.form.usuario.required && formSubmited"
            >O campo usuário é obrigátorio!</span>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
            <div class="ctm-btn-group">
              <label for="categoria">
                Categoria:
                <span class="required-input">*</span>
              </label>
              <button
                type="button"
                class="btn dropdown-toggle form-control ctm-select"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="categoria"
                :class="[ !$v.form.categoria.required && formSubmited ? 'invalid-input-error': '']"
              >
                <span
                  v-bind:class="{'ctm-placeholder': !(!!categoriaSelecionada)}"
                >{{ categoriaSelecionada || "Selecione uma categoria..." }}</span>
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li
                  class="ctm-select-item"
                  v-for="categoria in categorias"
                  :key="categoria.index"
                  v-on:click="selectCategoria(categoria)"
                >{{ categoria }}</li>
              </ul>
            </div>
            <span
              class="error-message"
              v-if="!$v.form.categoria.required && formSubmited"
            >O campo categoria é obrigátorio!</span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="form-footer">
          <div class="row">
            <div class="hidden-xs hidden-sm col-md-4 col-lg-6"></div>
            <div class="col-xs-12 col-md-3">
              <button class="ctm-btn success-btn">Enviar</button>
            </div>
            <div class="col-xs-12 col-md-3">
              <router-link class="ctm-btn danger-btn" to="/" tag="button">Cancelar</router-link>
            </div>
          </div>
        </div>
      </div>
    </form>
  </PanelDefault>
</template>


<script>
import moment from "moment";
import { required } from "vuelidate/lib/validators";
import PanelDefault from "@/shared/PanelDefault.vue";
import CartaoService from "@/services/CartaoService.js";
import UsuarioService from "@/services/UsuarioService.js";
import ContasService from "@/services/ContasService";

export default {
  name: "CartaoForm",
  components: {
    PanelDefault
  },
  data: () => {
    return {
      showError: false,
      form: {
        descricao: "",
        valor: 0,
        parcelas: null,
        dataDaCompra: moment().format("YYYY-MM-DD"),
        dataDoCadastro: moment().format("YYYY-MM-DD"),
        tipoCompra: "Cartão",
        cartao: {},
        usuario: {},
        categoria: ""
      },
      cartaoSelecionado: "",
      usuarioSelecionado: "",
      categoriaSelecionada: "",
      cartoes: [],
      usuarios: [],
      categorias: ["Comida", "Roupa", "Viagem", "Eletrônicos"],
      formSubmited: false,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: " ",
        precision: 2,
        masked: false
      }
    };
  },
  async created() {
    this.cartoes = await CartaoService.getAll();
    this.usuarios = await UsuarioService.getAll();
    const id = this.$route.params.id;
    if (id) {
      await ContasService.findById(id)
        .then(conta => {
          this.setConta(conta);
        })
        .catch(err => {
          throw new Error(err);
        });
    }
  },
  methods: {
    selectCard(cartao) {
      this.form.cartao = cartao;
      this.cartaoSelecionado = cartao.nome;
    },
    selectUser(usuario) {
      this.form.usuario = usuario;
      this.usuarioSelecionado = usuario.nome;
    },
    selectCategoria(categoria) {
      this.form.categoria = categoria;
      this.categoriaSelecionada = categoria;
    },
    submit() {
      this.formSubmited = true;
      this.form.mes = moment(this.form.dataDaCompra).month() + 1;
      this.form.parcelas = parseInt(this.form.parcelas);
      if (!this.$v.$invalid) {
        if (this.$route.params.id) {
          const id = this.$route.params.id;
          this.update(id);
        } else {
          this.save();
        }
      }
    },
    save() {
      ContasService.save(this.form)
        .then(() => {
          this.formReset();
          this.$toasted.success(
            "<i class='far fa-check-circle'></i> Conta cadastrada com sucesso",
            {
              theme: "toasted-primary",
              duration: 5000
            }
          );
          this.$router.push("/");
        })
        .catch(err => {
          throw new Error(err);
        });
    },
    update(id) {
      ContasService.update(this.form, id)
        .then(() => {
          this.formReset();
          this.$toasted.success(
            "<i class='far fa-check-circle'></i> Conta editada com sucesso",
            {
              theme: "toasted-primary",
              duration: 5000
            }
          );
          this.$router.push("/");
        })
        .catch(err => {
          throw new Error(err);
        });
    },
    setConta(conta) {
      this.form.descricao = conta.descricao;
      this.form.valor = conta.valor;
      this.form.parcelas = conta.parcela || null;
      this.form.cartao = conta.cartao;
      this.form.dataDaCompra = moment(conta.dataDaCompra).format("YYYY-MM-DD");
      this.form.dataDoCadastro = moment(conta.dataDoCadastro).format(
        "YYYY-MM-DD"
      );
      this.form.tipoCompra = conta.tipoCompra;
      this.form.usuario = conta.usuario;
      this.form.categoria = conta.categoria;
      this.usuarioSelecionado = conta.usuario.nome;
      this.categoriaSelecionada = conta.categoria;
      this.cartaoSelecionado = conta.cartao ? conta.cartao.nome : null;
    },
    formReset() {
      Object.keys(this.form).forEach(attr => {
        this.form[attr] = "";
      });
      this.cartaoSelecionado = "";
      this.usuarioSelecionado = "";
      this.categoriaSelecionada = "";
      this.form.dataDaCompra = moment().format("YYYY-MM-DD");
      this.form.dataDoCadastro = moment().format("YYYY-MM-DD");
      this.formSubmited = false;
    }
  },
  validations: {
    form: {
      descricao: {
        required
      },
      valor: {
        required
      },
      dataDaCompra: {
        required
      },
      dataDoCadastro: {
        required
      },
      tipoCompra: {
        required
      },
      usuario: {
        required
      },
      categoria: {
        required
      }
    }
  }
};
</script>
