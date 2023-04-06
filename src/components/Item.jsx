import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-[15rem] h-[18rem] max-h-[18rem] text-rentBlue">
      <img
        src={`${props.foto}`}
        alt="img"
        className="rounded-lg max-w-full min-w-full cursor-pointer"
      />
      <div className="">
        <Link></Link>
      </div>
      <div className="flex justify-between p-3">
        <h3 className="">{props.nome}</h3>
      </div>
      <div className="w-full px-3 text-sm text-gray-400">
        <h4 className="">{props.categoria}</h4>
      </div>
      <div className="flex p-3 items-end justify-between hover:drop-shadow-xl">
        <div className="flex items-end">
          <h2 className="text-lg">R$ {props.valorDia} </h2>
          <span className="text-sm">/dia</span>
        </div>
        <i className="mdi mdi-heart cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Item;
