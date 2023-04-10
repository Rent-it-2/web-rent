import React, { useContext, useEffect, useState } from "react";
import { Buscar, Footer, Header, Item } from "../components";
import { ItemContext } from "../contexts/ItemContext";
import { api } from "../api";

const ItemDetalhes = () => {
  const { itemId } = useContext(ItemContext);
  const { userId } = useContext(ItemContext);

  const [item, setItem] = useState({});
  const [user, setUser] = useState({});

  const getItenById = async () => {
    try {
      const resposta = await api
        .get(`/users/${userId}/itens/${itemId}`)
        .then((res) => {
          // console.log('data',res.data);
          setItem(res.data);
        });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    try {
      const resposta = await api.get(`/users/${userId}`).then((res) => {
        // console.log('data',res.data);
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
    // backgroundImage: `url(${foto && foto[0]})` *Código para trazer o primeira imagem quando for um array, não apagar
  };

  const alugarItem = () => {
    // navigate("/perfil");
  };

  useEffect(() => {
    getItenById();
    getUserById();
  }, []);

  return (
    <>
      <Header />
      <main className="pt-36 pb-28 px-32">
        <div className="flex flex-wrap">
          <div className="w-3/5 h-min-96 h-max-96">
            <div
              className="aspect-[4/3] rounded-xl max-w-full min-w-full bg-no-repeat bg-black bg-center"
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
              <div
                className="rounded-full min-w-[60px] min-h-[60px] bg-cover"
                style={backImageUser}
              ></div>

              <div className="px-3 gap-3">
                <h3 className="text-xl font-bold">{user.nome}</h3>
                <p>Avaliação: {user.avaliacao}</p>
              </div>
            </div>

            <button className="w-full rounded-lg flex items-center justify-evenly border-[1px] border-gray-400 p-1 px-3">
              <i className="mdi mdi-chat w-1/6 cursor-pointer text-[22px]"></i>
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
                className="w-5/6 rounded-lg bg-primary p-3 text-white"
                onClick={alugarItem()}
              >
                Alugar
              </button>
              <button className="rounded-lg border-[1px] border-gray-300 p-1 px-3">
                <i className="mdi mdi-heart w-1/6 cursor-pointer text-[22px] text-gray-400"></i>
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
