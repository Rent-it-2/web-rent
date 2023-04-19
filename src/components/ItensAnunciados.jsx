import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { getUserLoggedItems } from "../api";
import { Modal } from "./index";
import { IMaskInput } from "react-imask";
import CurrencyInput from "react-currency-input-field";
import { categorias } from "../constants";

const ItensAnunciados = () => {
  const [openModal, setOpenModal] = useState(false);
  const [itemList, setItem] = useState([]);

  const getItem = async () => {
    setItem(await getUserLoggedItems());
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <div>
        <h1 className="font-bold text-xl">
          <i className="mdi mdi-shape pr-2" />
          Meus Itens
        </h1>
        <p className="text-gray-400 text-sm pt-2">
          Gerenciar itens cadastrados
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
        <Form/>
      </Modal>
    </>
  );
};

const ItemCard = ({
  item: { id, userId, foto, nome, categoria, valorDia, isAlugando },
}) => {
  const backImage = {
    backgroundImage: `url(${foto})`,
  };

  return (
    <div className="flex items-center gap-5 rounded-lg p-1 border-[0.1px] border-gray-300">
      <div
        className="aspect-[4/3] min-w-[70px] min-h-[70px] rounded-lg bg-contain"
        style={backImage}
      />

      <div className="w-2/5">
        <p className="text-base font-semibold">{nome}</p>
        <div className="flex items-end">
          <h2 className="text-base">R$ {valorDia} </h2>
          <span className="text-sm">/dia</span>
        </div>
        <p
          className={`text-sm ${
            !isAlugando ? "text-primary" : "text-green-500"
          }`}
        >
          <b>Status:</b> {!isAlugando ? "Não anunciado" : "Anunciando"}
        </p>
      </div>

      <div className="w-2/5 flex items-center justify-end gap-2">
        <button
          className={`${styles.botaoPadraoPrimary} text-sm rounded-md ${styles.hoverPadraoPrimary}`}
        >
          Pausar Anúncio
        </button>

        <button
          className={`rounded-lg border-[1px] border-gray-300 p-1 px-3 text-gray-400 ${styles.hoverPadraoPrimary}`}
        >
          <i className="mdi mdi-pencil w-1/6 cursor-pointer text-[22px] "></i>
        </button>
      </div>
    </div>
  );
};

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { name, type } = event.target;
    let value = null;

    if (type === "file") {
      value = event.target.files[0];
    } 
    else if (type === "checkbox") {
      setIsChecked(!!event.target.checked); 
      value = !isChecked;
    }else {
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

  return (
    <form className="w-96 flex flex-wrap gap-2" onSubmit={handleSubmit}>
      <div className="">
        <label className="text-sm text-rentBlue">Foto do item</label>
        <div className="w-fit flex rounded-md bg-gray-300 items-center justify-center py-2 px-10">
          <label htmlFor="foto">
            <i className="mdi mdi-plus text-[50px] text-gray-400 cursor-pointer"></i>
          </label>
          {/* <input type="file" name="foto" id="foto" className={`hidden`} onChange={e => setItem(e.target.files[0])} /> */}
          <input
            type="file"
            name="foto"
            id="foto"
            className={`hidden`}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full">
        <label className="text-sm text-rentBlue">Nome</label>
        <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
          <input
            type="text"
            name="nome"
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
              onChange={handleChange}
              decimalSeparator=","
              groupSeparator="."
              // prefix="R$ "
              className={`w-full appearance-none outline-none bg-transparent`}
            />
          </div>
        </div>

        <div className="w-1/2">
          <label className="text-sm text-rentBlue">Categoria</label>
          <div className="flex rounded-md bg-gray-300 text-sm items-center p-2">
            <select
              name="categoria"
              // value={selectedOption}
              onChange={handleChange}
              className={`w-full appearance-none outline-none bg-transparent`}
            >
              {categorias.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
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
            name="isAlugado"
            onChange={handleChange}
            className="border-2 rounded-md p-1 border-gray-400"
          />
        </div>
      </div>

      <div className="w-1/2">
        <button
          type="submit"
          className={`${styles.botaoPadraoPrimary} p-2 ${styles.hoverPadraoPrimary}`}
        >
          <i className="mdi mdi-plus text-[20px]" />
          Cadastrar Item
        </button>
      </div>
    </form>
  );
};

export default ItensAnunciados;
