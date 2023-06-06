import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Modal } from "./index";
import { IMaskInput } from "react-imask";
import { deleteUserCartoes, patchUserCartoes } from "../api";

const CardCartao = ({ cartaoInfos, showEdit, children }) => {
  const [openModal, setOpenModal] = useState(false);

  const deletarCartao = () =>{
    deleteUserCartoes(cartaoInfos.id)
  }

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
            <h2 className="text-lg font-semibold">{cartaoInfos.nomeUsuario}</h2>
          </div>
          {/* <div className="pt-2">
            <p>CVV</p>
            <h2 className="text-lg font-semibold">{cartaoInfos.cartaoCvv}</h2>
          </div> */}
        </div>

        <div className="flex gap-3">
          <div className="">
            <IMaskInput
              type="text"
              name="cartaoNum"
              value={cartaoInfos.numCartao}
              mask={"0000 0000 0000 0000"}
              maxLength={19}
              disabled
              className={`text-lg font-semibold bg-transparent appearance-none outline-none`}
            />
            <p>Número do cartão</p>
          </div>
          <div className="">
            <h2 className="text-lg font-semibold">{cartaoInfos.validade}</h2>
            <p>Good thru</p>
          </div>
        </div>
      </div>

      {showEdit && (
        <div className="py-2 flex items-center justify-center gap-20 sm:flex-col sm:px-2">
          <button
            href=""
            className={`hover:text-primary`}
            onClick={() => setOpenModal(true)}
          >
            <i className="mdi mdi-square-edit-outline text-[20px]" />
          </button>
          <button href="" className={`hover:text-primary`}
            onClick={deletarCartao}
          >
            <i className="mdi mdi-trash-can-outline text-[20px]" />
          </button>
        </div>
      )}

      {!showEdit && (
        <div className="py-2 flex items-center justify-center gap-20 sm:flex-col sm:px-2">
          {children}
        </div>
      )}

      <Modal
        title={"Editar Cartão"}
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      >
        <Form cartao={cartaoInfos} />
      </Modal>
    </div>
  );
};

const Form = ({ cartao }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [formValues, setFormValues] = useState(cartao || {});

  const handleChange = (event) => {
    const { name, type } = event.target;
    let value = null;

    if (type === "file") {
      value = event.target.files[0];
    } else if (type === "checkbox") {
      setIsChecked(event.target.checked);
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formValues);
    patchUserCartoes(cartao.id, formValues);
    
  };

  useEffect(() => {
    if (cartao) {
      setFormValues(cartao);
    }
  }, [cartao]);

  return (
    <form className="w-96 flex flex-wrap gap-2" onSubmit={handleSubmit}>
      <div className="w-full">
        <label className="text-sm text-rentBlue">Nome impresso no cartão</label>
        <input
          type="text"
          name="nomeImpresso"
          value={formValues.nomeUsuario || ""}
          onChange={handleChange}
          className={`${styles.inputPadrao}`}
        />

        <label className="text-sm text-rentBlue">Numero do Cartão</label>
        <IMaskInput
          type="text"
          name="numCartao"
          value={formValues.numCartao || ""}
          onChange={handleChange}
          mask={"0000 0000 0000 0000"}
          maxLength={19}
          placeholderChar="\u2000"
          className={`${styles.inputPadrao}`}
        />
      </div>

      <div className="w-full flex gap-2">
        <div className="w-full">
          <label className="text-sm text-rentBlue">Validade</label>

          <IMaskInput
            type="text"
            name="validade"
            as={IMaskInput}
            mask="00/00"
            placeholder="00/00"
            value={formValues.validade || ""}
            onChange={handleChange}
            className={`${styles.inputPadrao}`}
          />
        </div>

        {/* <div className="w-full">
          <label className="text-sm text-rentBlue">CVV</label>
          <IMaskInput
            as={IMaskInput}
            type="text"
            name="cvvCartao"
            value={formValues.cvvCartao || ""}
            placeholder="000"
            mask="000"
            onChange={handleChange}
            className={`${styles.inputPadrao}`}
          />
        </div> */}
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">CPF do Titular</label>

        <IMaskInput
          type="text"
          name="cpfTitular"
          value={formValues.cpf || ""}
          onChange={handleChange}
          as={IMaskInput}
          mask="000.000.000-00"
          placeholder="Digite o seu CPF"
          className={`${styles.inputPadrao}`}
        />
      </div>

      <div className="w-1/2 flex gap-2">
        <button
          type="submit"
          className={`${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
        >
          <i className={`mdi mdi-${!cartao ? "plus" : ""} text-[20px]`} />
          {cartao ? "Salvar" : "Cadastrar Cartão"}
        </button>

        {cartao && (
          <button
            className={`${styles.botaoPadraoSecondary} ${styles.hoverPadraoPrimary}`}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default CardCartao;
