import React from "react";
import { IMaskInput } from "react-imask";

const Cadastro = () => {
  return (
    <div className="flex w-full text-rentBlue">
      <div className="hidden bg-primary w-1/2 h-screen overflow-hidden 
      bg-art-cadastro bg-cover bg-no-repeat sm:flex"></div>

      <div className="hidden w-1/2 min-w-fit flex-col justify-start items-center h-screen overflow-hidden sm:flex">
        <header className="w-full flex items-start self-start justify-self-start p-2">
          <img src="../../public/logo.svg" alt="foto" className="w-24" />
        </header>

        <div
          id="login"
          className="w-full flex flex-col gap-3 px-44 justify-center h-full"
        >
          <div className={`flex flex-col items-center`}>
            <h1 className="font-bold font text-3xl">Bem vindo(a) a RENT-IT</h1>
            <h3 className="text-gray-500">Conte-nos sobre você</h3>
          </div>

          <form action="" className="flex flex-col gap-3">
            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-sm">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
              />
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-sm">
                Apelido
              </label>
              <input
                type="text"
                name="apelido"
                id="apelido"
                className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
              />
            </div>

            <div className=" w-full flex-col flex">
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

            <div className="w-full flex gap-2">
              <div className="w-full flex-col flex">
                <label htmlFor="" className="text-gray-500 text-sm">
                  CPF
                </label>
                <IMaskInput
                  type="text"
                  name="cpf"
                  id="cpf"
                  as={IMaskInput}
                  mask="000.000.000-00"
                  placeholder="Digite o seu CPF"
                  className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
                />

              </div>

              <div className="w-full flex-col flex">
                <label htmlFor="" className="text-gray-500 text-sm">
                  Telefone
                </label>
                <IMaskInput
                  type="tel"
                  name="tel"
                  id="tel"
                  as={IMaskInput}
                  mask="(00) 0000-0000"
                  placeholder="(__) ____-____"
                  className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
                />
              </div>
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
                  className="border-2 rounded-md p-1 border-gray-400 outline-none text-sm"
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
                Cadastrar-se
              </button>
              <span className="text-gray-500 text-sm">
                Já tem uma conta?{" "}
                <a href="" className="font-bold text-sm text-rentBlue hover:text-secondary">
                  Entre
                </a>{" "}
                agora
              </span>
            </div>
          </form>
        </div>

      </div>






      {/* Responsividade Telas Médias */}
      <div className="flex w-full flex-col justify-center items-center h-screen overflow-hidden sm:hidden">
        <header className="w-full flex items-start self-start justify-self-start p-2 ">
          <img src="../../public/logo.svg" alt="foto" className="w-24" />
        </header>

        <div
          id="login"
          className="w-full flex flex-col gap-5 items-center justify-center h-full"
        >
          <div className={`flex flex-col items-center`}>
            <h1 className="font-bold font text-3xl">Bem vindo(a) a RENT-IT</h1>
            <h3 className="text-gray-500">Conte-nos sobre você</h3>
          </div>

          <form action="" className="flex flex-col gap-3">
            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-sm">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
              />
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-sm">
                Apelido
              </label>
              <input
                type="text"
                name="apelido"
                id="apelido"
                className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
              />
            </div>

            <div className=" w-full flex-col flex">
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

            <div className="w-full flex gap-2">
              <div className="w-full flex-col flex">
                <label htmlFor="" className="text-gray-500 text-sm">
                  CPF
                </label>
                <IMaskInput
                  type="text"
                  name="cpf"
                  id="cpf"
                  as={IMaskInput}
                  mask="000.000.000-00"
                  placeholder="Digite o seu CPF"
                  className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
                />

              </div>

              <div className="w-full flex-col flex">
                <label htmlFor="" className="text-gray-500 text-sm">
                  Telefone
                </label>
                <IMaskInput
                  type="tel"
                  name="tel"
                  id="tel"
                  as={IMaskInput}
                  mask="(00) 0000-0000"
                  placeholder="(__) ____-____"
                  className="border-2 rounded-md p-2 border-gray-400 outline-none text-xs text-gray-500"
                />
              </div>
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
                  className="border-2 rounded-md p-1 border-gray-400 outline-none text-sm"
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
                Cadastrar-se
              </button>
              <span className="text-gray-500 text-sm">
                Já tem uma conta?{" "}
                <a href="" className="font-bold text-sm text-rentBlue hover:text-secondary">
                  Entre
                </a>{" "}
                agora
              </span>
            </div>
          </form>
        </div>

      </div>


      {/* Responsividade Telas Pequenas */}
      {/* <div className="flex w-full p-10 flex-col justify-center items-center h-screen overflow-hidden xs:hidden">
        <header className="w-full flex items-start self-start justify-self-start p-2">
          <img src="../../public/logo.svg" alt="foto" className="w-12" />
        </header>

        <div
          id="cadastro"
          className="w-full flex flex-col gap-5 items-center justify-center h-full"
        >
          <div className={`flex flex-col items-center`}>
            <h1 className="font-bold font text-xl text-center">Bem vindo(a) a RENT-IT</h1>
            <h3 className="text-gray-500">Conte-nos sobre você</h3>
          </div>

          <form action="" className=" w-full flex flex-col gap-3">
            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-xs">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                className="border-[1px] rounded-sm p-1 border-gray-400 outline-none text-xs text-gray-500 appearance-none"
              />
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-xs">
                Apelido
              </label>
              <input
                type="text"
                name="apelido"
                id="apelido"
                className="border-[1px] rounded-sm p-1 border-gray-400 outline-none text-xs text-gray-500 appearance-none"
              />
            </div>

            <div className=" w-full flex-col flex">
              <label htmlFor="" className="text-gray-500 text-xs">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-[1px] rounded-sm p-1 border-gray-400 outline-none text-xs text-gray-500 appearance-none"
              />
            </div>
            <div className="w-full flex-col flex">
              <label htmlFor="" className="text-gray-500 text-xs">
                CPF
              </label>
              <IMaskInput
                type="text"
                name="cpf"
                id="cpf"
                as={IMaskInput}
                mask="000.000.000-00"
                placeholder="Digite o seu CPF"
                className="border-[1px] rounded-sm p-1 border-gray-400 outline-none text-xs text-gray-500 appearance-none"
              />

            </div>

            <div className="w-full flex-col flex">
              <label htmlFor="" className="text-gray-500 text-xs">
                Telefone
              </label>
              <IMaskInput
                type="tel"
                name="tel"
                id="tel"
                as={IMaskInput}
                mask="(00) 0000-0000"
                placeholder="(__) ____-____"
                className="border-[1px] rounded-sm p-1 border-gray-400 outline-none text-xs text-gray-500 appearance-none"
              />
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="text-gray-500 text-xs">
                Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-[1px] rounded-sm p-1 border-gray-400 outline-none text-xs text-gray-500 appearance-none"
              />
            </div>

            <div className="w-full flex justify-between">
              <div className="flex gap-1 flex-row-reverse items-center">
                <label htmlFor="" className="text-gray-500 text-xs">
                  Lembrar de mim
                </label>
                <input
                  type="checkbox"
                  name="lembrar"
                  id="lembrar"
                  className="border-2 rounded-md p-1 border-gray-400 outline-none text-xs"
                />
              </div>

              <a href="" className="font-bold text-xs hover:text-secondary">
                Esqueci a senha
              </a>
            </div>

            <div className="w-full flex flex-col items-center gap-2">
              <button
                className="bg-primary rounded-md w-full p-2 text-white text-xs"
                type="submit"
              >
                Cadastrar-se
              </button>
              <span className="text-gray-500 text-xs">
                Já tem uma conta?{" "}
                <a href="" className="font-bold text-rentBlue text-xs hover:text-secondary">
                  Entre
                </a>{" "}
                agora
              </span>
            </div>
          </form>
        </div>
      </div>*/}

    </div>
  );
};

export default Cadastro;
