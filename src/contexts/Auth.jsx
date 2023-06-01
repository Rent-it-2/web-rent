import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession, getFotoUserById } from "../api";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [foto, setFoto] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = JSON.parse(sessionStorage.getItem("user"));
    if (recoveredUser) {
      setUser(recoveredUser);
      setFoto(getFotoUserById(recoveredUser.userId));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);
    const loggedUser = response.data;
    const token = response.data.token;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    sessionStorage.setItem("user", JSON.stringify(loggedUser));
    // sessionStorage.setItem("userFoto", getFotoUserById(loggedUser.userId));
    sessionStorage.setItem("token", JSON.stringify(token));

    setUser(loggedUser);
    // setFoto(getFotoUserById(loggedUser.userId));
    navigate("");
  };

  const logout = () => {
    console.log("logout");
    sessionStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, foto, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
