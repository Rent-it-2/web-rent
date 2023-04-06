import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item: { id, foto, nome, categoria, valorDia } }) => {
  
  const backImage ={
    backgroundImage: `url(${foto})`
    // backgroundImage: `url(${foto && foto[0]})` *Código para trazer o primeira imagem quando for um array, não apagar
  }

  return (
    <div className="w-[15rem] h-[18rem] max-h-[18rem] text-rentBlue">
      <Link to={`/item/${id}`}>
        {/* <img
          src={urlFor(foto && foto[0])}
          alt="img"
          className="rounded-lg max-w-full min-w-full"
        /> *Código para trazer o primeira imagem quando for um array, não apagar*/}

        <div className="aspect-[4/3] rounded-lg max-w-full min-w-full" style={backImage}></div>

        <div className="w-full flex justify-between pt-3">
          <h3 className="">{nome}</h3>
        </div>
        <h4 className="w-full text-sm text-gray-400">
          {categoria}
        </h4>

      </Link>
      <div className="flex items-end justify-between hover:drop-shadow-xl">
        <div className="flex items-end">
          <h2 className="text-lg">R$ {valorDia} </h2>
          <span className="text-sm">/dia</span>
        </div>
        <i className="mdi mdi-heart cursor-pointer text-[22px]"></i>
      </div>
    </div>
  );
};

export default Item;
