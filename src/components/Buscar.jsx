import { styles } from "../styles";
import { categorias } from "../constants";
import { InputBuscar } from "./index";

function Buscar() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className=" w-full rounded-2xl flex flex-col items-center justify-center bg-art-buscar bg-cover px-5 py-6 overflow-hidden sm:px-20">
        <h1 className="text-white font-bold text-xl py-10 drop-shadow-xl shadow-black text-center sm:text-4xl">
          Bem vindo a <b className="">RENT-IT</b>, seu site para{" "}
          <b className="text-pri">alugar</b> o que precisar
        </h1>
        <InputBuscar/>
        <Categorias />
      </div>
    </section>
  );
}

function Categorias() {
  return (
    <>
      <div className="w-full flex flex-wrap justify-center gap-3 py-5 sm:p-10 sm:gap-5 ss:justify-around">
        {categorias.map((categoria) => (
          <button
            href={`/filtros`}
            className={`${styles.glassEffect} text-xs p-1 rounded-full hover:text-secondary hover:border-secondary sm:py-2 sm:px-8 sm:text-base`}
          >
            {categoria.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default Buscar;
