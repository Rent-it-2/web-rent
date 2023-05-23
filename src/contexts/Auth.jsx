import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = sessionStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {

    const response = await createSession(email, password);
    const loggedUser = response.data;
    const token = response.data.token;
    
    api.defaults.headers.Authorization = `Bearer ${token}`

    // const loggedUser = {
    //   id: "1",
    //   email,
    // };
    // sessionStorage.setItem("id", JSON.stringify(response.data.userId));
    sessionStorage.setItem("user", JSON.stringify(loggedUser));
    sessionStorage.setItem("token", JSON.stringify(token));

    // if (password === "secret") {
      setUser(loggedUser);
      navigate('');
    // }
  };

  const logout = () => {
    console.log("logout");
    sessionStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
