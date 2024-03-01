import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://localhost:7295/",
  //baseURL: "http://45.114.84.19:7500/",
});

export const AuthenticateInstance = axios.create({
  //baseURL: "http://192.168.61.49:8188/",
  baseURL: "http://45.114.84.19:8033/",
  //baseURL: "https://localhost:7295/",
});
