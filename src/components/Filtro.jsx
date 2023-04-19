import React from "react";
import { categorias, zonas } from "../constants";
import { styles } from "../styles";

const Filtro = () => {
  return (
    <>
      <form
        action=""
        className={`w-56 text-rentBlue flex flex-col gap-10 px-5`}
      >
        <h2 className="text-xl font-bold">
          <i className="mdi mdi-filter text-[20px]"/>
          Filtrar por:
        </h2>

        <div className="">
          <h3 className="font-bold">Região:</h3>
          <div className="flex flex-wrap pt-5 gap-3">
            {zonas.map((zona) => (
              <button
                href={`#${zona.id}`}
                className="rounded-full py-2 text-xs px-1 border-[1px] border-black"
              >
                {zona.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Valor por dia:</h3>
          <div className="flex flex-wrap ">
            <input type="range" name="" id="" className="w-full" />
          </div>

          {/* <div className="w-full flex gap-2">
              <div className="flex items-center gap-2">
                <label className="text-sm">De:</label>
                <input
                  type="number"
                  placeholder="00,00"
                  className="w-full border-[1px] rounded-md p-2 border-black outline-none text-xs"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm">Até:</label>
                <input
                  type="number"
                  placeholder="00,00"
                  className="w-full border-[1px] rounded-md p-2 border-black outline-none text-xs"
                />
              </div>
            </div> */}
        </div>

        <div className="">
          <h3 className="font-bold">Categoria:</h3>
          <div className="flex flex-wrap gap-3 justify-center pt-5">
            {categorias.map((categoria) => (
              <button
                href={`#${categoria.id}`}
                className="rounded-full py-2 px-1 border-[1px] border-black text-xs"
              >
                {categoria.title}
              </button>
            ))}
          </div>
        </div>
      </form>
    </>
  );
};

export default Filtro;
