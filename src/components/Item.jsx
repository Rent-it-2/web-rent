import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext }  from "../contexts/ItemContext";

const Item = ({ item: { id, userId, foto, nome, categoria, valorDia } }) => {
  const { setItemId } = useContext(ItemContext);
  const { setUserId } = useContext(ItemContext);

  const backImage = {
    backgroundImage: `url(${foto})`
    // backgroundImage: `url(${foto && foto[0]})` *Código para trazer o primeira imagem quando for um array, não apagar
  }

  const visualizarItem = () => {
    setItemId(id);
    setUserId(userId);
  };

  return (
    <div className="w-[12.6rem] h-[18rem] text-rentBlue border-[1px] border-gray-300 rounded-lg transition hover:scale-105">
      <Link to={`/item/${id}`} onClick={visualizarItem}>
        <div className="aspect-[4/3] rounded-lg max-w-full min-w-full bg-contain" style={backImage}></div>
      </Link>

      <div className="h-1/2 w-full p-3 flex flex-col justify-around">

        <div className="h-2/3 justify-between">
          <div className="flex justify-between">
            <h3 className="">{nome}</h3>
          </div>
          <h4 className="text-sm text-gray-400">
            {categoria}
          </h4>
        </div>

        <div className="h-1/3 flex items-end justify-between hover:drop-shadow-xl">
          <div className="flex items-end">
            <h2 className="text-lg">R$ {valorDia} </h2>
            <span className="text-sm">/dia</span>
          </div>
          <i className="mdi mdi-heart cursor-pointer text-[22px]"></i>
        </div>

      </div>
    </div>
  );
};

export default Item;
