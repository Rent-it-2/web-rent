import React from "react";
import { styles } from "../styles";
import { Header, Sidebar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const Perfil = () => {
  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>
        <div className="flex flex-wrap">
          <Sidebar />
          <section className={`w-3/4 px-10 flex flex-col gap-5`}>
            <Outlet />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Perfil;
