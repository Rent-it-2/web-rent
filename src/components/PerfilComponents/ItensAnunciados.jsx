import React, { useContext, useEffect, useState } from "react";
import { styles } from "../../styles";
import {
  deleteItem,
  getFotoItemById,
  getItemById,
  getUserLoggedItems,
  patchFotoItemById,
  postUserItem,
  putItem,
} from "../../api";
import { Modal } from "../index";
import CurrencyInput from "react-currency-input-field";
import { UsuarioLogado, categorias, itemList } from "../../constants";
import { AuthContext } from "../../contexts/Auth";

const ItensAnunciados = () => {
  // const { itemList } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  // itemList

  // const [itemList, setItem] = useState([
  //   {
  //     id: 0,
  //     nome: "string",
  //     descricao: "string",
  //     valorDia: 0,
  //     tempoLocacao: 0,
  //     disponivel: 0,
  //     dtCadastro: "2023-05-22T17:03:40.878Z",
  //     categoria: {
  //       id: 0,
  //       nomeCategoria: "string",
  //     },
  //     usuario: {
  //       id: 0,
  //       nome: "string",
  //       apelido: "string",
  //       email: "string",
  //       password: "string",
  //       telefone: "string",
  //     },
  //   },
  // ]);

  // const getItem = async () => {
  //   setItem(await getUserLoggedItems());
  // };

  // useEffect(() => {
  //   getItem();
  // }, []);

  return (
    <>
      <div>
        <h1 className="font-bold text-xl">
          <i className="mdi mdi-shape pr-2" />
          Meus Itens
        </h1>
        <p className="text-gray-400 text-sm pt-2">
          Gerenciar os itens cadastrados
        </p>
      </div>

      <div className="w-full flex items-center gap-x-10">
        <div className="w-full flex flex-col justify-start gap-y-5 gap-x-7 mt-3">
          {itemList?.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <button
        className={`flex items-center gap-5 rounded-md p-1 border-[0.1px] 
        border-dashed border-gray-300 text-gray-400 
        ${styles.hoverPadraoPrimary}`}
        onClick={() => setOpenModal(true)}
      >
        <i className="mdi mdi-plus text-[22px] "></i>
        <p>Adicionar item</p>
      </button>

      <Modal
        title={"Adicionar Item"}
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      >
        <Form />
      </Modal>
    </>
  );
};

const ItemCard = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isFoto, setIsFoto] = useState(false);

  const backImage = {
    backgroundImage: `url(${getFotoItemById(item.id)})`,
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-5 rounded-lg p-1 border-[0.1px] border-gray-300">
      <div className="flex flex-wrap items-center justify-center gap-5">
        <div
          className="aspect-[4/3] min-w-[70px] min-h-[70px] rounded-lg bg-cover"
          style={backImage}
        />

        <div className="flex-col justify-start">
          <p className="text-base font-semibold">{item.nome}</p>
          <div className="flex items-end">
            <h2 className="text-base">R$ {item.valorDia} </h2>
            <span className="text-sm">/dia</span>
          </div>
          <p
            className={`text-sm ${
              !item.isAlugando ? "text-primary" : "text-green-500"
            }`}
          >
            {/* <b>Status:</b> {!item.isAlugando ? "Anúncio Pausado" : "Anunciando"} */}
          </p>
        </div>
      </div>

      <div className="w-2/4 flex items-center justify-end gap-2">
        <button
          className={`${styles.botaoPadraoPrimary} text-sm rounded-md ${styles.hoverPadraoPrimary}`}
          onClick={() => {
            setOpenModal(true), setIsFoto(true);
          }}
        >
          Alterar Foto
        </button>

        <button
          className={`${styles.botaoPadraoSecondary} text-gray-400 ${styles.hoverPadraoPrimary}`}
          onClick={() => {
            setOpenModal(true), setIsFoto(false);
          }}
        >
          <i className="mdi mdi-pencil text-[22px] "></i>
        </button>
      </div>

      {!isFoto ? (
        <Modal
          title={"Editar Item"}
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
        >
          <Form item={item} />
        </Modal>
      ) : (
        <Modal
          title={"Alterar Foto do Item"}
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
        >
          <FormModalFoto item={item} />
        </Modal>
      )}
    </div>
  );
};

const Form = ({ item }) => {
  const [isChecked, setIsChecked] = useState(0);
  const [formValues, setFormValues] = useState(item || {});

  const handleChange = (event) => {
    const { name, type } = event.target;
    let value = null;

    if (type === "file") {
      value = event.target.files[0];
    } else if (type === "checkbox") {
      setIsChecked(event.target.checked);
      if (event.target.checked) {
        value = 1;
      }
      value = 0;
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
    if (item) {
      console.log("editar", formValues);
      putItem(item.id, formValues);
    } else {
      console.log("add", formValues);
      postUserItem(formValues);
    }
  };

  const deletarItem = (e) =>{
    e.preventDefault();
    deleteItem(item.id)
  }

  useEffect(() => {
    if (item) {
      setFormValues(item);
    }
  }, [item]);

  // const categoriaSelecionada = categorias.find(
  //   (categoria) => categoria.title === item.categoria
  // );

  // const valorCategoria = categoriaSelecionada ? categoriaSelecionada.value : "";

  return (
    <form className="w-96 flex flex-wrap gap-2" onSubmit={handleSubmit}>
      
      <div className="w-full">
        <label className="text-sm text-rentBlue">Nome</label>
        <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
          <input
            type="text"
            name="nome"
            value={formValues.nome || ""}
            onChange={handleChange}
            className={`w-full appearance-none outline-none bg-transparent`}
          />
        </div>
      </div>

      <div className="w-full flex gap-2">
        <div className="w-1/2">
          <label className="text-sm text-rentBlue">Valor por Dia</label>
          <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
            <i className="mdi mdi-currency-brl text-[17px] pr-1 text-gray-500" />
            <CurrencyInput
              name="valorDia"
              placeholder="0,00"
              value={formValues.valorDia || ""}
              onChange={handleChange}
              decimalSeparator="."
              groupSeparator=","
              className={`w-full appearance-none outline-none bg-transparent`}
            />
          </div>
        </div>

        <div className="w-1/2">
          <label className="text-sm text-rentBlue">Categoria</label>
          <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
            <select
              name="categoria"
              value={formValues.categoria|| ""}
              onChange={handleChange}
              className={`w-full appearance-none outline-none bg-transparent`}
            >
              {categorias.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
            {/* <select
              name="categoria"
              value={valorCategoria || ""}
              onChange={handleChange}
              className={`w-full appearance-none outline-none bg-transparent`}
            >
              {categorias.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select> */}
            <i className="mdi mdi-menu-down text-[25px] pr-1 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Descrição</label>
        <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
          <textarea
            type="text"
            name="descricao"
            rows="4"
            value={formValues.descricao || ""}
            onChange={handleChange}
            className={`w-full appearance-none outline-none bg-transparent resize-none`}
          ></textarea>
        </div>

        <div className="flex gap-1 flex-row-reverse items-center">
          <label htmlFor="" className="text-gray-500 text-sm">
            Disponibilizar para o público
          </label>
          <input
            type="checkbox"
            checked={isChecked}
            name="disponivel"
            value={formValues.isAlugando || ""}
            onChange={handleChange}
            className="border-2 rounded-md p-1 border-gray-400"
          />
        </div>
      </div>

      <div className="w-1/2 flex gap-2">
        <button
          type="submit"
          className={`${styles.botaoPadraoPrimary} p-2 text-sm ${styles.hoverPadraoPrimary}`}
        >
          <i className={`mdi mdi-${!item ? "plus" : ""} text-[20px]`} />
          {item ? "Salvar" : "Cadastrar Item"}
        </button>

        {item && (
          <button
            className={`border-[1px] w-full p-3 border-gray-400 text-gray-400 text-sm rounded-md ${styles.hoverPadraoPrimary}`}
            onClick={deletarItem}
          >
            Remover Item
          </button>
        )}
      </div>
    </form>
  );
};

const FormModalFoto = ({ item }) => {
  const [formValues, setFormValues] = useState();

  const handleChange = (event) => {
    const file = event.target.files[0];
    setFormValues(file);
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues) {
      try {
        console.log("submit", formValues);
        patchFotoItemById(item.id, formValues);
      } catch (error) {
        console.log("Erro ao atualizar a foto:", error);
      }
    }
  };

  useEffect(() => {}, [item]);

  return (
    <form className="w-96 flex flex-wrap gap-2" onSubmit={handleSubmit}>
      <div className="w-full">
        <div className="flex rounded-md bg-gray-300 items-center justify-center py-2 px-10">
          <label htmlFor="foto">
            <i className="mdi mdi-plus text-[50px] text-gray-400 cursor-pointer"></i>
          </label>
          <input
            type="file"
            accept=".jpg, .png, image/jpeg, image/png"
            name="foto"
            id="foto"
            className={`hidden`}
            onChange={handleChange}
          />
        </div>
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

export default ItensAnunciados;
