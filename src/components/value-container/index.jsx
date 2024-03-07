import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart";
import { DataContext } from "../../context/data-context";
import { images } from "../../objects/images";
import { Container, Price, Count, Desc } from "./style";

export const ValueContainer = () => {
    const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
    const { data, setData, currentIndex } = useContext(DataContext);

    useEffect(() => {updateShoppingCart();}, [data])

    let totalPack = 0;
    Object.values(data[currentIndex].sizes).forEach(item => { totalPack += item });
    const packPrice = totalPack * data[currentIndex].price;
    let currentPrice = 0
    if (data[currentIndex].quantity > 0) { currentPrice = packPrice * data[currentIndex].quantity }

    const formatPrice = price => price.toFixed(2).replace('.', ',');
    const addProduct = () => {
        if (data[currentIndex].quantity) {
            const newQuantity = data[currentIndex].quantity + 1
            const newData = data.map(item => {
                return item.id === data[currentIndex].id
                    ? { ...data[currentIndex], quantity: newQuantity }
                    : item
            });
            setData(newData);
        } else {
            const newData = data.map(item => {
                return item.id === data[currentIndex].id
                    ? { ...data[currentIndex], quantity: 1 }
                    : item
            });
            setData(newData);
        }
    };
    const removeProduct = () => {
        if (data[currentIndex].quantity) {
            if (data[currentIndex].quantity > 0) {
                const newData = data.map(item => {
                    const newQuantity = data[currentIndex].quantity - 1;

                    return item.id === data[currentIndex].id
                        ? { ...data[currentIndex], quantity: newQuantity }
                        : item
                });
                setData(newData);
            };
        };
    };
    const updateShoppingCart = () => {
        const currentPriceList = data.map(item => {
            let totalPack = 0;
            Object.values(item.sizes).forEach(item => { totalPack += item });
            const packPrice = totalPack * item.price;
            let currentPrice = 0
            if (item.quantity > 0) {
                currentPrice = packPrice * item.quantity
                return currentPrice
            }
            return currentPrice
        })
        let total = 0;
        currentPriceList.forEach(item => total += item);

        setShoppingCart({ totalPrice: total })
    }

    return (
        <Container>
            <Price>
                <Desc>Atual</Desc>
                <p>{`R$ ${formatPrice(currentPrice)}`}</p>
            </Price>

            <Count>
                <img onClick={removeProduct} src={images.removeButton} alt="Botão de remover" />

                <p> {data[currentIndex].quantity ?? 0} </p>

                <img onClick={addProduct} src={images.addButton} alt="Botão de adicionar" />
            </Count>

            <Price>
                <Desc>Acumulado</Desc>
                <p>{`R$ ${formatPrice(shoppingCart.totalPrice)}`}</p>
            </Price>
        </Container>
    )
}