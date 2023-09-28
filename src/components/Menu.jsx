import React, { useContext, useEffect, useState } from "react";
import { getFotoUserById, getUserById } from "../api";
import { Link } from "react-router-dom";
import { foto, paginas } from "../constants";
import { AuthContext } from "../contexts/Auth";
import { Avatar } from "@mui/material";

const Menu = () => {
  const [toggle, setToggle] = useState(false);
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="h-fit rounded-full text-white bg-rentBlue border-[0.1px] border-rentBlue flex pr-3 gap-3 items-center">
        <Link to={"/perfil/meus-dados"}>
          <Avatar alt={`${user.apelido}`} src={`${foto}`} />
        </Link>

        <h3 className="hidden text-md sm:block">{user.apelido}</h3>
        <div className="">
          <i
            onClick={() => setToggle(!toggle)}
            className="mdi mdi-menu-down text-[25px]"
          ></i>
        </div>
      </div>

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-white rounded-md absolute top-11 right-6 mx-4 my-2 min-w-[140px] z-10`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {paginas.map((pagina) => (
            <li
              key={pagina.title}
              className={`font-medium cursor-pointer text-[16px] hover:text-secondary `}
              // ${
              //   active === pagina.link ? "text-secondary" : "text-rentBlue"
              // }`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {pagina.title != "Sair" && (
                // <a href={`${pagina.link}`}>
                //   <i className={`mdi mdi-${pagina.icon} pr-4 text-[20px]`} />
                //   {pagina.title}
                // </a>

                <Link key={pagina.link} to={`${pagina.link}`}>
                  <i className={`mdi mdi-${pagina.icon} pr-4 text-[20px]`} />
                  {pagina.title}
                </Link>
              )}
              {pagina.title === "Sair" && (
                <a href={`${pagina.link}`} onClick={handleLogout}>
                  <i className={`mdi mdi-${pagina.icon} pr-4 text-[20px]`} />
                  {pagina.title}
                </a>

                // <Link key={pagina.link} to="pagina.link" onClick={handleLogout}>
                //   <i className={`mdi mdi-${pagina.icon} pr-4 text-[20px]`} />
                //   {pagina.title}
                // </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
