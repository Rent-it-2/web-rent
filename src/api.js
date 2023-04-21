import axios from "axios";
import { UsuarioLogado } from "./constants";

const token = JSON.parse(sessionStorage.getItem("token"));
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const api = axios.create({
  baseURL: "https://642ec65b2b883abc6416b7b6.mockapi.io/rent-it",
  // baseURL: "http://localhost:8080"
});

export const createSession = async (email, password) => {
  return api.post("/usuarios/login", { email, password });
};

export const getAllItem = async (index) => {
  return api.get(`/users/${index}/itens`);
};

export const getItemById = async (userId, itemId) => {
  return api.get(`/users/${userId}/itens/${itemId}`);
};

export const putItem = async (userId, itemId, itemBody) => {
  return api.put(`/users/${userId}/itens/${itemId}`, {itemBody});
};

export const getUserById = async (userId) => {
  return api.get(`/users/${userId}`);
};

export const getUserItem = async (userId) => {
  return api.get(`/users/${userId}/itens`);
};

export const getUserLogged = async () => {
  // let userInfos = JSON.parse(sessionStorage.getItem("user"));
  try {
    const resposta = await getUserById(UsuarioLogado.id).then((res) => {
      return res.data;
    });
    return resposta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserLoggedItems = async () => {
  // let userInfos = JSON.parse(sessionStorage.getItem("user"));
  try {
    const resposta = await getUserItem(UsuarioLogado.id).then((res) => {
      console.log(res.data);
      return res.data;
    });
    return resposta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default api;
