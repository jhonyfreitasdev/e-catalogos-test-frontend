import { Children, createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [ shoppingCart, setShoppingCart ] = useState({totalPrice: 0.00});

    return (
        <ShoppingCartContext.Provider value={{shoppingCart, setShoppingCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 