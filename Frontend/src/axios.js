import axios from "axios";

const instance = axios.create({
  baseURL: "https://calm-puce-crow-cap.cyclic.app/api/v1",
  withCredentials: true,
});

export default instance;
