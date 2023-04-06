import React, { useEffect, useState } from "react";
import { Buscar, Footer, Header, Item } from "../components";
import api from "../api";

const Home = () => {
  const [itemList, setItem] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="pt-36 pb-28 px-32">
        {console.log(itemList)}
        <Buscar />
        <div className="w-full pt-10 flex flex-wrap justify-start gap-11 mt-3">
          {itemList?.map((item) => (
            <Item
              id={item.id}
              foto={item.foto}
              nome={item.nome}
              categoria={item.categoria}
              valorDia={item.valorDia}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
