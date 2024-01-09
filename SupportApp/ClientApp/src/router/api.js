import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://localhost:7295/",
});

export default AxiosInstance;
