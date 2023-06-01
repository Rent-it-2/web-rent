import React, { useState } from "react";
import { categorias, zonas } from "../constants";
import { styles } from "../styles";

import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { postPesquisarItem } from "../api";

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

const Filtro = ({nome}) => {
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
    postPesquisarItem(nome, formValues);
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
          <h3 className="font-bold">Categoria:</h3>
          <div className="flex flex-wrap pt-5 gap-3 lg:flex-col">
            <FormControl>
              <RadioGroup
                name="categoria"
                onChange={handleChange}
              >
                {categorias.map((categoria) => (
                  <FormControlLabel
                    value={categoria.value}
                    control={<Radio />}
                    label={categoria.title}
                  />
                ))}
              </RadioGroup>
            </FormControl>
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
              min={1}
              max={1000}
              sx={{
                color: "#FF724C",
                height: 150,
              }}
              name={"preco"}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Filtro;
