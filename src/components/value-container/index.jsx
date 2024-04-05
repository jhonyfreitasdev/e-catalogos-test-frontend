import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart-context";
import { DataContext } from "../../context/data-context";
import { images } from "../../utils/images";
import { Container, Price, Count, Desc } from "./style";

export const ValueContainer = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);
  const { dataProducts, setDataProducts, currentIndexProducts } = useContext(DataContext);
  const { sizes, price, quantity, id } = dataProducts[currentIndexProducts];

  const totalPack = Object.values(sizes).reduce((acc, item) => acc + item, 0);
  const packPrice = totalPack * price;
  const currentPrice = quantity > 0 ? packPrice * quantity : 0;

  const formatPrice = price => price.toFixed(2).replace('.', ',');

  const updateQuantity = newQuantity => {
    const newData = dataProducts.map(item => (
      item.id === id ? { ...dataProducts[currentIndexProducts], quantity: newQuantity } : item
    ));
    setDataProducts(newData);
  };

  const addProduct = () => updateQuantity(quantity ? quantity + 1 : 1);
  const removeProduct = () => {if (quantity && quantity > 0) { updateQuantity(quantity - 1);}};

  return (
    <Container>
      <Price>
        <Desc>Atual</Desc>
        <p>{`R$ ${formatPrice(currentPrice)}`}</p>
      </Price>

      <Count>
        <img onClick={removeProduct} src={images.removeButton} alt="Botão de remover" />

        <p> {quantity ?? 0} </p>

        <img onClick={addProduct} src={images.addButton} alt="Botão de adicionar" />
      </Count>

      <Price>
        <Desc>Acumulado</Desc>
        <p>{`R$ ${formatPrice(shoppingCart.totalPrice)}`}</p>
      </Price>
    </Container>
  );
};