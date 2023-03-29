function Buscar() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-xl bg-art-buscar bg-cover px-20 py-10 overflow-hidden">
        <h1 className="text-white text-4xl font-bold py-10">
          Bem vindo a <b className="text-primary">RENT-IT</b>, seu site para <b className="text-primary">alugar</b> o que precisar
        </h1>
        <div className="w-full rounded-full flex items-center justify-center bg-white p-2">
          <span className="material-icons text-gray-400">search</span>
          <input
            className="appearance-none eff w-full px-3 outline-none text-gray-400"
            type="text"
            placeholder="O que está procurando?"
          />
          <span className="material-icons text-primary">arrow_circle_right</span>
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
        <button className="py-2 px-8 rounded-full bg-white">Utensílios</button>
        <button className="py-2 px-8 rounded-full bg-white">Ferramentas</button>
        <button className="py-2 px-8 rounded-full bg-white">Eletrônicos</button>
        <button className="py-2 px-8 rounded-full bg-white">Vestuário</button>
        <button className="py-2 px-8 rounded-full bg-white">
          Entretenimento
        </button>
      </div>
    </>
  );
}

export default Buscar;
