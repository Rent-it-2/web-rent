import React from "react";
import { IMaskInput } from "react-imask";
import { styles } from "../../styles";

const PagamentosInfos = ({ data, updateFieldHandler }) => {
  return (
    <div className="flex flex-wrap gap-5 px-10">
      <h1 className="text-rentBlue font-semibold font-poppins">
        Dados Pessoais
      </h1>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Nome Compelto</label>
          <input
            type="text"
            name="nome"
            value={data.nome || ""}
            onChange={(e) => updateFieldHandler("nome", e.target.value)}
            className={`${styles.inputPadrao}`}
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
            {/* <EndercoCard/> */}
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

const EndercoCard = ({ endereco }) => {
  // const [openModal, setOpenModal] = useState(false);

  const backImage = {
    backgroundImage: `url(${endereco.foto})`,
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-5 rounded-lg p-1 border-[0.1px] border-gray-300">
      <div className="flex flex-wrap items-center justify-center gap-5">
        <div
          className="aspect-[4/3] min-w-[70px] min-h-[70px] rounded-lg bg-contain"
          style={backImage}
        />

        <div className="flex-col justify-start">
          <p className="text-base font-semibold">{endereco.nome}</p>
          <div className="flex items-end">
            <h2 className="text-base">R$ {endereco.valorDia} </h2>
            <span className="text-sm">/dia</span>
          </div>
          <p
            className={`text-sm ${
              !endereco.isAlugando ? "text-primary" : "text-green-500"
            }`}
          >
            <b>Status:</b> {!endereco.isAlugando ? "Anuncio Pausado" : "Anunciando"}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          className={`${styles.botaoPadraoPrimary} text-sm rounded-md ${styles.hoverPadraoPrimary}`}
        >
          Pausar Anúncio
        </button>

        <button
          className={`rounded-lg border-[1px] border-gray-300 p-1 px-3 text-gray-400 ${styles.hoverPadraoPrimary}`}
          onClick={() => setOpenModal(true)}
        >
          <i className="mdi mdi-pencil w-1/6 cursor-pointer text-[22px] "></i>
        </button>
      </div>
      {/* <Modal
        title={"Editar Item"}
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      >
        <Form item={item} />
      </Modal> */}
    </div>
  );
};

export default PagamentosInfos;
