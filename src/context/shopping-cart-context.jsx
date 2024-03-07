import { createContext, useState, useEffect, useContext } from "react";
import { DataContext } from "./data-context";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState({ totalPrice: 0.00 });
    const { data } = useContext(DataContext);

    useEffect(() => {
        const updateShoppingCart = () => {
            const currentPriceList = data.map(({ sizes, price, quantity }) => {
                let totalPack = 0;
                Object.values(sizes).forEach(size => { totalPack += size });

                const packPrice = totalPack * price;
                let currentPrice = 0;
                if (quantity > 0) { currentPrice = packPrice * quantity };
                return currentPrice;
            });

            const totalPrice = currentPriceList.reduce((acc, item) => acc + item, 0);
            setShoppingCart({ totalPrice });
        };

        updateShoppingCart();
    }, [data]);


    return (
        <ShoppingCartContext.Provider value={{ shoppingCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};