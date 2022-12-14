import axios from "axios";

const instance = axios.create({
  baseURL: "https://online-mk-default-rtdb.europe-west1.firebasedatabase.app/",
  timeout: 5000,
});

export default instance;
