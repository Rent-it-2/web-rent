import React from 'react'
import { useNavigate } from 'react-router-dom';

const InputBuscar = () => {
    const navigate = useNavigate();

    const navigateFilters = () => {
      navigate("/filtros");
    };
  
    return (
      <div className="w-full rounded-full flex items-center justify-center bg-white px-3 font-poppins">
        <i className="mdi mdi-magnify text-[20px] text-gray-400 sm:text-[30px]"></i>
        <input
          className="appearance-none text-xs w-full pl-1 outline-none text-gray-400 sm:pl-6 sm:text-base"
          type="text"
          placeholder="O que está procurando?"
        />
        <i
          className="mdi mdi-arrow-right-bold-circle text-[20px] text-primary sm:text-[30px]"
          onClick={navigateFilters}
        ></i>
      </div>
    );
}

export default InputBuscar;