import { createContext, useContext, useEffect, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) =>{
    const [itemId, setItemId] = useState();
    const [userId, setUserId] = useState();

    // useEffect(() => {
    //   const recoveredItem = sessionStorage.getItem("item");
    //   if (recoveredItem) {
    //     setItemId(JSON.parse(recoveredItem).id);
    //     setItemId(JSON.parse(recoveredItem).userId);
    //   }
    // }, []);


    console.log('context',itemId, userId)
    return (
      <ItemContext.Provider value={{setItemId, itemId, setUserId, userId}}>
        {children}
      </ItemContext.Provider>
    );
}