import React, { useEffect, useState } from "react";
import { Buscar, Footer, Header, Item, Categorias } from "../components";
import api, { getAllItem } from "../api";
import { styles } from "../styles";

const Home = () => {
  const [itemList, setItem] = useState([]);

  const getItens = async () => {
    try {
      const element = [];

      for (let index = 1; index <= 5; index++) {
        const resposta = await getAllItem(index).then((res) => {
          for (let j = 0; j < res.data.length; j++) {
            element.push(res.data[j]);
          }
        });
      }
      console.log("element", element);
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
      {/* <Categorias /> */}
      <main className={`${styles.mainConfig} flex flex-col gap-10`}>
        <Buscar />

        <div className=" rounded-2xl p-5 bg-white">
          <h2 className="text-xl font-bold">Mais Procurados</h2>
          <div className="w-full flex flex-wrap justify-start gap-y-5 gap-x-7 mt-3">
            {itemList?.map((item) => (
              <Item key={item.userId} item={item} />
            ))}
          </div>
        </div>

        <div className=" rounded-2xl p-5 bg-white">
          <h2 className="text-xl font-bold">Sugestões</h2>
          <div className="w-full flex flex-wrap justify-start gap-y-5 gap-x-7 mt-3">
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

export default Home;
