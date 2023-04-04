import React, { useContext } from "react";
import { styles } from "../styles";
import { AuthContext } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";

const Categorias = () => {
    return (
      <section
      className={`${styles.glassEffect} w-full fixed z-40`}
      >
        <div className="w-full flex items-center py-1 mt-16 border-b-[0.1px] p-2">
          <ul className="w-full flex gap-5 items-center justify-between">
            <li>
              <a
                className=" text-rentBlue text-sm
                          pr-10 hover:text-secondary cursor-pointer"
              >
                Utensilios Domésticos
              </a>
              <a
                className=" text-rentBlue text-sm
                          pr-10 hover:text-secondary cursor-pointer"
              >
                Ferramentas
              </a>
              <a
                className=" text-rentBlue text-sm
                          pr-10 hover:text-secondary cursor-pointer"
              >
                Eletrônicos
              </a>
              <a
                className=" text-rentBlue text-sm
                          pr-10 hover:text-secondary cursor-pointer"
              >
                Vestuário
              </a>
              <a
                className=" text-rentBlue text-sm
                          pr-10 hover:text-secondary cursor-pointer"
              >
                Entretenimento
              </a>
            </li>
  
            <button className="flex items-center gap-2 rounded-full border-[1px] border-primary bg-primaryOpacity text-rentBlue px-5 py-2 hover:text-primary hover:bg-transparent">
              Desapegar
              <span class="material-icons">label</span>
            </button>
          </ul>
        </div>
      </section>
    );
  };

export default Categorias;
