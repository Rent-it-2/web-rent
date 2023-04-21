import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { Footer, Header } from "../components";
import { styles } from "../styles";
import { getItemById, getUserById } from "../api";

const Pagamentos = () => {
  const { itemId } = useContext(ItemContext);
  const { userId } = useContext(ItemContext);

  const [item, setItem] = useState({});
  const [user, setUser] = useState({});

  const getItem = async () => {
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

  useEffect(() => {
    console.log(userId, itemId);
    getItem();
    getUser();
  }, []);

  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>
        <h1>Pagamentos</h1>
        <p>{item.nome}</p>
      </main>
      <Footer />
    </>
  );
};

export default Pagamentos;
