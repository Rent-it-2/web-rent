import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth";


const Login = () => {
  
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, senha });
    login(email, senha);
  };

  return (
    <div className="flex w-full text-rentBlue">
      <div className="w-full min-w-fit flex-col justify-center items-center h-screen overflow-hidden sm:w-1/2">
        <header className="w-full flex items-start self-start justify-self-start p-2 ">
          <img src="../../public/logo.svg" alt="foto" className="w-24" />
        </header>

        <div
          id="login"
          className="w-full h-full flex flex-col gap-20 p-48 justify-center items-center"
        >
          <div className={`flex flex-col items-center`}>
            <h1 className="font-bold font text-3xl">Bem vindo(a) de volta</h1>
            <h3 className="text-gray-500">Por favor, preencha os detalhes</h3>
          </div>

          <form action="" className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
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
                className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
              />
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-sm">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
              />
            </div>
            <div className="w-full flex justify-between">
              <div className="flex gap-1 flex-row-reverse items-center">
                <label htmlFor="" className="text-gray-500 text-sm">
                  Lembrar de mim
                </label>
                <input
                  type="checkbox"
                  name="lembrar"
                  id="lembrar"
                  className="border-2 rounded-md p-1 border-gray-400"
                />
              </div>

              <a href="" className="font-bold text-sm hover:text-secondary">
                Esqueci a senha
              </a>
            </div>

            <div className="w-full flex flex-col items-center gap-2">
              <button
                className="bg-primary rounded-md w-full p-2 text-white"
                type="submit"
              >
                Entrar
              </button>

              <span className="text-gray-500 text-sm">
                Não tem uma conta?{" "}
                <a
                  href="./Cadastro.jsx"
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

      {/* <div className="flex w-full flex-col justify-center items-center h-screen overflow-hidden sm:hidden">
        <header className="w-full flex items-start self-start justify-self-start p-2 ">
          <img src="../../public/logo.svg" alt="foto" className="w-24" />
        </header>

        <div
          id="login"
          className="flex w-full flex-col justify-center items-center h-screen overflow-hidden gap-20 sm:hidden"
        >
          <div className={`flex flex-col items-center`}>
            <h1 className="font-bold font text-3xl text-center">
              Bem vindo(a) de volta
            </h1>
            <h3 className="text-gray-500 text-center min-w-fit">
              Por favor, preencha os detalhes
            </h3>
          </div>

          <form action="" className="flex flex-col gap-5">
            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
              />
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-sm">
                Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
              />
            </div>
            <div className="w-full flex justify-between">
              <div className="flex gap-1 flex-row-reverse items-center">
                <label htmlFor="" className="text-gray-500 text-sm">
                  Lembrar de mim
                </label>
                <input
                  type="checkbox"
                  name="lembrar"
                  id="lembrar"
                  className="border-2 rounded-md p-1 border-gray-400"
                />
              </div>

              <a href="" className="font-bold text-sm hover:text-secondary">
                Esqueci a senha
              </a>
            </div>

            <div className="w-full flex flex-col items-center gap-2">
              <button
                className="bg-primary rounded-md w-full p-2 text-white"
                type="submit"
              >
                Entrar
              </button>
              <span className="text-gray-500 text-sm">
                Não tem uma conta?{" "}
                <a
                  href="./Cadastro.jsx"
                  className={`font-bold text-sm text-rentBlue cursor-pointer hover:text-secondary`}
                >
                  Cadastre-se
                </a>{" "}
                agora
              </span>
            </div>
          </form>
        </div>
      </div> */}

      <div
        className="hidden bg-primary w-1/2 h-screen overflow-hidden 
            bg-art-cadastro bg-cover bg-no-repeat sm:flex"
      ></div>
    </div>
  );
};

export default Login;