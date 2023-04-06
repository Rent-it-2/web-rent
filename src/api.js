import axios from "axios";

const api = axios.create({
    baseURL: "https://642ec65b2b883abc6416b7b6.mockapi.io/rent-it/items"
})

export default api;