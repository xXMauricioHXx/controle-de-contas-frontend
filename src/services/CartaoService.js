import axios from "axios";

export default {
  getAll() {
    return axios
      .get("http://localhost:3000/v1/cartao")
      .then(response => {
        const contas = response.data;
        return contas.map(conta => {
          conta.open = false;
          return conta;
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
};
