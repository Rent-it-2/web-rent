import React from 'react'
import { useNavigate } from 'react-router-dom';

const InputBuscar = () => {
    const navigate = useNavigate();

    const navigateFilters = () => {
      navigate("/filtros");
    };
  
    return (
      <div className="w-full rounded-full border-[0.1px] border-gray-400 flex items-center justify-center bg-white px-3">
        <i className="mdi mdi-magnify text-gray-400 text-[30px] h-fit"></i>
        <input
          className="appearance-none w-full pl-6 outline-none text-gray-400"
          type="text"
          placeholder="O que está procurando?"
        />
        <i
          className="mdi mdi-arrow-right-bold-circle text-primary text-[30px] h-fit"
          onClick={navigateFilters}
        ></i>
      </div>
    );
}

export default InputBuscar;