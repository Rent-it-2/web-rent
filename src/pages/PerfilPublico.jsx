import React, { useContext, useEffect, useRef, useState } from "react";
import { Footer, Header, Item } from "../components";
import {
  getAvaliacao,
  getFotoUserById,
  getUserById,
  getUserItem,
} from "../api";
import { styles } from "../styles";
import { ItemContext } from "../contexts/ItemContext";
import { UsuarioLogado } from "../constants";
import { Rating } from "@mui/material";
import { Avatar } from "antd";

const PerfilPublico = () => {
  const { userId, userFoto, itemId } = useContext(ItemContext);
  const [user, setUser] = useState({});
  const [userItems, setUserItems] = useState([]);
  const [value, setValue] = useState();
  const [linkWhats, setLinkWhats] = useState({});

  function setLink() {
    const linkBase = "https://wa.me/55";
    const msg =
      "?text=Ol%C3%A1%21+Estou+entrando+em+contato+por+conta+do+seu+anuncio%21";
    const numWhats = user.telefone;
    setLinkWhats(linkBase + numWhats + msg);
  }

  const getItens = async () => {
    try {
      const resposta = 
await
 getUserItem(userId).then((res) => {
        setUserItems(res.data);
        console.log(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      console.log(userId);
      
await
 getUserById(userId).then((res) => {
        setUser(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItens();
    setLink();
    getAvaliacao(itemId).then((res) => {
      setValue(res.data);
    });
    getUser();
  }, []);

  return (
    <>
      <Header />
      <main className={`${styles.mainConfig}`}>
        <div className={`${styles.cardWhite}`}>
          <div className="flex flex-col gap-24 p-5 sm:flex-row">
            <div className="flex flex-col items-center gap-4">
              <Avatar
                alt={`${user.nome}`}
                src={`${getFotoUserById(userId)}`}
                className="w-[150px] h-[150px] border-[5px] border-primary"
              />
              <h2 className="text-center font-bold text-lg">{user.apelido}</h2>
            </div>

            <div className="w-full rounded-2xl border-[1px] border-gray-500 flex p-7 items-center flex-col gap-3">
              {user.telefone && (
                <p className="flex items-center gap-2">
                  <i className="mdi mdi-phone text-[25px]" /> {user.telefone}
                </p>
              )}
              <p className="flex items-center gap-2">
                <i className="mdi mdi-email-outline text-[25px]" /> {user.email}
              </p>
              <a href={linkWhats} target="_blank">
                <button
                  className={`flex items-center w-fit gap-2 rounded-full border-[1px] border-rentBlue text-rentBlue py-2 px-8 ${styles.hoverPadraoPrimary} w-fit`}
                >
                  <i className="mdi mdi-whatsapp text-[20px]"></i>
                  Iniciar Chat
                </button>
              </a>
            </div>

            {value && (
              <div className="w-full rounded-2xl border-[1px] border-gray-500 justify-center flex p-7 items-center flex-col gap-3">
                <h1 className="">Avaliação média</h1>
                <Rating
                  name="read-only"
                  value={value}
                  readOnly
                  precision={0.5}
                />
              </div>
            )}
          </div>
        </div>

        {/* <div className="flex flex-wrap gap-3 justify-around mt-10 text-gray-500 font-bold text-xl sm:flex-nowrap"> */}
        {/* <div className="w-full rounded-2xl border-[1px] border-gray-500 flex p-7 items-center flex-col gap-3">
            <h1 className="">Avaliação média</h1>
            <span className="text-2xl">2.5</span>
            <Rating name="read-only" value={2.5} readOnly precision={0.5}/>
          </div> */}

        {/* <div className="w-full rounded-2xl border-[1px] border-gray-500 flex p-7 items-center">
            <h1 className="">Negócios feitos nos ultimos 90 dias</h1>
            <p className="text-4xl ml-4">102+</p>
          </div>
          <div className="w-full rounded-2xl border-[1px] border-gray-500 flex p-7 items-center">
            <h1 className="">Intervalo médio de tempo de resposta</h1>
            <p className="text-4xl ml-4">3Horas</p>
          </div> */}
        {/* </div> */}

        <div className={`${styles.cardWhite} mt-10`}>
          <h2 className="text-xl font-bold">Anúncios de {user.apelido}</h2>
          <Carousel dataSource={userItems} />
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
      <div
        ref={carousel}
        className="max-w-full flex gap-3 items-center justify-center mt-3 overflow-hidden scroll-smooth sm:h-[22rem sm:justify-start"
      >
        {dataSource?.map((item) => (
          <Item key={item.userId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PerfilPublico;
