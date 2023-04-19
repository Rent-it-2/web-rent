import React, { useContext, useEffect, useState } from "react";
import { Avaliacao, Footer, Header } from "../components";
import { ItemContext } from "../contexts/ItemContext";
import { getItemById, getUserById } from "../api";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const ItemDetalhes = () => {
  const { itemId } = useContext(ItemContext);
  const { userId } = useContext(ItemContext);

  const [item, setItem] = useState({});
  const [user, setUser] = useState({});

  const getIten = async () => {
    try {
      const resposta = await getItemById(userId, itemId).then((res) => {
        setItem(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const resposta = await getUserById(userId).then((res) => {
        setUser(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const backImage = {
    backgroundImage: `url(${item.foto})`,
    // backgroundImage: `url(${foto && foto[0]})` *Código para trazer o primeira imagem quando for um array, não apagar
  };

  const backImageUser = {
    backgroundImage: `url(${user.foto})`,
  };

  const alugarItem = () => {
    // navigate("/perfil");
  };

  useEffect(() => {
    getIten();
    getUser();
  }, []);

  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>
        <div className="py-2">
          <Link
            to={"/filtros"}
            className="text-md flex items-center text-gray-400"
          >
            <i className="mdi mdi-arrow-left text-[25px]" />
            Voltar
          </Link>
        </div>

        <div className="flex flex-wrap">
          <div className="w-3/5 h-min-96 h-max-96">
            <div
              className="aspect-video max-w-full min-w-full bg-no-repeat bg-black bg-center"
              style={backImage}
            ></div>
            <h2 className="text-xl font-bold py-10">Descrição</h2>
            <p>{item.descricao}</p>
          </div>

          <div className="flex flex-col gap-10 px-8 py-2">
            <div>
              <p className="text-lg text-gray-400">{item.categoria}</p>
              <h1 className="text-2xl font-bold">{item.nome}</h1>
            </div>

            <div className="flex">
              <Link to={`/locador/${user.id}`}>
                <div
                  className="rounded-full w-[60px] h-[60px] bg-cover"
                  style={backImageUser}
                ></div>
              </Link>
              <div className="px-3">
                <Link to={`/locador/${user.id}`}>
                    <h3 className="text-xl font-bold">{user.nome}</h3>
                </Link>
                {/* <p>Avaliação: {3.5}</p> */}
                <Avaliacao valorSetado={2.5} />
              </div>
            </div>

            <button
              className={`w-64 rounded-lg flex items-center justify-evenly border-[1px] 
            border-gray-400 p-1 px-3 ${styles.hoverPadraoPrimary}`}
            >
              <i className="mdi mdi-chat text-[22px]"></i>
              Conversar com o locador
            </button>

            <div className="">
              <div className="flex items-end">
                <h2 className="text-4xl font-bold">R$ {item.valorDia} </h2>
                <span className="text-sm">/dia</span>
              </div>
              <p className="text-sm text-gray-400">
                Cobrança recorrente no cartão de crédito
              </p>
            </div>

            <div className="w-full flex gap-2">
              <button
                className={`w-5/6 ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}
                onClick={alugarItem()}
              >
                Alugar
              </button>
              <button className={`rounded-lg border-[1px] text-gray-400 border-gray-300 p-1 px-3  ${styles.hoverPadraoPrimary}`}>
                <i className="mdi mdi-heart w-1/6 cursor-pointer text-[22px]"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ItemDetalhes;
