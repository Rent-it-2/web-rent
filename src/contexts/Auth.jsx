import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, senha) => {
    console.log("login auth", { email, senha });
    setUser({ id: "123", email });
  };

  const logout = () => {
    console.log("logout");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
