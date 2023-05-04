import React, { useEffect, useState } from "react";
import { Footer, Header, Item, Filtro, InputBuscar, Categorias } from "../components";
import { api } from "../api";
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
      <Categorias/>
      <main className={`${styles.mainConfig}`}>
        <div className="w-full min-h-full flex flex-wrap">
          <Filtro />
          <div className="w-full pl-2 flex flex-wrap justify-start gap-5 lg:w-4/5">
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
