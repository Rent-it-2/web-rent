import React, { useState } from "react";
import { Modal } from "./index";

const Endereco = ({ user, showEdit, children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex items-center flex-wrap justify-between gap-5 rounded-lg p-3 border-[0.1px] border-gray-300">
      
      <div className="w-full flex-wrap flex border-b-2  border-gray-300 justify-between">
        <div className="flex items-center justify-center gap-5">
          <p className="text-base font-semibold">
            {user.enderecoRua}, {user.enderecoComplemento}
          </p>
        </div>

        <div className="flex items-center justify-end gap-2">
          {showEdit && (
            <div className="py-2 flex items-center justify-center gap-2 sm:px-2">
              <button href="" className={`hover:text-primary`} onClick={() => setOpenModal(true)}>
                <i className="mdi mdi-square-edit-outline text-[20px]" />
              </button>
              <button href="" className={`hover:text-primary`}>
                <i className="mdi mdi-trash-can-outline text-[20px]" />
              </button>
            </div>
          )}

          {!showEdit && (
            <div className="py-2 flex items-center justify-center gap-20 sm:flex-col sm:px-2">
              {children}
            </div>
          )}
        </div>
      </div>

      <div className="">
        <div className="flex flex-col flex-wrap justify-center text-gray-500 text-sm">
          <p>São Paulo, SP</p>
          <p>Bairro: {user.enderecoBairro}</p>
          <p>CEP: {user.enderecoCep}</p>
        </div>
      </div>

      <Modal
        title={"Editar Endereço"}
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      >
        {/* <Form item={item} /> */}
      </Modal>
    </div>
  );
};

export default Endereco;
