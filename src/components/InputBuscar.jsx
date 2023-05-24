import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItemByNome } from "../api";
import { FilterContext } from "../contexts/FilterContext";

const InputBuscar = () => {
  const navigate = useNavigate();
  const { setItemNome, buscar } = useContext(FilterContext);
  const [formValues, setFormValues] = useState();
  const [currentPage, setCurrentPage] = useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormValues(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemNome(formValues);
    buscar(formValues);
    if(currentPage != "/filtros"){
      navigate("filtros");
    }
  };

  const navigateFilters = () => {
    if(currentPage != "/filtros"){
      navigate("filtros");
    }
  };

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <form
      className="w-full rounded-full flex items-center justify-center bg-white px-3 font-poppins"
      onSubmit={handleSubmit}
    >
      <button type="submit">
        <i className="mdi mdi-magnify text-[20px] text-gray-400 sm:text-[30px]"></i>
      </button>
      <input
        className="appearance-none text-xs w-full pl-1 outline-none text-gray-400 sm:pl-6 sm:text-base"
        type="text"
        name="nomeItem"
        placeholder="O que está procurando?"
        onChange={handleChange}
      />
      <i
        className="mdi mdi-arrow-right-bold-circle text-[20px] text-primary sm:text-[30px]"
        onClick={navigateFilters}
      ></i>
    </form>
  );
};

export default InputBuscar;
