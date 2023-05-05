import React, { useEffect, useState } from "react";
import { Modal } from "./index";
import { styles } from "../styles";
import { IMaskInput } from "react-imask";

const Endereco = ({ user, showEdit, children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className={`${styles.cardWhite} flex items-center flex-wrap justify-between gap-5 border-[0.1px] border-gray-300`}
    >
      <div className="w-full flex-wrap flex border-b-2  border-gray-300 justify-between">
        <div className="flex items-center justify-center gap-5">
          <p className="text-base font-semibold text-primary">
            {user.enderecoRua}, {user.enderecoNum}
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
        <FormModal user={user} />
      </Modal>
    </div>
  );
};

const FormModal = ({ user }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [formValues, setFormValues] = useState(user || {});

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
    if (user) {
      setFormValues(user);
    }
  }, [user]);

  return (
    <form className="w-96 flex flex-wrap gap-2" onSubmit={handleSubmit}>

      <div className="w-full">
        <label className="text-sm text-rentBlue">CEP</label>
        <IMaskInput
          type="text"
          name="enderecoCep"
          mask="00000-000"
          placeholder="00000-000"
          required
          value={formValues.enderecoCep || ""}
          onChange={handleChange}
          className={`${styles.inputPadrao}`}
        />
      </div>

      <div className="w-full flex justify-between gap-2">
        <div className="w-full">
          <label className="text-sm text-rentBlue">Logradouro</label>
          <input
            type="text"
            name="enderecoRua"
            value={formValues.enderecoRua || ""}
            onChange={handleChange}
            className={`${styles.inputPadrao}`}
          />
        </div>

        <div className="w-1/3">
          <label className="text-sm text-rentBlue">Número</label>
          <input
            type="text"
            name="enderecoNum"
            value={formValues.enderecoNum || ""}
            onChange={handleChange}
            className={`${styles.inputPadrao}`}
          />
        </div>
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Complemento</label>
        <textarea
          type="text"
          name="enderecoComplemento"
          rows="4"
          value={formValues.enderecoComplemento || ""}
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
