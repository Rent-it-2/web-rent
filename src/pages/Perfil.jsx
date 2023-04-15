import React from "react";
import { styles } from "../styles";
import { Header, Sidebar, Footer} from "../components";
import { Outlet } from "react-router-dom";

const Perfil = () => {
  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>
        <div className="flex flex-wrap">
          <Sidebar/>
          <Outlet/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Perfil;
