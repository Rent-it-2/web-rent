import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItemByNome } from "../api";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const navigate = useNavigate();
  const [itemNome, setItemNome] = useState();
  const [itemCategoria, setItemCategoria] = useState();
  const [itemList, setItemList] = useState([]);

  const buscar = async (nome) => {
    console.log("buscar", nome);
    try {
      const resposta = 
// await
 getItemByNome(nome).then((res) => {
        setItemList(res.data);
        return res.data;
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FilterContext.Provider value={{ setItemCategoria, itemCategoria, setItemNome, itemNome, itemList, buscar }}>
      {children}
    </FilterContext.Provider>
  );
};