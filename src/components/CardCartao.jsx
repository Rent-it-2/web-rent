import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Modal } from "./index";
import { IMaskInput } from "react-imask";

const CardCartao = ({ cartaoInfos, showEdit, children }) => {
  const [openModal, setOpenModal] = useState(false);

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
    // postcartao(formValues)
  };

  useEffect(() => {
    if (cartao) {
      setFormValues(cartao);
    }
  }, [cartao]);

  return (
    <form className="w-96 flex flex-wrap gap-5" onSubmit={handleSubmit}>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Numero do Cartão</label>
        <IMaskInput
          type="text"
          name="cartaoNum"
          value={formValues.cartaoNum || ""}
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
            name="cartaoVal"
            as={IMaskInput}
            mask="00/00/0000"
            placeholder="00/00/0000"
            value={formValues.cartaoVal || ""}
            onChange={handleChange}
            className={`${styles.inputPadrao}`}
          />
        </div>

        <div className="w-full">
          <label className="text-sm text-rentBlue">CVV</label>

          <input
            type="text"
            name="cartaoCvv"
            value={formValues.cartaoCvv || ""}
            onChange={handleChange}
            className={`${styles.inputPadrao}`}
          />
        </div>
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">CPF do Titular</label>

        <IMaskInput
          type="text"
          name="cpf"
          value={formValues.cpf || ""}
          onChange={handleChange}
          as={IMaskInput}
          mask="000.000.000-00"
          className={`${styles.inputPadrao}`}
        />
      </div>

      <div className="flex gap-2">
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
