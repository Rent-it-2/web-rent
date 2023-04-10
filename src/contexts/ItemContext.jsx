import { createContext, useContext, useState } from "react";

export const ItemContext = createContext();

// export function useItem() {
//   return useContext(ItemContext);
// }

export const ItemProvider = ({ children }) =>{

    const [itemId, setItemId] = useState();
// debugger
    return (
      <ItemContext.Provider value={{ itemId, setItemId }}>
        {children}
      </ItemContext.Provider>
    );

//   const [itemInfo, setItemInfo] = useState({});

//   return (
//     <ItemContext.Provider value={{ itemInfo, setItemInfo }}>
//       {children}
//     </ItemContext.Provider>
//   );
}