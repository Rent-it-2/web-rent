import React, { useEffect, useState } from "react";
import { Buscar, Footer, Header, Item } from "../components";
import api from "../api";

const Home = () => {
  const [itemList, setItem] = useState([]);

  const getItens = async () => {
    try {
      const element = [];

      // const usersQuantity = await api.get(`/users`).then((res) => {
      //   return res.data.length
      // });

      // console.log(usersQuantity);

      for (let index = 1; index <= 5; index++) {
        const resposta = await api.get(`/users/${index}/itens`).then((res) => {
          for (let j = 0; j < res.data.length; j++) {
            element.push(res.data[j]);
          }
        });
        // console.log("element", element);
      }
      console.log("element", element);

      setItem(element);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // api
    //   .get()
    //   .then((res) => {
    //     console.log(res.data);
    //     setItem(res.data);
    //   })
    //   .catch((erro) => {
    //     console.log(erro);
    //   });
    getItens();
  }, []);

  return (
    <>
      <Header />
      <main className="pt-36 pb-28 px-32">
        <Buscar />
        <div className="w-full pt-10 flex flex-wrap justify-start gap-y-5 gap-x-11 mt-3">
          {itemList?.map((item) => (
            <Item key={item.userId} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
