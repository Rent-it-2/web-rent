import React from "react";
import { styles } from "../styles";

const Header = () => {
  return (
    <section className={`${styles.glassEffect} w-full fixed z-50  border-none`}>
      <div className="flex justify-between py-2 px-8">
        <a href="">
          <img src="../../public/logo.svg" alt="home" className="w-28" />
        </a>
        <div className="flex gap-5">
          <button className="rounded-full border-2 border-rentBlue text-rentBlue px-8 hover:text-secondary hover:border-secondary">
            Entrar
          </button>
          <button className="rounded-full bg-rentBlue text-white px-8 hover:bg-secondary">
            Cadastrar-se
          </button>
        </div>
      </div>
      <Categorias />
    </section>
  );
};

const Categorias = () => {
  return (
    <section
      className="w-full px-8
        border-b-[1px] border-t-[1px] border-gray-300"
    >
      <div className="w-full flex items-center py-1">
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

export default Header;
