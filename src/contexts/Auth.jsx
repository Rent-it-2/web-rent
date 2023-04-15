import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const login = async (email, senha) => {
    console.log("login auth", { email, senha });

    // const response = await createSession(email, senha);
    // const loggedUser = response.data.user;

    const loggedUser = {
      id: "1",
      email,
    };
    sessionStorage.setItem("user", JSON.stringify(loggedUser));

    if (senha === "secret") {
      setUser(loggedUser);
      navigate("/");
    }
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
