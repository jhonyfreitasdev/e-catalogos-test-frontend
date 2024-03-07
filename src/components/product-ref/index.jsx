import { useContext } from "react";
import { DataContext } from "../../context/data-context";
import { ProductRefContainer, Ref, Name, Code, Price } from "./style";

export const ProductRef = () => {
    const { data, currentIndex } = useContext(DataContext);

    const formattedPrice = data[currentIndex].price.toFixed(2).replace(',', '.');
    const name = data[currentIndex].name.split(' ')[0];

    return (
        <ProductRefContainer>
            <Ref>
                <Name>{name}</Name>
                <Code><span> REF: </span> {data[currentIndex].reference}</Code>
                <Price><span> R$ </span> {formattedPrice}</Price>
            </Ref>
        </ProductRefContainer>
    )
}