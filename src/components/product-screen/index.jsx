import { Header } from "../header";
import { ProductSlider } from "../product-slider";
import { ProductInfo } from "../product-info";
import { ProductRef } from "../product-ref";
import { ValueContainer } from "../value-container";
import { ProductPack } from "../product-pack";
import { ProductScreenContainer, Line } from './style';

export const ProductScreen = () => {
    return (
        <ProductScreenContainer>
            <Header />
            <ProductSlider />
            <ProductInfo />
            <Line></Line>
            <ProductRef />
            <ValueContainer />
            <ProductPack />
        </ProductScreenContainer>
    )
}