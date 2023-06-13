import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { postUserCartoes } from "../../api";
import Modal from "../Modal";
import CardCartao from "../CardCartao";
import { IMaskInput } from "react-imask";
import { cartoes } from "../../constants";

const Cartoes = () => {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <>
      <div>
        <h1 className="font-bold text-xl">
          <i className="mdi mdi-credit-card pr-2" />
          Cartões
        </h1>
        <p className="text-gray-400 text-sm pt-2">Seus cartões cadastrados</p>
      </div>

      <div className="flex">
        <button
          className={`p-2 text-xs flex cartaos-center border-[1px] rounded-full bg-primary text-white ${styles.hoverPadraoPrimary} sm:text-base`}
          onClick={() => setOpenModal(true)}
        >
          <i className="mdi mdi-plus text-[22px] "></i>
          Add Cartão de Crédito
        </button>
      </div>

      <div className="flex flex-wrap gap-5">
        {cartoes?.map((cartao) => (
          <CardCartao cartaoInfos={cartao} showEdit={true} />
        ))}
      </div>

      <Modal
        title={"Adicionar Cartão"}
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      >
        <Form />
      </Modal>
    </>
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
    postUserCartoes(formValues);
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
          value={formValues.nomeImpresso || ""}
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
          // value={formValues.cpf || ""}
          onChange={handleChange}
          as={IMaskInput}
          mask="000.000.000-00"
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

export default Cartoes;
