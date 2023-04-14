import axios from "axios";

const headers = {
    "Content-Type": "application/json",
};

export const api = axios.create({
    baseURL: "https://642ec65b2b883abc6416b7b6.mockapi.io/rent-it"
})

export const createSession = async (email, senha) => {
    return api.post('/login', {email, senha}, { headers: headers });
};

export const getAllItem = async (index) => {
    return api.get(`/users/${index}/itens`);
};

export const getItemById = async (userId, itemId) => {
    return api.get(`/users/${userId}/itens/${itemId}`)
};

export const getUserById = async (userId) => {
    return api.get(`/users/${userId}`);
};

export default api;