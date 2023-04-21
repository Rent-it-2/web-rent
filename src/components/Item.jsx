import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../contexts/ItemContext";
import { putItem } from "../api";

const Item = ({
  item: { id, userId, foto, nome, categoria, valorDia, isFavorito },
}) => {
  const { setItemId } = useContext(ItemContext);
  const { setUserId } = useContext(ItemContext);

  const backImage = {
    backgroundImage: `url(${foto})`,
    // backgroundImage: `url(${foto && foto[0]})` *Código para trazer o primeira imagem quando for um array, não apagar
  };

  const visualizarItem = () => {
    setItemId(id);
    setUserId(userId);
  };

  const favoritarItem = () => {
    const itemAtualizado = {
      id: id,
      userId: userId,
      foto: foto,
      nome: nome,
      categoria: categoria,
      valorDia: valorDia,
      isFavorito: isFavorito,
    };
    itemAtualizado.isFavorito = true;
    console.log("Favoritado", itemAtualizado);
    putItem(userId, id, itemAtualizado);
  };

  return (
    <div className="w-[10rem] h-[18rem] text-rentBlue bg-white border-[1px] border-gray-300 rounded-lg transition hover:scale-105">
      <Link to={`/item/${id}`} onClick={visualizarItem}>
        <div
          className="aspect-square rounded-lg max-w-full min-w-full bg-cover bg-no-repeat"
          style={backImage}
        ></div>
      </Link>

      <div className="h-1/2 w-full p-3 flex flex-col justify-between">
        <div className="h-2/3 justify-between">
          <div className="flex justify-between">
            <h3 className="">{nome}</h3>
          </div>
          <h4 className="text-sm text-gray-400">{categoria}</h4>
        </div>

        <div className="h-1/3 py-2 flex items-end justify-between hover:drop-shadow-xl">
          <div className="flex items-end">
            <h2 className="text-lg">R$ {valorDia} </h2>
            <span className="text-sm">/dia</span>
          </div>
          {!isFavorito && (
            <i
              className="mdi mdi-heart-outline cursor-pointer text-[22px]"
              onClick={favoritarItem}
            ></i>
          )}
          {isFavorito && (
            <i className="mdi mdi-heart cursor-pointer text-[22px]"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
