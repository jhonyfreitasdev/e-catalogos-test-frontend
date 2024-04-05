import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [currentIndexProducts, setCurrentIndexProducts] = useState(0);

  return (
    <DataContext.Provider value={{dataProducts, setDataProducts, currentIndexProducts, setCurrentIndexProducts}}>
      { children }
    </DataContext.Provider>
  );
};