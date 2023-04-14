import React from "react";
import { Header, ProdutosAnunciados } from "../components";
import { styles } from "../styles";
import { Header, Sidebar, Footer } from '../components'

const Perfil = () => {
  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>
      <Sidebar/>
        <ProdutosAnunciados />
      </main>
    </>
  );
};

export default Perfil;
