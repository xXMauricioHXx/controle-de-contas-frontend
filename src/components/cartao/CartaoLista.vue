<template>
  <PanelNewButton title="Cartões" uri="/conta-cadastrar" :showMes="false"></PanelNewButton>
</template>

<script>
import PanelNewButton from "@/shared/PanelNewButton.vue";

export default {
  name: "CartaoLista",
  components: {
    PanelNewButton
  },

  computed: {}
};
</script>
