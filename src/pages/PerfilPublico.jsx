import React, { useContext, useEffect, useState } from "react";
import { Avaliacao, Footer, Header } from "../components";
import { getUserById } from "../api";
import { styles } from "../styles";
import { ItemContext } from "../contexts/ItemContext";


const PerfilPublico = () => {
  useEffect(() => {
    getUser();
    console.log(user)
  }, []);
  const [user, setUser] = useState({});
  const { itemId } = useContext(ItemContext);
  const { userId } = useContext(ItemContext);

  const getUser = async () => {
    try {
      const resposta = await getUserById(userId).then((res) => {
        setUser(res.data);
        console.log(res.data)
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const backImageUser = {
    backgroundImage: `url(${user.foto})`,
  };

  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>
        <div className="flex items-center justify-around">
          <div className="items-center">
            <div
              className="rounded-full w-[250px] h-[250px] bg-cover"
              style={backImageUser}
            ></div>
            <h2 className="text-center">{user.nome}</h2>
          </div>
          <div>
            <p>Na plataforma desde: 24/04/2023</p>
            {/* <p>Na plataforma desde:{user.dtCadastro}</p> */}
            {/* <p>{user.telefone}</p> */}
            <p>(11) 9568-4120</p>
            <p> <i className="mdi mdi-email-multiple-outline"></i> {user.email}</p>
            <button className="rounded-full border-2 border-gray-500 text-gray-500 py-2 mt-2 px-8 hover:text-rentBlue hover:border-rentBlue">
            <i className="mdi mdi-chat-processing-outline text-[20px]"></i>  Iniciar chat
            </button>
          </div>
        </div>
        <div className="flex justify-around mt-20">
        <div className="rounded-md border-2 border-gray-500 w-[200px] h-[150px] flex p-7 items-center flex-col">
            <p className="text-gray-700">Avaliação média</p>
            {/* <span>{user.rating}</span> */}
            <span className="text-2xl text-gray-700">2.5</span>
            <Avaliacao valorSetado={2.5}></Avaliacao>
          </div>
          <div className="rounded-md border-2 border-gray-500 w-[300px] h-[150px] flex p-7 items-center">
            <p className="text-gray-700">Negócios feitos nos ultimos 90 dias</p>
            <p className="text-4xl text-gray-700 ml-4">102+</p>
          </div>
          <div className="rounded-md border-2 border-gray-500 w-[350px] h-[150px] flex p-7 items-center">
            <p className="text-gray-700">Intervalo médio de tempo de resposta</p>
            <p className="text-4xl text-gray-700 ml-4">3Horas</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PerfilPublico;
