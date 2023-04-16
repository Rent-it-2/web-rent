import React, { useEffect, useState } from "react";
import { Footer, Header, Item, Filtro, InputBuscar } from "../components";
import { api } from "../api";
import { Link } from "react-router-dom";
import { styles } from "../styles";

const Filters = () => {
  const [itemList, setItem] = useState([]);

  const getItens = async () => {
    try {
      const element = [];

      for (let index = 1; index <= 5; index++) {
        const resposta = await api.get(`/users/${index}/itens`).then((res) => {
          for (let j = 0; j < res.data.length; j++) {
            element.push(res.data[j]);
          }
        });
      }
      // console.log("element", element);
      setItem(element);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItens();
  }, []);

  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>
        <Link
          to={"/filtros"}
          className="text-md flex items-center text-gray-400"
        >
          <i className="mdi mdi-arrow-left text-[25px]" />
          Voltar
        </Link>
        <div className="pb-7 pt-2">
          <InputBuscar />
        </div>
        <div className="w-full min-h-full flex flex-wrap">
          <Filtro />
          <div className="w-4/5 max-h-screen pl-2 flex flex-wrap justify-start gap-y-5 gap-x-2 mt-3 overflow-auto">
            {itemList?.map((item) => (
              <Item key={item.userId} item={item} />
            ))}
            {itemList?.map((item) => (
              <Item key={item.userId} item={item} />
            ))}
            {itemList?.map((item) => (
              <Item key={item.userId} item={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Filters;
