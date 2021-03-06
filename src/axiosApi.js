import axios from "axios";
import config from "./config";

const axiosApi = axios.create({
  baseURL: config.API_URL,
});

export default axiosApi;
