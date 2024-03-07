import { createContext, useState, useEffect, useContext } from "react";
import { DataContext } from "./data-context";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [ shoppingCart, setShoppingCart ] = useState({totalPrice: 0.00});
    const { data } = useContext(DataContext);

    useEffect(() => {updateShoppingCart();}, [data]);

    const updateShoppingCart = () => {
        const currentPriceList = data.map(item => {
            let totalPack = 0;
            Object.values(item.sizes).forEach(item => { totalPack += item });
            const packPrice = totalPack * item.price;
            let currentPrice = 0;
            if (item.quantity > 0) {
                currentPrice = packPrice * item.quantity
                return currentPrice;
            }
            return currentPrice;
        });
        let total = 0;
        currentPriceList.forEach(item => total += item);

        setShoppingCart({ totalPrice: total });
    };

    return (
        <ShoppingCartContext.Provider value={{shoppingCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 