import { useContext, useEffect } from "react";
import { Header } from "../header";
import { ProductSlider } from "../product-slider";
import { ProductInfo } from "../product-info";
import { ProductRef } from "../product-ref";
import { ValueContainer } from "../value-container";
import { ProductPack } from "../product-pack";
import { DataContext } from "../../context/data-context";
import { ProductScreenContainer, Line } from './style';

export const ProductScreen = () => {
    const { setData } = useContext(DataContext)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./src/data/mock-data.json');
            const data = await response.json();

            setData(data);
        };

        fetchData();
    }, []);

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