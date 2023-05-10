import React, { useState } from "react";
import { categorias, zonas } from "../constants";
import { styles } from "../styles";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 100,
    label: "R$100",
  },
  {
    value: 300,
    label: "R$300",
  },
  {
    value: 700,
    label: "R$700",
  },
  {
    value: 1000,
    label: "R$1000",
  },
];

const Filtro = () => {
  const [isChecked, setIsChecked] = useState(false);
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

    handleSubmit();
  };

  const handleSubmit = () => {
    // e.preventDefault();
    console.log("submit", formValues);
    // postItem(formValues)
  };

  const valuetext = (value) => {
    return `R$${value}`;
  };

  return (
    <>
      <form
        action=""
        className={`${styles.cardWhite} w-full text-rentBlue flex flex-col gap-10 px-12 mb-10 lg:px-5 lg:w-56 lg:bg-transparent lg:shadow-none`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold">
          <i className="mdi mdi-filter text-[20px]" />
          Filtrar por:
        </h2>

        <div className="">
          <h3 className="font-bold">Região:</h3>
          <div className="flex flex-wrap pt-5 gap-3 lg:flex-col">
            {zonas.map((zona) => (
              <span
                href={`#${zona.id}`}
                className="flex items-center gap-2 rounded-full px-5  py-2 text-xs border-[1px] bg-gray-300"
              >
                <input type="checkbox" name={zona.id} onChange={handleChange} />
                {zona.title}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Valor máximo por dia:</h3>
          <div className="flex flex-wrap justify-center items-start pt-3 px-5 sm:pr-10 sm:px-0">
            <Slider
              defaultValue={10}
              getAriaValueText={valuetext}
              marks={marks}
              valueLabelDisplay="auto"
              orientation="vertical"
              step={100}
              min={10}
              max={1000}
              sx={{
                color: "#FF724C",
                height: 150,
              }}
              name={"maxVal"}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="">
          <h3 className="font-bold">Categoria:</h3>
          <div className="flex flex-wrap pt-5 gap-3 lg:flex-col">
            {categorias.map((categoria) => (
              <span
                href={`#${categoria.id}`}
                className="flex items-center gap-2 rounded-full px-5  py-2 text-xs border-[1px] bg-gray-300"
              >
                <input
                  type="checkbox"
                  name={categoria.id}
                  onChange={handleChange}
                />
                {categoria.title}
              </span>
            ))}
          </div>

          {/* <button type="submit">hello</button> */}
        </div>
      </form>
    </>
  );
};

export default Filtro;
