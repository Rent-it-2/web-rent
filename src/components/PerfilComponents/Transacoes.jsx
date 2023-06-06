import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { ComboBox, Modal } from "../index";
import { getTXT, postTXT } from "../../api";

const Transacoes = () => {
  const [openModal, setOpenModal] = useState(false);

  const txt = () => {
    getTXT
  }

  return (
    <>
      <div>
        <h1 className="font-bold text-xl">
          <i className="mdi mdi-transfer pr-2" />
          Transações
        </h1>
        <p className="text-gray-400 text-sm pt-2">Seu histórico de transações bem sucedidas</p>
      </div>

      <div className="flex">
        <button
          className={`p-2 text-xs flex cartaos-center border-[1px] rounded-full bg-primary text-white ${styles.hoverPadraoPrimary} sm:text-base`}
          onClick={() => setOpenModal(true)}
        >
          <i className="mdi mdi-plus text-[22px] "></i>
          Add Itens
        </button>

        <button
          className={`p-2 text-xs flex cartaos-center border-[1px] rounded-full bg-primary text-white ${styles.hoverPadraoPrimary} sm:text-base`}
          onClick={() => setOpenModal(true)}
        >
          <i className="mdi mdi-plus text-[22px] "></i>
          Gerar Excel
        </button>

        <button
          className={`p-2 text-xs flex cartaos-center border-[1px] rounded-full bg-primary text-white ${styles.hoverPadraoPrimary} sm:text-base`}
          onClick={() => setOpenModal(true)}
        >
          <i className="mdi mdi-plus text-[22px] "></i>
          Trazer transações
        </button>
      </div>

      <Modal
          title={"Adicionar TXT"}
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
        >
          <FormModalFoto/>
        </Modal>
    </>
  );
};

const FormModalFoto = () => {
  const [formValues, setFormValues] = useState();

  const handleChange = (event) => {
    const file = event.target.files[0];
    setFormValues(file);
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        console.log("submit", formValues);
    postTXT(formValues);
    // if (formValues) {
    //   try {
    //     console.log("submit", formValues);
    //     patchFotoItemById(item.id, formValues);
    //   } catch (error) {
    //     console.log("Erro ao atualizar a foto:", error);
    //   }
    // }
  };


  return (
    <form className="w-96 flex flex-wrap gap-2" onSubmit={handleSubmit}>
      <div className="w-full">
        <div className="flex rounded-md bg-gray-300 items-center justify-center py-2 px-10">
          <label htmlFor="foto">
            <i className="mdi mdi-plus text-[50px] text-gray-400 cursor-pointer"></i>
          </label>
          <input
            type="file"
            name="foto"
            id="foto"
            className={`hidden`}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-1/2">
        <button
          type="submit"
          className={`w-full ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
        >
          Adicionar
        </button>
      </div>
    </form>
  );
};

export default Transacoes;
