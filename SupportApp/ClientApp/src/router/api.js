import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://localhost:7295/",
});

export const AuthenticateInstance = axios.create({
  baseURL: "http://192.168.61.49:8188/",
  //baseURL: "http://localhost:7002/",
});
