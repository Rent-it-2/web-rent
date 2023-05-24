import React, { useContext, useEffect, useState } from "react";
import { Footer, Header, Item, Filtro, InputBuscar, Categorias } from "../components";
import { api, getItemByNome } from "../api";
import { styles } from "../styles";
import { FilterContext } from "../contexts/FilterContext";

const Filters = () => {
  const { itemNome, itemCategoria, itemList, buscar } = useContext(FilterContext);

  return (
    <>
      <Header />
      <Categorias/>
      <main className={`${styles.mainConfig}`}>
        <div className="w-full min-h-full flex flex-wrap">
          <div className="w-full">Resultados para: {itemNome}</div>
          <Filtro />
          <div className="w-full pl-2 flex flex-wrap justify-start gap-5 lg:w-4/5">
            {itemList?.map((item) => (
              <Item item={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Filters;
