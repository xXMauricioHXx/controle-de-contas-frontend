import moment from "moment";
import Vue from "vue";

Vue.filter("dateFormat", value => {
  return moment(value).format("DD/MM/YYYY");
});

Vue.filter("currency", value => {
  return `R$ ${value.toFixed(2)}`;
});

export default Vue;
