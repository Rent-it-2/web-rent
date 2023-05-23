import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../contexts/ItemContext";
import { getFotoItemById, putItem } from "../api";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Item = ({
  item: { id, nome, categoria, valorDia },
}) => {
  const { setItemId } = useContext(ItemContext);
  const navigate = useNavigate();


  useEffect(() => {
    console.log(getFotoItemById(id));
  }, []);

  const backImage = {
    backgroundImage: `url(${getFotoItemById(id)})`,
  };

  const visualizarItem = () => {
    console.log(id);
    setItemId(id);
    navigate(`/item/${id}`);
    // setUserId(userId);
  };

  return (
    <div className="w-[7rem] h-[16rem] text-rentBlue flex-none bg-white border-gray-300 rounded-lg transition hover:scale-105 sm:w-[10rem] sm:h-[18rem] sm:border-[1px]">
      <div onClick={visualizarItem}>
        <div
          className="aspect-square rounded-lg max-w-full min-w-full bg-cover bg-no-repeat"
          style={backImage}
        ></div>
      </div>

      <div className="w-full p-3 flex flex-col justify-between sm:h-1/2">
        <div className="h-1/3 justify-between sm:h-2/3">
          <div className="flex text-sm justify-between sm:text-base">
            <h3>{nome}</h3>
          </div>
          <h4 className="text-xs text-gray-400 sm:text-sm">{categoria}</h4>
        </div>

        <div className="flex h-1/3 py-2 items-end justify-between hover:drop-shadow-xl">
          <div className="flex items-end">
            <h2 className="text-sm sm:text-lg">R$ {valorDia} </h2>
            <span className="text-xs sm:text-sm">/dia</span>
          </div>

          {/* {!isFavorito && (
            <div className="-translate-y-[19rem] translate-x-[7rem]">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                onClick={favoritarItem}
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#FF724C",
                  },
                  "& .MuiSvgIcon-root": { fontSize: 30 },
                }}
              />
            </div>
          )} */}
        </div>
      </div>

      {/* {!isFavorito && (
        <div className="-translate-y-[19rem] translate-x-[7rem]">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            onClick={favoritarItem}
            sx={{
              color: "#fff",
              "&.Mui-checked": {
                color: "#FF724C",
              },

              "& .MuiSvgIcon-root": { fontSize: 30 },
            }}
          />
        </div>
      )} */}
    </div>
  );
};

export default Item;
