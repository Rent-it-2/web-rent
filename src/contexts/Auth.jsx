import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  api,
  createSession,
  getFotoUserById,
  getUserCartoes,
  getUserEndereco,
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
  const [endereco, setEndereco] = useState([]);
  const [itemFavoritos, setItemFavoritos] = useState([]);
  const [itemList, setItemList] = useState([
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
    // const recoveredItem = JSON.parse(sessionStorage.getItem("userItems"));
    // const recoveredCartao = JSON.parse(sessionStorage.getItem("userCartoes"));
    if (recoveredUser) {
      setUser(recoveredUser);
    }
    setLoading(false);
    if (recoveredUser) {
      getItem(recoveredUser.userId);
      getCartoes();
      getFavoritos();
      // getEndereco();
    }
  }, []);

  const login = async (email, password) => {
    const response = 
await
 createSession(email, password);
    const loggedUser = response.data;
    const token = response.data.token;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    sessionStorage.setItem("user", JSON.stringify(loggedUser));
    sessionStorage.setItem("userFoto", getFotoUserById(loggedUser.userId));
    sessionStorage.setItem("token", JSON.stringify(token));

    setUser(loggedUser);
    navigate("");
    setFoto(getFotoUserById(loggedUser.userId));
    getItem(loggedUser.userId);
    getCartoes();
    // getEndereco();
    getFavoritos();
    setFoto(getFotoUserById(loggedUser.userId));
  };

  const logout = () => {
    console.log("logout");
    sessionStorage.clear();
    setUser(null);
    navigate("/");
  };

  const getCartoes = async () => {
    try {
      
await
 getUserCartoes().then((res) => {
        sessionStorage.setItem("userCartoes", JSON.stringify(res.data));
        setCartoes(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async (userId) => {
    const response = 
await
 getUserLoggedItems(userId);
    sessionStorage.setItem("userItems", JSON.stringify(response));
    setItemList(response);
  };

  const getFavoritos = async () => {
    try {
      
await
 getUserItensFavoritos().then((res) => {
        sessionStorage.setItem("favoritos", JSON.stringify(res.data));
        setItemFavoritos(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getEndereco = async () => {
    try {
      
await
 getUserEndereco().then((res) => {
        sessionStorage.setItem("endereco", JSON.stringify(res.data));
        console.log(res.data);
        setEndereco(res.data);
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
        endereco,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
