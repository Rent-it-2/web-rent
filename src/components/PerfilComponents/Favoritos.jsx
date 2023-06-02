import React, { useContext, useEffect, useState } from "react";
import api, { getUserItensFavoritos } from "../../api";
import {Item} from "../index";
import { AuthContext } from "../../contexts/Auth";
import { itemFavoritos } from "../../constants";

const Favoritos = () => {
  // const { itemFavoritos } = useContext(AuthContext);
  // const [itemFavoritos, setitemFavoritos] = useState([]);

  // const getFavoritos = async () =>{
  //   try {
  //     await getUserItensFavoritos().then((res) => {
  //       setitemFavoritos(res.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getFavoritos();
  // }, []);

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
        {itemFavoritos?.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </>
  );
};

export default Favoritos;
