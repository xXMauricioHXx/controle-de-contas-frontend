import axios from "axios";

export default {
  getAll() {
    return axios
      .get("http://localhost:3000/v1/usuarios")
      .then(response => response.data)
      .catch(err => {
        throw new Error(err);
      });
  }
};
