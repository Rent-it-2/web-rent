import React from "react";
import { Buscar, Categorias, Footer, Header, Item } from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <Categorias />
      <main className="pt-36 pb-28 px-32">
        <Buscar />
        <div className="pt-10 flex justify-between">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className="pt-10 flex justify-between">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
