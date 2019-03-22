import axios from "axios";
const uri = "http://localhost:3000/v1/contas";
export default {
  findAll() {
    return axios
      .get(uri)
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
  },
  findById(id) {
    return axios
      .get(`${uri}/${id}`)
      .then(response => response.data)
      .catch(err => {
        throw new Error(err);
      });
  },
  save(conta) {
    return axios
      .post(uri, conta)
      .then(response => response.data)
      .catch(err => {
        throw new Error(err);
      });
  },
  delete(id) {
    return axios
      .delete(`${uri}/${id}`)
      .then(response => response.data)
      .catch(err => {
        throw new Error(err);
      });
  },
  update(conta, id) {
    return axios
      .put(`${uri}/${id}`, conta)
      .then(response => response.data)
      .catch(err => {
        throw new Error(err);
      });
  },
  getMeses() {
    return [
      {
        id: 1,
        nome: "Janeiro"
      },
      {
        id: 2,
        nome: "Fevereiro"
      },
      {
        id: 3,
        nome: "Março"
      },
      {
        id: 4,
        nome: "Abril"
      },
      {
        id: 5,
        nome: "Maio"
      },
      {
        id: 6,
        nome: "Junho"
      },
      {
        id: 7,
        nome: "Julho"
      },
      {
        id: 8,
        nome: "Agosto"
      },
      {
        id: 9,
        nome: "Setembro"
      },
      {
        id: 10,
        nome: "Outubro"
      },
      {
        id: 11,
        nome: "Novembro"
      },
      {
        id: 12,
        nome: "Dezembro"
      }
    ];
  }
};
