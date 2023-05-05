import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { getUserLogged } from "../../api";
import Modal from "../Modal";
import CardCartao from "../CardCartao";
import { IMaskInput } from "react-imask";

const Cartoes = () => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({});

  const getUser = async () => {
    setUser(await getUserLogged());
  };

  useEffect(() => {
    getUser();
  }, []);

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
        <CardCartao cartaoInfos={user} showEdit={true} />
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
    // postcartao(formValues)
  };

  useEffect(() => {
    if (cartao) {
      setFormValues(cartao);
    }
  }, [cartao]);

  return (
    <form className="w-96 flex flex-wrap gap-2" onSubmit={handleSubmit}>
      <div className="w-full">
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
            name="valCartao"
            as={IMaskInput}
            mask="00/00/0000"
            placeholder="00/00/0000"
            value={formValues.valCartao || ""}
            onChange={handleChange}
            className={`${styles.inputPadrao}`}
          />
        </div>

        <div className="w-full">
          <label className="text-sm text-rentBlue">CVV</label>

          <input
            type="text"
            name="cvvCartao"
            value={formValues.cvvCartao || ""}
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

export default Cartoes;
