import React, { useContext, useEffect, useState } from "react";
import { Modal } from "./index";
import { styles } from "../styles";
import { IMaskInput } from "react-imask";
import { deleteEndereco, getUserEndereco, postUserEndereco, putUserEndereco } from "../api";
import { AuthContext } from "../contexts/Auth";
import { endereco } from "../constants";

const Endereco = ({ showEdit, children }) => {
  const [openModal, setOpenModal] = useState(false);

  const deletarEndereco = () => {
    sessionStorage.removeItem("endereco");
    deleteEndereco(endereco.id);
  };

  return (
    <div
      className={`${styles.cardWhite} flex items-center flex-wrap justify-between gap-5 border-[0.1px] border-gray-300`}
    >
      <div className="w-full flex-wrap flex border-b-2  border-gray-300 justify-between">
        <div className="flex items-center justify-center gap-5">
          <p className="text-base font-semibold text-primary">
            {endereco.bairro}, {endereco.logradouro}
          </p>
        </div>

        <div className="flex items-center justify-end gap-2">
          {showEdit && (
            <div className="py-2 flex items-center justify-center gap-2 sm:px-2">
              <button
                href=""
                className={`hover:text-primary`}
                onClick={() => setOpenModal(true)}
              >
                <i className="mdi mdi-square-edit-outline text-[20px]" />
              </button>
              <button
                href=""
                className={`hover:text-primary`}
                onClick={deletarEndereco}
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
        </div>
      </div>

      <div className="">
        <div className="flex flex-col flex-wrap justify-center text-gray-500 text-sm">
          <p>{endereco.cidade}</p>
          {/* <p>
            {endereco.bairro}, {endereco.logradouro}
          </p> */}
          <p>
            CEP:{" "}
            <IMaskInput
              disabled
              mask="00000-000"
              placeholder="00000000"
              value={endereco.cep}
              className={`appearance-none outline-none`}
            />
          </p>
        </div>
      </div>

      <Modal
        title={"Editar Endereço"}
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      >
        <FormModal endereco={endereco} />
      </Modal>
    </div>
  );
};

const FormModal = ({ endereco }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [formValues, setFormValues] = useState(endereco || {});

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
    if (endereco) {
      console.log("editar", formValues);
      putUserEndereco(endereco.id, formValues);
    } else {
      console.log("add", formValues);
      postUserEndereco(formValues);
    }
  };

  useEffect(() => {
    if (endereco) {
      setFormValues(endereco);
    }
  }, [endereco]);

  return (
    <form className="w-96 flex flex-wrap gap-2" onSubmit={handleSubmit}>
      <div className="w-full">
        <label className="text-sm text-rentBlue">CEP</label>
        <IMaskInput
          type="text"
          name="cep"
          mask="00000000"
          placeholder="00000000"
          required
          value={formValues.cep || ""}
          onChange={handleChange}
          className={`${styles.inputPadrao}`}
        />
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Cidade</label>
        <input
          type="text"
          name="cidade"
          value={formValues.cidade || ""}
          onChange={handleChange}
          className={`${styles.inputPadrao}`}
        />
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Bairro</label>
        <input
          type="text"
          name="bairro"
          value={formValues.bairro || ""}
          onChange={handleChange}
          className={`${styles.inputPadrao}`}
        />
      </div>

      <div className="w-full flex justify-between gap-2">
        <div className="w-full">
          <label className="text-sm text-rentBlue">Logradouro</label>
          <input
            type="text"
            name="logradouro"
            value={formValues.logradouro || ""}
            onChange={handleChange}
            className={`${styles.inputPadrao}`}
          />
        </div>

        <div className="w-1/3">
          <label className="text-sm text-rentBlue">Número</label>
          <IMaskInput
            type="text"
            name="numero"
            value={formValues.numero || ""}
            mask="00000"
            onChange={handleChange}
            className={`${styles.inputPadrao}`}
          />
        </div>
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Complemento</label>
        <textarea
          type="text"
          name="complemento"
          rows="4"
          value={formValues.complemento || ""}
          onChange={handleChange}
          className={`${styles.inputPadrao} resize-none`}
        ></textarea>
      </div>

      <div className="w-1/2">
        <button
          type="submit"
          className={`w-full ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

export default Endereco;
