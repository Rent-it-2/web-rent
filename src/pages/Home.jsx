import React, { useEffect, useState } from "react";
import { Buscar, Footer, Header, Item } from "../components";
import api from "../api";

const Home = () => {
  const [itemList, setItem] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="pt-36 pb-28 px-32">
        {console.log(itemList)}
        <Buscar />
        <div className="w-full pt-10 flex flex-wrap justify-start gap-y-5 gap-x-11 mt-3">
          {itemList?.map((item) => 
            <Item
              key={item.id}
              item={item}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
