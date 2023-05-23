import axios from "axios";
import { UsuarioLogado } from "./constants";

const token = JSON.parse(sessionStorage.getItem("token"));
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const api = axios.create({
  // baseURL: "https://642ec65b2b883abc6416b7b6.mockapi.io/rent-it",
  // baseURL: "http://localhost:8080"
  baseURL: "http://localhost:4500",
});

export const createSession = async (email, password) => {
  return api.post("/usuarios/login", { email, password });
};

export const getAllItem = async () => {
  return api.get(`/itens`);
};

export const getItemById = async (itemId) => {
  return api.get(`/itens/${itemId}`);
};

export const getFotoItemById = (itemId) => {
  return `http://localhost:4500/itens/foto/${itemId}`;
};

export const getFotoUserById = (userId) => {
  return `http://localhost:4500/usuarios/foto/${userId}`;
};

export const patchFotoUserById = (userId, file) => {
  return api
  .patch(`/usuarios/foto/${userId}`, file, {
    headers: {
      "Content-Type": "image/jpg",
      Accept: "*/*",
    },
  })
  .then((response) => {
    console.log("sucesso");
    window.location.reload(true);
  })
  .catch((error) => {
    console.log(error);
  });
};

export const patchFotoItemById = (itemId, foto) => {
  return api
    .patch(`/itens/foto/${itemId}`, foto, {
      headers: {
        "Content-Type": "image/jpg",
        Accept: "*/*",
      },
    })
    .then((response) => {
      console.log("sucesso");
      window.location.reload(true);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserById = async (userId) => {
  return api.get(`/usuarios/${userId}`);
};

export const getUserItem = async (userId) => {
  return api.get(`/itens/usuario?id=${userId}`);
};

export const postUserItem = async (formValues) => {
  return api.post(`/itens/cadastrar`, {
    id: formValues.id,
    nome: formValues.nome,
    categoria: formValues.categoria,
    usuario: UsuarioLogado.userId,
    descricao: formValues.descricao,
    valorDia: formValues.valorDia,
    disponivel: formValues.disponivel,
  })
  .then((response) => {
    console.log("sucesso");
    window.location.reload(true);
  })
  .catch((error) => {
    console.log(error);
  });
};

export const putItem = (itemId, formValues) => {
  return api.put(`/itens/${itemId}`, {
    id: itemId,
    nome: formValues.nome,
    categoria: formValues.categoria,
    usuario: UsuarioLogado.userId,
    disponivel: formValues.disponivel,
    descricao: formValues.descricao,
    valorDia: formValues.valorDia,
  })    
  .then((response) => {
    console.log("sucesso");
    window.location.reload(true);
  })
  .catch((error) => {
    console.log(error);
  });
};

export const deleteItem = (itemId) => {
  return api.delete(`/itens/${itemId}`)
  .then((response) => {
    console.log("sucesso");
    window.location.reload(true);
  })
  .catch((error) => {
    console.log(error);
  });;
};

export const getUserItensFavoritos = () => {
  let userId = UsuarioLogado.userId;
  return api.get(`/itens/favoritos?id=${userId}`);
};

export const getUserLogged = async () => {
  try {
    const resposta = await getUserById(UsuarioLogado.userId).then((res) => {
      console.log(res.data);
      return res.data;
    });
    return resposta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserLoggedItems = async () => {
  try {
    const resposta = await getUserItem(UsuarioLogado.userId).then((res) => {
      console.log(res.data);
      return res.data;
    });
    return resposta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserCartoes = () => {
  let userId = UsuarioLogado.userId;
  return api.get(`/cartaos/usuario/{id}?id=${userId}`);
};

export const postUserCartoes = (formValues) => {
  return api.post(`/cartaos/cadastrar`, 
    {
      id: 0,
      numCartao: formValues.numCartao,
      validade: formValues.validade,
      cpfTitular: formValues.cpfTitular,
      usuario: UsuarioLogado.userId,
      nomeImpresso: formValues.nomeImpresso
    }
  )  
  .then((response) => {
    console.log("sucesso");
    window.location.reload(true);
  })
  .catch((error) => {
    console.log(error);
  });
};

export default api;