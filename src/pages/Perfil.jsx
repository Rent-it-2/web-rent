import React from "react";
import { Header, ProdutosAnunciados } from "../components";
import { styles } from "../styles";

const Perfil = () => {
  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>
        <ProdutosAnunciados />
      </main>
    </>
  );
};

export default Perfil;
