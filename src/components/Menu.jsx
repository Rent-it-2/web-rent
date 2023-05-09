import React, { useContext, useEffect, useState } from "react";
import { getUserById } from "../api";
import { Link } from "react-router-dom";
import { paginas } from "../constants";
import { AuthContext } from "../contexts/Auth";
import { Avatar } from "@mui/material";

const Menu = () => {
  const [user, setUser] = useState({});
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    console.log("logout");
    logout();
  };

  const getUser = async () => {
    let userInfos = JSON.parse(sessionStorage.getItem("user"));
    try {
      const resposta = await getUserById(userInfos.id).then((res) => {
        setUser(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const backImageUser = {
    backgroundImage: `url(${user.foto})`,
  };

  return (
    <>
      <div className="h-fit rounded-full text-white bg-rentBlue border-[0.1px] border-rentBlue flex pr-3 gap-3 items-center">
        <Link to={"/perfil/meus-dados"}>
          <Avatar alt={`${user.nome}`} src={`${user.foto}`} />
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
              className={`font-medium cursor-pointer text-[16px] hover:text-secondary ${
                active === pagina.link ? "text-secondary" : "text-rentBlue"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(pagina.title);
              }}
            >
              {pagina.title != "Sair" && (
                <a href={`${pagina.link}`}>
                  <i className={`mdi mdi-${pagina.icon} pr-4 text-[20px]`} />
                  {pagina.title}
                </a>
              )}
              {pagina.title === "Sair" && (
                <a href={`${pagina.link}`} onClick={handleLogout}>
                  <i className={`mdi mdi-${pagina.icon} pr-4 text-[20px]`} />
                  {pagina.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
