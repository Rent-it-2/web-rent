import React, { useEffect, useState } from "react";
import { getUserLogged } from "../../api";
import { styles } from "../../styles";
import { IMaskInput } from "react-imask";
import { Endereco, Modal } from "../index";

const MeusDados = () => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({});

  const getUser = async () => {
    setUser(await getUserLogged());
  };

  useEffect(() => {
    getUser();
  }, []);

  const backImageUser = {
    backgroundImage: `url(${user.foto})`,
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-xl">
          <i className="mdi mdi-account pr-2" />
          Meus Dados
        </h1>
        <p className="text-gray-400 text-sm pt-2">
          Atualizar suas informções pessoais
        </p>
      </div>

      <div className="w-full flex flex-wrap items-center justify-between gap-x-10">
        <div className="flex flex-wrap gap-5 items-end">
          <div className="flex flex-col justify-center items-center sm:justify-satart">
            <h3 className="font-bold">Foto de Perfil</h3>
            <div
              className="rounded-full min-w-[120px] min-h-[120px] border-[3px] border-primary bg-contain bg-no-repeat"
              style={backImageUser}
            />
          </div>

          <div className="flex flex-wrap flex-col gap-2">
            <button
              className={`${styles.botaoPadraoPrimary} text-sm rounded-md ${styles.hoverPadraoPrimary}`}
            >
              Alterar Foto
            </button>

            <button
              className={`${styles.botaoPadraoSecondary} ${styles.hoverPadraoPrimary}`}
            >
              <i className="mdi mdi-trash-can-outline text-primary text-[20px]"></i>
              Remover Foto
            </button>
          </div>
        </div>

        <div className="w-1/3 hidden items-center sm:flex">
          <p className="text-sm">Essa será a visão dos outros de você!</p>
          <img src="../../public/image_MeusDados.svg" className="w-2/3" />
        </div>
      </div>

      <div className="w-full">
        <Form user={user} />
      </div>

      <div className={`${styles.cardWhite} flex flex-col gap-5`}>
        <Endereco user={user} showEdit={true} />

        <button
          className={`w-full flex items-center gap-5 rounded-md p-1 border-[0.1px] 
        border-dashed border-gray-300 text-gray-500 
        ${styles.hoverPadraoPrimary}`}
          onClick={() => setOpenModal(true)}
        >
          <i className="mdi mdi-plus text-[22px] "></i>
          <p>Adicionar Endereço</p>
        </button>
      </div>

      <Modal
        title={"Adicionar Endereço"}
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      >
        <FormModal />
      </Modal>
    </>
  );
};

const Form = ({ user }) => {
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
    setFormValues(user);
  }, [user]);

  return (
    <form
      className="w-full flex flex-wrap gap-2 sm:w-1/2"
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        <label className="text-sm text-rentBlue">Nome Compelto</label>

        <input
          type="text"
          name="nome"
          value={formValues.nome || ""}
          onChange={handleChange}
          className={`${styles.inputPadrao}`}
        />
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Apelido</label>

        <input
          type="text"
          name="apelido"
          value={formValues.apelido || ""}
          onChange={handleChange}
          className={`${styles.inputPadrao}`}
        />
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Email</label>

        <input
          type="text"
          name="email"
          value={formValues.email || ""}
          onChange={handleChange}
          className={`${styles.inputPadrao}`}
        />
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Telefone</label>

        <IMaskInput
          type="text"
          name="telefone"
          value={formValues.telefone || ""}
          onChange={handleChange}
          mask="(00) 0000-0000"
          as={IMaskInput}
          className={`${styles.inputPadrao}`}
        />
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

const FormModal = ({ user }) => {
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

  // useEffect(() => {
  //   setFormValues(user);
  // }, [user]);

  return (
    <form className="w-96 flex flex-wrap gap-2" onSubmit={handleSubmit}>
      <div className="w-full">
        <label className="text-sm text-rentBlue">CEP</label>
        <IMaskInput
          type="text"
          name="cep"
          mask="00000-000"
          placeholder= "00000-000"
          required
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
            onChange={handleChange}
            className={`${styles.inputPadrao}`}
          />
        </div>

        <div className="w-1/3">
          <label className="text-sm text-rentBlue">Número</label>
          <input
            type="text"
            name="numLogradouro"
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
          onChange={handleChange}
          className={`${styles.inputPadrao} resize-none`}
        ></textarea>
      </div>

      <div className="w-1/2">
        <button
          type="submit"
          className={`w-full ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
        >
          <i className="mdi mdi-plus text-[20px]" />
          Adicionar Endereço
        </button>
      </div>
    </form>
  );
};

export default MeusDados;
