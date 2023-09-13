import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth";
import { styles } from "../styles";
import { ToastContainer } from "react-toastify";
import Logo from "../images/logo.svg";
import Banner from "../images/banner-login.jpg"


const Login = () => {
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password);
  };

  const backImage = {
    backgroundImage: `url(${Banner})`,
  };

  return (
    <div className="flex w-full text-rentBlue">

      <div className="w-full min-w-fit flex-col justify-center items-center h-screen overflow-hidden sm:w-1/2">
        <header className="w-full flex items-start self-start justify-self-start py-2 sm:px-8">
          <a href="/">
            <img
              src={Logo}
              alt="home"
              className="w-20 sm:w-28"
            />
          </a>
        </header>

        <div
          id="login"
          className="w-full h-full gap-5 p-20 flex flex-col justify-center items-center xs:gap-20 xs:p-32 ss:p-44 sm:p-48 md:p-48"
        >
          <div className={`flex flex-col items-center`}>
            <h1 className="font-bold font text-xl text-center xs:text-3xl">
              Bem vindo(a) de volta
            </h1>
            <h3 className="text-gray-500 text-xs xs:text-base">
              Por favor, preencha os detalhes
            </h3>
          </div>

          <form
            action=""
            className="w-full flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${styles.inputPadrao}`}
              />
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className={`${styles.inputPadrao}`}
              />
            </div>
            <div className="w-full flex justify-between">
              {/* <div className="flex gap-1 flex-row-reverse items-center">
                <label htmlFor="" className="text-gray-500 text-sm">
                  Lembrar de mim
                </label>
                <input
                  type="checkbox"
                  name="lembrar"
                  id="lembrar"
                  className="border-2 rounded-md p-1 border-gray-400"
                />
              </div> */}
              {/* 
              <a href="" className="font-bold text-sm hover:text-secondary">
                Esqueci a senha
              </a> */}
            </div>

            <div className="w-full flex flex-col items-center gap-2">
              <button
                className={`w-full ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
                type="submit"
              >
                Entrar
              </button>

              <span className="text-gray-500 text-sm">
                Não tem uma conta?{" "}
                <a
                  href="/cadastro"
                  className={`font-bold text-sm text-rentBlue cursor-pointer hover:text-secondary`}
                >
                  Cadastre-se
                </a>{" "}
                agora
              </span>
            </div>
          </form>
        </div>
      </div>

      <div
      style={backImage}
        className="hidden bg-primary w-1/2 h-screen overflow-hidden 
            bg-center bg-cover bg-no-repeat sm:flex"
      ></div>
    </div>
  );
};

export default Login;
