import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../contexts/ItemContext";
import { putItem } from "../api";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
// import Fab from '@mui/material/Fab';

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
    <div className="w-[7rem] h-[16rem] text-rentBlue flex-none bg-white border-gray-300 rounded-lg transition hover:scale-105 sm:w-[10rem] sm:h-[18rem] sm:border-[1px]">
      <Link to={`/item/${id}`} onClick={visualizarItem}>
        <div
          className="aspect-square rounded-lg max-w-full min-w-full bg-cover bg-no-repeat"
          style={backImage}
        ></div>
      </Link>

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

          {/* <i
              className="hidden mdi mdi-heart-outline cursor-pointer text-[22px] sm:flex"
              onClick={favoritarItem}
            ></i> */}
          {isFavorito && (
            // <i className="hidden mdi mdi-heart cursor-pointer text-[22px] sm:flex"></i>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              onClick={favoritarItem}
              size="small"
              sx={{
                color: "#FF724C",
                "&.Mui-checked": {
                  color: "#FF724C",
                },

                "& .MuiSvgIcon-root": { fontSize: 15 },
              }}
              defaultChecked
            />
          )}
        </div>
      </div>

      {!isFavorito && (
        // <
        //   className="hidden mdi mdi-heart-outline cursor-pointer text-[22px] sm:flex"
        //   onClick={favoritarItem}
        // ></
        <div className="-translate-y-[19rem] translate-x-[7rem]">
          {/* <Fab size="medium"> */}
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
          {/* </Fab> */}
        </div>
      )}
    </div>
  );
};

export default Item;
