import { createContext, useContext, useEffect, useState } from "react";
import { getFotoItemById, getFotoUserById, getItemById, getUserById } from "../api";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [itemId, setItemId] = useState();
  const [userId, setUserId] = useState();
  const [user, setUser] = useState({});
  const [userFoto, setUserFoto] = useState({});
  const [linkWhats, setLinkWhats] = useState({});
  const [foto, setFoto] = useState();
  const [item, setItem] = useState({
    id: 0,
    nomeItem: "string",
    categoria: "string",
    disponivel: 0,
    descricao: "string",
    valorDia: 0,
    idUsuario: 0,
    nomeUsuario: "string",
    apelidoUsario: "string",
    email: "string",
    telefone: "string",
  });

  function setLink() {
    const linkBase = "https://wa.me/55";
    const msg =
      "?text=Ol%C3%A1%21+Estou+entrando+em+contato+por+conta+do+seu+anuncio%21";
    const numWhats = item.telefone;
    setLinkWhats(linkBase + numWhats + msg);
  }

  const getItem = async () => {
    try {
      const resposta = await getItemById(itemId).then((res) => {
        sessionStorage.setItem("item", JSON.stringify(res.data));
        setItem(res.data);
        setUserId(res.data.idUsuario);
        setFoto(getFotoItemById(res.data.id));
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      await getUserById(userId).then((res) => {
        setUser(res.data);
        setUserFoto(getFotoUserById(userId));
        console.log(userFoto);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const recoveredItem = JSON.parse(sessionStorage.getItem("item"));
    if (recoveredItem) {
      setItem(recoveredItem);
      setFoto(getFotoItemById(recoveredItem.id));
      getUser();
    }
    setLink();
  }, []);

  return (
    <ItemContext.Provider
      value={{ setItemId, getItem, itemId, item, foto, linkWhats, user, userFoto, setUserId, userId }}
    >
      {children}
    </ItemContext.Provider>
  );
};
