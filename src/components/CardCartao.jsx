import React from "react";

const CardCartao = ({ cartaoInfos, showEdit, children }) => {
  return (
    <div className="items-center rounded-3xl text-xs text-gray-500 bg-gray-300 sm:flex">
      <div className="flex flex-wrap flex-col gap-5 bg-black rounded-3xl py-10 px-8 bg-gradient-to-r from-rentBlue via-gray-950 to-gray-950">
        <div className="flex items-start gap-3">
          <img
            src="../../public/card-ship.png"
            className="hidden aspect-square h-16 sm:flex"
          />
          <div className="pt-2">
            <p>Nome no cartão</p>
            <h2 className="text-lg font-semibold">{cartaoInfos.nome}</h2>
          </div>
          <div className="pt-2">
            <p>CVV</p>
            <h2 className="text-lg font-semibold">{cartaoInfos.cartaoCvv}</h2>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="">
            <h2 className="text-lg font-semibold">{cartaoInfos.cartaoNum}</h2>
            <p>Número do cartão</p>
          </div>
          <div className="">
            {/* <h2 className="text-lg font-semibold">{cartaoInfos.cartaoVal}</h2> */}
            <h2 className="text-lg font-semibold">12/25</h2>
            <p>Good thru</p>
          </div>
        </div>
      </div>

      {showEdit && (
        <div className="py-2 flex items-center justify-center gap-20 sm:flex-col sm:px-2">
          <button href="">
            <i className="mdi mdi-square-edit-outline text-[20px]" />
          </button>
          <button href="">
            <i className="mdi mdi-trash-can-outline text-[20px]" />
          </button>
        </div>
      )}

      {!showEdit && (
        <div className="py-2 flex items-center justify-center gap-20 sm:flex-col sm:px-2">
          {children}
        </div>
      )}

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

export default CardCartao;
