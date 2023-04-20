import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { getUserLogged } from "../api";
import Modal from "./Modal";
import CurrencyInput from "react-currency-input-field";

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
          className={`p-2 text-xs flex items-center border-[1px] rounded-full bg-primary text-white ${styles.hoverPadraoPrimary} sm:text-base`}
          onClick={() => setOpenModal(true)}
        >
          <i className="mdi mdi-plus text-[22px] "></i>
          Add Cartão de Crédito
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        <Cartao cartaoInfos={user} />
        <Cartao cartaoInfos={user} />
        <Cartao cartaoInfos={user} />
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

const Cartao = ({ cartaoInfos }) => {
  return (
    <div className="items-center rounded-3xl text-xs text-gray-500 bg-gray-300 sm:flex">
      <div className="flex flex-wrap flex-col gap-5 bg-black rounded-3xl py-10 px-8 bg-gradient-to-r from-gray-700 via-gray-950 to-gray-950">
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
            <h2 className="text-lg font-semibold">12/2025</h2>
            <p>Good thru</p>
          </div>
        </div>
      </div>
      <div className="py-2 flex items-center justify-center gap-20 sm:flex-col sm:px-2">
        <button href="">
          <i className="mdi mdi-square-edit-outline text-[20px]" />
        </button>
        <button href="">
          <i className="mdi mdi-trash-can-outline text-[20px]" />
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

const Form = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [formValues, setFormValues] = useState(item || {});

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
    // postItem(formValues)
  };

  useEffect(() => {
    if (item) {
      setFormValues(item);
    }
  }, [item]);

  return (
    <form className="w-96 flex flex-wrap gap-2" onSubmit={handleSubmit}>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Numero do Cartão</label>
        <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
          <input
            type="text"
            name="numCartao"
            value={formValues.nome || ""}
            onChange={handleChange}
            className={`w-full appearance-none outline-none bg-transparent`}
          />
        </div>
      </div>

      <div className="w-full flex gap-2">
        <div className="w-full">
          <label className="text-sm text-rentBlue">Validade</label>
          <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
            <input
              type="text"
              name="numCartao"
              value={formValues.nome || ""}
              onChange={handleChange}
              className={`w-full appearance-none outline-none bg-transparent`}
            />
          </div>
        </div>

        <div className="w-full">
          <label className="text-sm text-rentBlue">CVV</label>
          <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
            <input
              type="text"
              name="numCartao"
              value={formValues.nome || ""}
              onChange={handleChange}
              className={`w-full appearance-none outline-none bg-transparent`}
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">CPF do Titular</label>
        <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
          <input
            type="text"
            name="numCartao"
            value={formValues.nome || ""}
            onChange={handleChange}
            className={`w-full appearance-none outline-none bg-transparent`}
          />
        </div>
      </div>

      <div className="w-1/2 flex gap-2">
        <button
          type="submit"
          className={`${styles.botaoPadraoPrimary} p-2 text-sm ${styles.hoverPadraoPrimary}`}
        >
          <i className={`mdi mdi-${!item ? "plus" : ""} text-[20px]`} />
          {item ? "Salvar" : "Cadastrar Cartão"}
        </button>

        {item && (
          <button
            className={`border-[1px] w-full p-3 border-gray-400 text-gray-400 text-sm rounded-md ${styles.hoverPadraoPrimary}`}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default Cartoes;
