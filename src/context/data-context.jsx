import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <DataContext.Provider value={{data, setData, currentIndex, setCurrentIndex}}>
            { children }
        </DataContext.Provider>
    );
};