import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  api,
  createSession,
  getFotoUserById,
  getUserCartoes,
  getUserItensFavoritos,
  getUserLoggedItems,
} from "../api";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [foto, setFoto] = useState();
  const [loading, setLoading] = useState(true);

  const [cartoes, setCartoes] = useState([]);
  const [itemFavoritos, setItemFavoritos] = useState([]);
  const [itemList, setItem] = useState([
    {
      id: 0,
      nome: "string",
      descricao: "string",
      valorDia: 0,
      tempoLocacao: 0,
      disponivel: 0,
      dtCadastro: "2023-05-22T17:03:40.878Z",
      categoria: {
        id: 0,
        nomeCategoria: "string",
      },
      usuario: {
        id: 0,
        nome: "string",
        apelido: "string",
        email: "string",
        password: "string",
        telefone: "string",
      },
    },
  ]);

  useEffect(() => {
    const recoveredUser = JSON.parse(sessionStorage.getItem("user"));
    const recoveredItem = JSON.parse(sessionStorage.getItem("userItems"));
    if (recoveredUser) {
      setUser(recoveredUser);
    }
    setLoading(false);
    getCartoes();
    if(!recoveredItem){
      getItem();
    }
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);
    const loggedUser = response.data;
    const token = response.data.token;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    sessionStorage.setItem("user", JSON.stringify(loggedUser));
    sessionStorage.setItem("userFoto", getFotoUserById(loggedUser.userId));
    sessionStorage.setItem("token", JSON.stringify(token));

    setUser(loggedUser);
    setFoto(getFotoUserById(loggedUser.userId));
    getItem();
    getFavoritos();
    navigate("");
  };

  const logout = () => {
    console.log("logout");
    sessionStorage.clear();
    setUser(null);
    navigate("/");
  };

  const getCartoes = async () => {
    try {
      const resposta = await getUserCartoes().then((res) => {
        console.log(res.data);
        setCartoes(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getItem = async () => {
    console.log("item");
    const response = await getUserLoggedItems();
    sessionStorage.setItem("userItems", JSON.stringify(response));
    setItem(response);
  };

  const getFavoritos = async () => {
    try {
      await getUserItensFavoritos().then((res) => {
        sessionStorage.setItem("favoritos", JSON.stringify(res.data));
        setItemFavoritos(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        foto,
        cartoes,
        itemList,
        itemFavoritos,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
