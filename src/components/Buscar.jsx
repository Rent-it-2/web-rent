import { styles } from "../styles";

function Buscar() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className=" w-full flex flex-col items-center justify-center rounded-2xl bg-art-buscar bg-cover px-20 py-6 overflow-hidden">
        <h1 className="text-white text-4xl font-bold py-10 drop-shadow-xl shadow-black text-center">
          Bem vindo a <b className="">RENT-IT</b>, seu site para <b className="text-pri">alugar</b> o que precisar
        </h1>
        <div className="w-full rounded-full flex items-center justify-center bg-white p-2">
          <span className="material-icons text-gray-400 text-[35px]">search</span>
          <input
            className="appearance-none w-full pl-6 outline-none text-gray-400"
            type="text"
            placeholder="O que está procurando?"
          />
          <span className="material-icons text-primary text-[35px]">arrow_circle_right</span>
        </div>
        <Categorias />
      </div>
    </section>
  );
}
function Categorias() {
  return (
    <>
      <div className="w-full flex justify-around p-10 gap-5">
        <button className={`${styles.glassEffect} py-2 px-8 rounded-full hover:text-secondary hover:border-secondary `} >Utensílios</button>
        <button className={`${styles.glassEffect} py-2 px-8 rounded-full hover:text-secondary hover:border-secondary`} >Ferramentas</button>
        <button className={`${styles.glassEffect} py-2 px-8 rounded-full hover:text-secondary hover:border-secondary`} >Eletrônicos</button>
        <button className={`${styles.glassEffect} py-2 px-8 rounded-full hover:text-secondary hover:border-secondary`} >Vestuário</button>
        <button className={`${styles.glassEffect} py-2 px-8 rounded-full hover:text-secondary hover:border-secondary`} >
          Entretenimento
        </button>
      </div>
    </>
  );
}

export default Buscar;
