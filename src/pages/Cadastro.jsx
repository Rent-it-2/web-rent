import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { styles } from "../styles";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const headers = {
    "Content-Type": "application/json",
  };

  const postUser = async (user) => {
    try {
      const resposta = await api
        // .post(`/users`, user, { headers: headers })
        .post(`/usuarios/cadastrar`, user, { headers: headers })
        .then((res) => {
          console.log('res',res.data);
        });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", user);
    postUser(user)
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log("change", user);
  };

  return (
    <div className="flex w-full justify-center text-rentBlue">
      <div
        className="bg-primary sm:w-1/2 h-screen overflow-hidden 
      bg-art-cadastro bg-center bg-cover bg-no-repeat"
      ></div>

      <div className="min-w-fit flex-col justify-start items-center overflow-hidden sm:h-screen sm:w-1/2">
        <header className="w-full flex items-start self-start justify-self-start px-8">
          <a href="/">
            <img src="../../public/logo.svg" alt="home" className="w-28" />
          </a>
        </header>

        <div className={`w-full h-full flex flex-col gap-2 px-10 justify-center ss:px-44`}>
          <div className={`flex flex-col items-center`}>
            <h1 className="font-bold text-lg text-center sm:text-3xl">Bem vindo(a) a RENT-IT</h1>
            <h3 className="text-gray-500 text-sm sm:text-base">Conte-nos sobre você</h3>
          </div>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-xs sm:text-sm">
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                onChange={handleChange}
                className={`${styles.inputPadrao}`}
              />
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-xs sm:text-sm">
                Apelido
              </label>
              <input
                type="text"
                name="apelido"
                onChange={handleChange}
                className={`${styles.inputPadrao}`}
              />
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-xs sm:text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className={`${styles.inputPadrao}`}
              />
            </div>

            <div className="flex gap-2">
              {/* <div className="w-full flex-col flex">
                <label htmlFor="" className="text-gray-500 text-xs sm:text-sm">
                  CPF
                </label>
                <IMaskInput
                  type="text"
                  name="cpf"
                  onChange={handleChange}
                  as={IMaskInput}
                  mask="000.000.000-00"
                  placeholder="Digite o seu CPF"
                  className={`${styles.inputPadrao}`}
                />
              </div> */}

              <div className="flex-col flex">
                <label htmlFor="" className="text-gray-500 text-xs sm:text-sm">
                  Telefone
                </label>
                <IMaskInput
                  type="string"
                  name="telefone"
                  onChange={handleChange}
                  as={IMaskInput}
                  mask="(00)00000-0000"
                  placeholder="(__) ____-____"
                  className={`${styles.inputPadrao}`}
                />
              </div>
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-xs sm:text-sm">
                Senha
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className={`${styles.inputPadrao}`}
              />
            </div>

            <div className="w-full flex justify-between">
              <div className="flex gap-1 flex-row-reverse items-center">
                <label htmlFor="" className="text-gray-500 text-xs sm:text-sm">
                  Lembrar de mim
                </label>
                <input
                  type="checkbox"
                  name="lembrar"
                  className="border-2 rounded-md p-1 border-gray-400 outline-none"
                />
              </div>

              <a href="" className="font-bold text-xs sm:text-sm hover:text-secondary">
                Esqueci a senha
              </a>
            </div>

            <div className="w-full flex flex-col items-center gap-2">
              <button
                className={`w-full ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
                type="submit"
              >
                Cadastrar-se
              </button>
              <span className="text-gray-500 text-xs sm:text-sm">
                Já tem uma conta?{" "}
                <a
                  href="/login"
                  className="font-bold text-xs sm:text-sm text-rentBlue hover:text-secondary"
                >
                  Entre
                </a>{" "}
                agora
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
