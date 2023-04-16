import React, { useContext } from "react";
import { styles } from "../styles";
import { categorias } from "../constants";
import { useNavigate } from "react-router";

const Categorias = () => {
  const navigate = useNavigate();

  const toPerfil = () => {
    navigate("/perfil");
  };

  return (
    <section className={`${styles.glassEffect} w-full fixed z-40 px-8`}>
      <div className="w-full flex items-center mt-14 justify-between py-2">
        <ul className="w-full flex gap-5 items-center justify-between">
          <li>
            {categorias.map((categoria) => (
              <a
                href={`/filtros`}
                className=" text-rentBlue text-sm pr-10 hover:text-secondary"
              >
                {categoria.title}
              </a>
            ))}
          </li>
        </ul>

        <button
          onClick={toPerfil}
          className={`flex items-center gap-2 rounded-full border-[1px] border-primary bg-primaryOpacity text-rentBlue px-5 py-1 ${styles.hoverPadraoPrimary}`}
        >
          Desapegar
          <i className="mdi mdi-label text-[22px]"></i>
        </button>
      </div>
    </section>
  );
};

export default Categorias;