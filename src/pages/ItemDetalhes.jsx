import React, { useContext, useEffect, useState } from "react";
import { Avaliacao, Footer, Header } from "../components";
import { ItemContext } from "../contexts/ItemContext";
import { getItemById, getUserById, putItem } from "../api";
import { styles } from "../styles";
import { Link, useNavigate } from "react-router-dom";

const ItemDetalhes = () => {
  const { itemId } = useContext(ItemContext);
  const { userId } = useContext(ItemContext);

  const [item, setItem] = useState({});
  const [user, setUser] = useState({});
  // const [fotoList, setFotos] = useState([6]);

  const getItem = async () => {
    const element = [];

    try {
      const resposta = await getItemById(userId, itemId).then((res) => {
        setItem(res.data);
        for (let index = 0; index < 6; index++) {
          element.push[res.data.foto];
        }
        setFotos(element);
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

  const favoritarItem = () => {
    const itemAtualizado = item;
    itemAtualizado.isFavorito = true;
    console.log("Favoritado", itemAtualizado);
    putItem(userId, item.id, itemAtualizado);
  };

  const backImage = {
    backgroundImage: `url(${item.foto})`,
    // backgroundImage: `url(${foto && foto[0]})` *Código para trazer o primeira imagem quando for um array, não apagar
  };

  const backImageUser = {
    backgroundImage: `url(${user.foto})`,
  };

  useEffect(() => {
    getItem();
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

        <div className="flex justify-center flex-wrap sm:justify-between">
          <div className="w-full flex flex-col gap-10 sm:w-[70%]">
            <div
              className="aspect-video max-w-full min-w-full bg-no-repeat bg-contain bg-black bg-center"
              style={backImage}
            ></div>

            <div className="rounded-lg p-5 bg-white">
              <h2 className="text-xl font-bold pb-10">Detalhes</h2>
              <p>{item.descricao}</p>
            </div>

          </div>

          <div className="flex flex-col gap-10 p-8">
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
                  <h3 className="text-xl font-bold">{user.apelido}</h3>
                </Link>
                <Avaliacao valorSetado={2.5} />
              </div>
            </div>

            <button
              className={`w-full rounded-lg flex items-center justify-evenly border-[1px] 
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
              <p className="text-xs text-gray-400">
                Cobrança recorrente no cartão de crédito
              </p>
            </div>

            <div className="w-full flex gap-2">
              <Link to={`/item/alugar/${item.id}`} className={`w-5/6 ${styles.botaoPadraoPrimary} ${styles.hoverPadraoPrimary}`}>
                Alugar
              </Link>

              <button
                className={`rounded-lg border-[1px] text-gray-400 border-gray-300 p-1 px-3  ${styles.hoverPadraoPrimary}`}
              >
                <i className="mdi mdi-heart w-1/6 cursor-pointer text-[22px]" onClick={favoritarItem} />
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
