import axios from "axios";

export const api = axios.create({
  baseURL: "https://tecnotads-2021.herokuapp.com/",
});
