import axios from "axios";

export const http = axios.create({
  baseURL: "https://drive-app.r7-office.ru/api",
});
