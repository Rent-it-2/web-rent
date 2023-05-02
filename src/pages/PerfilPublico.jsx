import React, { useContext, useEffect, useRef, useState } from "react";
import { Avaliacao, Footer, Header, Item } from "../components";
import { getUserById, getUserItem } from "../api";
import { styles } from "../styles";
import { ItemContext } from "../contexts/ItemContext";
import { UsuarioLogado } from "../constants";

const PerfilPublico = () => {
  const { userId } = useContext(ItemContext);
  const [user, setUser] = useState({});
  // const [itemList, setItem] = useState([]);

  // const getItem = async () => {
  //   setItem(await getUserItem(userId));
  // };

  const getUser = async () => {
    try {
      const resposta = await getUserById(userId).then((res) => {
        setUser(res.data);
        console.log(UsuarioLogado);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    // getItem();
    console.log(user.itens);
  }, []);

  const backImageUser = {
    backgroundImage: `url(${user.foto})`,
  };

  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>

        <div className="flex items-end justify-end bg-white rounded-2xl">
          <div className="flex gap-5 p-5">
            <div className="flex flex-col gap-4">
              <div
                className="rounded-full w-[150px] h-[150px] bg-cover"
                style={backImageUser}
              ></div>
              <h2 className="text-center font-bold text-lg">{user.apelido}</h2>
            </div>

            <div className="flex flex-col justify-between text-gray-400">
              {/* <p>Na plataforma desde:24/04/2023</p> */}
              <p>
                <i className="mdi mdi-email-multiple-outline" /> Na plataforma
                desde:{user.dtCadastro}
              </p>
              {/* <p>{user.telefone}</p> */}
              <p>
                <i className="mdi mdi-email-multiple-outline" /> (11) 9568-4120
              </p>
              <p>
                <i className="mdi mdi-email-multiple-outline" /> {user.email}
              </p>
              <button
                className={`flex items-center w-fit gap-2 rounded-full border-[1px] border-rentBlue text-rentBlue py-2 px-8 ${styles.hoverPadraoPrimary}`}
              >
                <i className="mdi mdi-chat-processing-outline text-[20px]"></i>{" "}
                Iniciar chat
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-around mt-10 text-gray-500 font-bold text-xl sm:flex-nowrap">
          <div className="w-full rounded-2xl border-[1px] border-gray-500 flex p-7 items-center flex-col gap-3">
            <h1 className="">Avaliação média</h1>
            <span className="text-2xl">2.5</span>
            <Avaliacao valorSetado={2.5}></Avaliacao>
          </div>

          <div className="w-full rounded-2xl border-[1px] border-gray-500 flex p-7 items-center">
            <h1 className="">Negócios feitos nos ultimos 90 dias</h1>
            <p className="text-4xl ml-4">102+</p>
          </div>
          <div className="w-full rounded-2xl border-[1px] border-gray-500 flex p-7 items-center">
            <h1 className="">Intervalo médio de tempo de resposta</h1>
            <p className="text-4xl ml-4">3Horas</p>
          </div>
        </div>

        <div className="rounded-lg bg-white py-5 px-2 mt-10 sm:p-5">
          <h2 className="text-xl font-bold">Anúncios de {user.apelido}</h2>
          <Carousel dataSource={user.itens} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export const Carousel = ({ dataSource }) => {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="flex items-center gap-1">
      {/* <button
        onClick={handleLeftClick}
        className={`bg-rentBlue bg-opacity-0 text-rentBlue hover:bg-opacity-50 sm:text-[35px]`}
      >
        <i className="mdi mdi-chevron-left" />
      </button> */}

      <div
        ref={carousel}
        className="max-w-full flex gap-3 items-center justify-center mt-3 overflow-hidden scroll-smooth sm:h-[22rem sm:justify-start"
      >
        {dataSource?.map((item) => (
          <Item key={item.userId} item={item} />
        ))}
      </div>

      {/* <button
        onClick={handleRightClick}
        className={`bg-rentBlue bg-opacity-0 text-rentBlue hover:bg-opacity-50 sm:text-[35px]`}
      >
        <i className="mdi mdi-chevron-right" />
      </button> */}
    </div>
  );
};

export default PerfilPublico;
