import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItemByNome } from "../api";

const InputBuscar = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { name, type } = event.target;
    let value = null;

    if (type === "file") {
      value = event.target.files[0];
    } else if (type === "checkbox") {
      setIsChecked(event.target.checked);
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    getItemByNome(formValues);
    navigate("filtros");
  };

  const navigateFilters = () => {
    navigate("filtros");
  };

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
        onSubmit={handleChange}
      />
      <i
        className="mdi mdi-arrow-right-bold-circle text-[20px] text-primary sm:text-[30px]"
        onClick={navigateFilters}
      ></i>
    </form>
  );
};

export default InputBuscar;
