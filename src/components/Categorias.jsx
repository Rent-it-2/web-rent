import React, { useContext } from "react";
import { styles } from "../styles";
import { categorias } from "../constants";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Categorias = () => {
  const navigate = useNavigate();

  const toPerfil = () => {
    navigate("/perfil/itens");
  };

  const navigateFilters = () => {
    if(currentPage != "/filtros"){
      navigate("/filtros");
    }
  };

  return (
    <section className={`hidden w-full pt-1 sm:block`}>
      <div className="w-full flex items-center justify-center">
        <ul className="w-full flex gap-5 items-center justify-between">
          <li>
            {categorias.map((categoria) => (
              // <button
              //   className=" text-white text-xs px-5 font-poppins hover:text-secondary"
              //   onClick={navigate("/filtros")}
              // >
              //   {categoria.title}
              // </button>

              <Link
                to="/filtros"
                className=" text-white text-xs px-5 font-poppins hover:text-secondary"
              >
                {categoria.title}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categorias;
