import React, { useContext, useState } from "react";
import { paginas } from "../constants";
import { AuthContext } from "../contexts/Auth";

const Sidebar = () => {
   const [toggle, setToggle] = useState(false);
   const [active, setActive] = useState("");
   
   const { logout } = useContext(AuthContext);

   const handleLogout = () => {
      console.log("logout");
      logout();
    };

  return (
    <>
      <aside
        id="default-sidebar"
        className="w-1/4 h-full transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto border-r-2 border-zinc-300">
         <ul className="space-y-2 font-medium">
            {paginas.map((pagina) => (
              <li
                key={pagina.title}
                className={`font-medium cursor-pointer text-[16px]  ${
                  active === pagina.link ? "bg-gray-200 group-text-gray-900 group-text-white" : "text-rentBlue"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(pagina.link);
                }}
              >
                {pagina.title != "Sair" && (
                  <a href={`${pagina.link}`} className="flex items-center p-2 rounded-lg dark:hover:bg-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
                    <i className={`mdi mdi-${pagina.icon} pr-4 text-[20px]`} />
                    {pagina.title}
                  </a>
                )}
                {pagina.title === "Sair" && (
                  <a href={`${pagina.link}`} onClick={handleLogout} className="flex items-center p-2 rounded-lg dark:hover:bg-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
                    <i className={`mdi mdi-${pagina.icon} pr-4 text-[20px]`} />
                    {pagina.title}
                  </a>
                )}
              </li>
            ))}

         </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
