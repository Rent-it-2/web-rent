import React, { useEffect, useState } from "react";
import { getUserLogged } from "../api";
import { styles } from "../styles";
import { IMaskInput } from "react-imask";

const MeusDados = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    setUser(await getUserLogged());
  };

  useEffect(() => {
    getUser();
  }, []);

  const backImageUser = {
    backgroundImage: `url(${user.foto})`,
  };

  return (
    <>
        <div>
          <h1 className="font-bold text-xl">
            <i className="mdi mdi-account pr-2" />
            Meus Dados
          </h1>
          <p className="text-gray-400 text-sm pt-2">
            Atualizar suas informções pessoais
          </p>
        </div>

        <div className="w-full flex items-center gap-x-10">
          <div className="flex flex-col items-center">
            <h3 className="font-bold">Foto de Perfil</h3>
            <div
              className="rounded-full min-w-[120px] min-h-[120px] border-[3px] border-primary bg-contain bg-no-repeat"
              style={backImageUser}
            />
          </div>

          <div className="w-1/3 flex flex-col gap-2">
            <button
              className={`${styles.botaoPadraoPrimary} text-sm rounded-md ${styles.hoverPadraoPrimary}`}
            >
              Alterar Foto
            </button>

            <button
              className={`border-[1px] w-full p-3 border-gray-300 text-sm rounded-md ${styles.hoverPadraoPrimary}`}
            >
              <i className="mdi mdi-trash-can-outline text-primary text-[20px]"></i>
              Remover Foto
            </button>
          </div>

          <div className="w-1/3 flex items-center">
            <p className="text-sm">Essa será a visão dos outros de você!</p>
            <img src="../../public/image_MeusDados.svg" className="w-2/3" />
          </div>
        </div>

        <div className="">
          <Input
            label={"Apelido"}
            name={"apelido"}
            type={"text"}
            value={user.apelido}
          />
          <Input label={"Nome"} name={"nome"} type={"text"} value={user.nome} />
          <Input
            label={"Email"}
            name={"email"}
            type={"email"}
            value={user.email}
          />
          <Input
            label={"Telefone"}
            name={"telefone"}
            type={"text"}
            mask={`(00) 0000-0000`}
            value={user.telefone}
          />

          <div className="py-3">
          <button
            className={`w-48 ${styles.botaoPadraoPrimary} text-sm ${styles.hoverPadraoPrimary}`}
          >
            Salvar
          </button>
          </div>
        </div>
    </>
  );
};

const Input = ({ label, name, type, value, mask }) => {
  return (
    <div className="w-1/2 pt-2">
      <label htmlFor="">{label}</label>
      <div className="flex rounded-md border-[1px] border-gray-400 text-sm items-center p-2">
        <IMaskInput
          type={type}
          name={name}
          value={value}
          mask={mask}
          as={IMaskInput}
          className={`w-full appearance-none outline-none bg-transparent`}
        />
        <i className="mdi mdi-square-edit-outline text-[20px] text-gray-400" />
      </div>
    </div>
  );
};

export default MeusDados;
