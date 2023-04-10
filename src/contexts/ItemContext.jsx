import { createContext, useContext, useState } from "react";

export const ItemContext = createContext();

// export function useItem() {
//   return useContext(ItemContext);
// }

export const ItemProvider = ({ children }) =>{
    const [itemId, setItemId] = useState();
    const [userId, setUserId] = useState();

    console.log('context',itemId, userId)
    return (
      <ItemContext.Provider value={{ itemId, setItemId, userId, setUserId }}>
        {children}
      </ItemContext.Provider>
    );
}