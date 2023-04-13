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
    <section className={`${styles.glassEffect} w-full fixed z-50 border-b-[1px]`}>
      <div className="flex justify-between py-2 px-8">
        <a href="">
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
            {/* <span class="material-icons">logout</span> */}
          </button>
        </div>
      </div>
    </section>
  );
};


export default Header;
