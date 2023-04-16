import React from "react";
import { styles } from "../styles";

const Modal = ({isOpen, children, setModalOpen, title}) => {
  if (isOpen) {
    return <div className={`${styles.bgModal}`}>
        <div className="fixed rounded-lg top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 bg-white">

          <div className="w-full flex justify-between items-center">
            <header>
              <h2 className="text-xl font-bold pr-10">{title}</h2>
            </header>
            <button className={`${styles.hoverPadraoPrimary} hover:border-0`} onClick={setModalOpen}>
              <i className="mdi mdi-close text-[25px]"/>
            </button>
          </div>

          <div className="">
            {children}
          </div>
          
        </div>
    </div>
  }
  return null;
};

export default Modal;
