import React from "react";
import { IMaskInput } from "react-imask";
import { styles } from "../../styles";
import { Endereco } from "../index";

const PagamentosInfos = ({ data, userInfos, updateFieldHandler }) => {

  
  return (
    <div className="flex flex-wrap gap-5 px-10">
      <h1 className="text-rentBlue font-semibold font-poppins">
        Dados Pessoais
      </h1>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Nome Completo</label>
        <input
          type="text"
          name="nome"
          value={data.nome || ""}
          onChange={(e) => updateFieldHandler("nome", e.target.value)}
          className={`${styles.inputPadrao}`}
          required
        />
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">CPF</label>
        <IMaskInput
          type="text"
          name="cpf"
          as={IMaskInput}
          mask="000.000.000-00"
          placeholder="Digite o seu CPF"
          value={data.cpf || ""}
          onChange={(e) => updateFieldHandler("cpf", e.target.value)}
          className={`${styles.inputPadrao}`}
          required
        />
      </div>

      <h1 className="text-rentBlue font-semibold font-poppins">Endereço</h1>
      <div className="w-full flex items-center gap-x-10">
        <div className="w-full flex flex-col justify-start gap-y-5 gap-x-7 mt-3">
          {/* {itemList?.map((item) => ( */}
          <Endereco user={userInfos} showEdit={false}>
            <input
              type="radio"
              name="enderecoId"
              defaultChecked={data.enderecoId == userInfos.enderecoId}
              value={userInfos.enderecoId}
              onChange={(e) => updateFieldHandler("enderecoId", e.target.value)}
              required
            />
          </Endereco>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default PagamentosInfos;
