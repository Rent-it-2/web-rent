import React, { useContext } from "react";
import { styles } from "../styles";
import { AuthContext } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { authenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toLogin = () => {
    navigate('/login');navigate
    logout();
  }

  const toCadastro = () => {
    navigate('/cadastro');
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <section className={`${styles.glassEffect} w-full fixed z-50  border-none`}>
      <div className="flex justify-between py-2 px-8">
        <a href="/">
          <img src="../../public/logo.svg" alt="home" className="w-28" />
        </a>
        <div className="flex gap-5">
          <button onClick={toLogin} className="rounded-full border-2 border-rentBlue text-rentBlue px-8 hover:text-secondary hover:border-secondary">
            Entrar
          </button>
          <button onClick={toCadastro} className="rounded-full bg-rentBlue text-white px-8 hover:bg-secondary">
            Cadastrar-se
          </button>

          <button onClick={handleLogout} className="rounded-full bg-rentBlue text-white px-8 hover:bg-secondary">
            Sair
            <span class="material-icons">logout</span>
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

          <button className="flex items-center gap-2 rounded-full border-[1px] border-primary bg-primaryOpacity text-rentBlue px-5 py-1 hover:text-primary hover:bg-transparent">
            Desapegar
            <i className="mdi mdi-label text-[22px]"></i>
          </button>
        </ul>
      </div>
    </section>
  );
};

export default Header;
