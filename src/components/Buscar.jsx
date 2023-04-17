import { styles } from "../styles";
import { categorias } from "../constants";
import { InputBuscar } from "./index";

function Buscar() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className=" w-full flex flex-col items-center justify-center rounded-2xl bg-art-buscar bg-cover px-20 py-6 overflow-hidden">
        <h1 className="text-white text-4xl font-bold py-10 drop-shadow-xl shadow-black text-center">
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
      <div className="w-full flex flex-wrap justify-around p-10 gap-5">
        {categorias.map((categoria) => (
          <button
            href={`/filtros`}
            className={`${styles.glassEffect} py-2 px-8 rounded-full hover:text-secondary hover:border-secondary`}
          >
            {categoria.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default Buscar;
