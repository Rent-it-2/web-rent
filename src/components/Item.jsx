import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../contexts/ItemContext";
import { getFotoItemById, postFavoritarItem, putItem } from "../api";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { categorias } from "../constants";

const Item = ({
  item: { id, nome, categoria, valorDia },
}) => {
  const { setItemId, foto } = useContext(ItemContext);
  const navigate = useNavigate();
  // const [foto, setFoto] = useState();


  const backImage = {
    backgroundImage: `url(${getFotoItemById(id)})`,
  };

  const visualizarItem = () => {
    setItemId(id);
    navigate(`/item/${id}`);
  };

  const converteCategoria = () => {
    const selectedCategoryObject = categorias.find(
      (category) => category.value === categoria
    );
  
    if (selectedCategoryObject) {
      return selectedCategoryObject.title;
    }
  
    return "Categoria não encontrada";
  };

  const favoritarItem = async () => {
    console.log("Favoritado", id);
    await postFavoritarItem(id);
  };

  return (
    <div className="w-[7rem] h-[16rem] text-rentBlue flex-none bg-white border-gray-300 rounded-lg transition hover:scale-105 sm:w-[10rem] sm:h-[18rem] sm:border-[1px]">
      <div onClick={visualizarItem}>
        <div
          className="aspect-square rounded-lg max-w-full min-w-full cursor-pointer bg-cover bg-no-repeat"
          style={backImage}
        ></div>
      </div>

      <div className="w-full p-3 flex flex-col justify-between sm:h-1/2">
        <div className="h-1/3 justify-between sm:h-2/3">
          <div className="flex text-sm justify-between sm:text-base">
            <h3>{nome}</h3>
          </div>
          <h4 className="text-xs text-gray-400 sm:text-sm">{converteCategoria()}</h4>
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

      {/* {!isFavorito && ( */}
        {/* <div className="-translate-y-[19rem] translate-x-[7rem]">
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
        </div> */}
      {/* )} */}
    </div>
  );
};

export default Item;
