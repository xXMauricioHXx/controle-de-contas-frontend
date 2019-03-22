<template>
  <div class="panel-default-button">
    <div class="row panel-head">
      <div class="col-xs-6">
        <h1 class="panel-title">{{title}}</h1>
      </div>
      <div class="col-xs-6">
        <div v-if="total">
          <span class="panel-info">Total: {{total | currency}}</span>
        </div>
      </div>
    </div>
    <div class="row panel-actions">
      <div class="col-xs-12 col-sm-8 ctm-form-select">
        <form class="ctm-form ctm-form-panel" v-if="showMes">
          <div class="col-xs-12 col-sm-8 col-md-4">
            <div class="ctm-btn-group">
              <button
                type="button"
                class="btn dropdown-toggle form-control ctm-select"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="categoria"
              >
                <span
                  v-bind:class="{'ctm-placeholder': !(!!mesSelecionado)}"
                >{{ mesSelecionado || "Selecione um mês..." }}</span>
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li
                  class="ctm-select-item"
                  v-for="mes in meses"
                  :key="mes.index"
                  v-on:click="setMes(mes)"
                >{{ mes.nome }}</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      <div class="col-xs-12 col-sm-4 ctm-button-new">
        <router-link class="ctm-btn success-btn" :to="uri" tag="button">Novo</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ContasService from "@/services/ContasService.js";

export default {
  name: "PanelNewButton",
  props: ["title", "total", "uri", "showMes"],
  data: () => {
    return {
      meses: ContasService.getMeses(),
      mesSelecionado: "Janeiro"
    };
  },
  methods: {
    setMes(mes) {
      this.mesSelecionado = mes.nome;
      this.$emit("mes-selecionado", mes.id);
    },
    setCurrentMes() {
      const numeroMes = moment().month() + 1;
      const currentMes = this.meses.find(mes => mes.id == numeroMes);
      this.setMes(currentMes);
    }
  },
  mounted() {
    this.setCurrentMes();
  }
};
</script>

<style scoped>
.panel-default-button {
  border: 1px solid #ededed;
  background-color: #fff;
  min-height: 50rem;
  margin: 5rem 2rem;
  border-radius: 10px;
  -webkit-box-shadow: 7px 3px 52px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 3px 52px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 3px 52px -16px rgba(0, 0, 0, 0.75);
}
.panel-default-button .panel-head {
  margin: 0px;
  display: block;
  width: 100%;
}
.panel-default-button .panel-head .panel-info {
  font-size: 1.4rem;
  display: block;
  line-height: 1;
  font-weight: bold;
  padding: 3rem;
  color: #639;
  text-transform: uppercase;
  text-align: right;
}
.panel-default-button .panel-actions .ctm-button-new {
  padding: 0px 3rem 0px 0px;
}
.panel-default-button .panel-actions button {
  float: right !important;
}
.panel-default-button .ctm-form-panel {
  padding: 0px 0px 0px 3rem;
}
.panel-default-button .panel-title {
  font-size: 3rem;
  line-height: 1;
  padding: 3rem;
  margin: 0;
  color: #332e38;
  letter-spacing: 0.3px;
}
.panel-default-button .content {
  display: contents;
}

.ctm-item-left {
  text-align: left;
  padding-right: 0px;
}
.ctm-item-right {
  text-align: right;
  padding-right: 0px;
}
.ctm-item-right span {
  display: block;
}

@media (max-width: 767px) {
  .panel-default-button {
    box-shadow: none;
    margin: 1rem 0rem;
    width: auto;
  }
  .panel-default-button .panel-title {
    padding: 1rem 0rem;
  }
  .panel-default-button .panel-head .panel-info {
    padding: 1.8rem 0px 1rem 0px;
    text-align: left;
  }

  .ctm-form-select {
    padding: 0px;
  }
  .ctm-button-new button {
    width: 100%;
  }
  .panel-default-button .panel-actions .ctm-button-new {
    padding: 0px 1.5rem 9px 3.5rem;
    width: 100%;
  }
  .panel-default-button .ctm-form-panel {
    padding: 1rem 1rem 1rem 1rem;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .panel-default-button .panel-title {
    padding: 2rem 1rem;
  }
  .panel-default-button .panel-actions .ctm-button-new {
    padding: 0px 2rem 0px 0px;
  }
  .panel-default-button .ctm-form-panel {
    padding: 0.5rem 0px 0px 1rem;
  }
}
</style>
