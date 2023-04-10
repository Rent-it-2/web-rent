import axios from "axios";

export const api = axios.create({
    baseURL: "https://642ec65b2b883abc6416b7b6.mockapi.io/rent-it"
})

export const users = axios.create({
    baseURL: "https://642ec65b2b883abc6416b7b6.mockapi.io/rent-it"
})

export default users;