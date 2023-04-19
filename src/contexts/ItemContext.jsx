import { createContext, useContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) =>{
    const [itemId, setItemId] = useState();
    const [userId, setUserId] = useState();

    return (
      <ItemContext.Provider value={{setItemId, itemId, setUserId, userId}}>
        {children}
      </ItemContext.Provider>
    );
}