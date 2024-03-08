import { useContext } from "react";
import { DataContext } from "../../context/data-context";

import { ProductRefContainer, Ref, Name, Code, Price } from "./style";

export const ProductRef = () => {
    const { data, currentIndex } = useContext(DataContext);

    const { name, price, reference } = data[currentIndex]; 
    const firstName = name.split(' ')[0];
    const formattedPrice = price.toFixed(2).replace(',', '.');

    return (
        <ProductRefContainer>
            <Ref>
                <Name>{firstName}</Name>
                <Code><span> REF: </span> {reference}</Code>
                <Price><span> R$ </span> {formattedPrice}</Price>
            </Ref>
        </ProductRefContainer>
    );
};