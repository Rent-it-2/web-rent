import React, { useEffect, useState } from "react";
import api from "../../api";
import {Item} from "../index";

const Favoritos = () => {
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
      <div>
        <h1 className="font-bold text-xl">
          <i className="mdi mdi-heart pr-2" />
          Favoritos
        </h1>
        <p className="text-gray-400 text-sm pt-2">Seus itens favoritados</p>
      </div>

      <div className="w-full flex flex-wrap gap-5 sm:gap-x-12">
        {itemList?.map((item) => (
          <Item key={item.userId} item={item} />
        ))}
      </div>
    </>
  );
};

export default Favoritos;
