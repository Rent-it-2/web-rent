import React, { useContext } from "react";
import { styles } from "../styles";
import { AuthContext } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { Menu } from "./index";

const Header = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <section
      className={`${styles.glassEffect} w-full fixed z-50 border-b-[1px] border-t-0`}
    >
      <div className="flex justify-between py-2 px-8">
        <a href="/">
          <img src="../../public/logo.svg" alt="home" className="w-28" />
        </a>
        <div className="flex gap-5">
          {!authenticated && <ButtonsNoAuth />}

          {authenticated && <Menu/>}
        </div>
      </div>
    </section>
  );
};

const ButtonsNoAuth = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  const toCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <>
      <button
        onClick={toLogin}
        className="rounded-full border-2 border-rentBlue text-rentBlue px-8 hover:text-secondary hover:border-secondary"
      >
        Entrar
      </button>
      <button
        onClick={toCadastro}
        className="rounded-full bg-rentBlue text-white px-8 hover:bg-secondary"
      >
        Cadastrar-se
      </button>
    </>
  );
};

export default Header;
