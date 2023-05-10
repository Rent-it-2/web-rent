import React, { useEffect, useRef, useState } from "react";
import { Buscar, Footer, Header, Item } from "../components";
import api, { getAllItem } from "../api";
import { styles } from "../styles";

const Home = () => {
  const [itemList, setItem] = useState([]);
  const carousel = useRef(null);
  // const carousel2 = useRef(null);

  const getItens = async () => {
    try {
      const element = [];

      for (let index = 1; index <= 5; index++) {
        const resposta = await getAllItem(index).then((res) => {
          for (let j = 0; j < res.data.length; j++) {
            element.push(res.data[j]);
          }
        });
      }
      console.log("element", element);
      setItem(element);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItens();
  }, []);


  return (
    <>
      <Header />
      <main className={`${styles.mainConfig} flex flex-col gap-5 sm:gap-10`}>
        <Buscar />

        <div className={`${styles.cardWhite}`}>
          <h2 className="text-xl font-bold">Mais Procurados</h2>
          <Carousel dataSource={itemList} />
        </div>

        <div className={`${styles.cardWhite}`}>
          <h2 className="text-xl font-bold">Sugestões</h2>
          <Carousel dataSource={itemList} />
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
    console.log();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="flex items-center gap-1 juse">
      <button
        onClick={handleLeftClick}
        className={`bg-rentBlue bg-opacity-0 text-rentBlue hover:bg-opacity-50 sm:text-[35px]`}
      >
        <i className="mdi mdi-chevron-left" />
      </button>

      <div
        ref={carousel}
        className="max-w-full flex gap-3 items-center justify-center mt-3 overflow-hidden scroll-smooth sm:h-[22rem sm:justify-start"
      >
        {dataSource?.map((item) => (
          <Item key={item.userId} item={item} />
        ))}
      </div>

      <button
        onClick={handleRightClick}
        className={`bg-rentBlue bg-opacity-0 text-rentBlue hover:bg-opacity-50 sm:text-[35px]`}
      >
        <i className="mdi mdi-chevron-right" />
      </button>
    </div>
  );
};

export default Home;
