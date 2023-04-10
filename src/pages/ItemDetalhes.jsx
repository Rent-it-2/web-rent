import React, { useContext, useEffect, useState } from 'react';
import { ItemContext } from "../contexts/ItemContext";
import { api } from '../api';

const ItemDetalhes = ({ children }) => {
  const { itemId } = useContext(ItemContext);
  const { userId } = useContext(ItemContext);

  const getItenById = async () => {
    console.log(itemId, userId);
    try {
      const resposta = await api.get(`/users/${userId}/itens/${itemId}`).then((res) => {
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
    <>
    ItemDetalhes {itemId}
    
    </>
  );
};

export default ItemDetalhes;