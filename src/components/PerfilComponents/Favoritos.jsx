import React, { useEffect, useState } from "react";
import api, { getUserItensFavoritos } from "../../api";
import {Item} from "../index";

const Favoritos = () => {
  const [itemList, setItemList] = useState([]);

  const getFavoritos = async () =>{
    try {
      await getUserItensFavoritos().then((res) => {
        setItemList(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFavoritos();
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
          <Item item={item} />
        ))}
      </div>
    </>
  );
};

export default Favoritos;
