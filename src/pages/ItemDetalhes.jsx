import React, { useContext, useEffect, useState } from 'react';
import { ItemContext } from "../contexts/ItemContext";
import { api } from '../api';

const ItemDetalhes = () => {
  // const { itemInfo } = useItem();
  // const { id, userId } = itemInfo;
  const { itemId } = useContext(ItemContext);

  const getItenById = async () => {
    console.log(itemId);
    try {
      const resposta = await api.get(`/users/${1}/itens/${3}`).then((res) => {
        console.log(res.data);
        // setItem(res.data);
      });
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItenById();
  }, []);

  return (
    <div>ItemDetalhes {itemId}</div>
  );
};

export default ItemDetalhes;