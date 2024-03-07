import { useContext, useEffect, useState } from "react";
import { Header } from "../header";
import { ProductSlider } from "../product-slider";
import { SectionInfo } from "../section-info";
import { ProductRef } from "../product-ref";
import { ValueContainer } from "../value-container";
import { ProductPack } from "../product-pack";
import { DataContext } from "../../context/data-context";
import { ProductInfo } from "../product-info";
import { FindRef } from "../find-ref";
import { ProductScreenContainer, Line } from './style';

export const ProductScreen = () => {
    const [infoActive, setInfoActive] = useState(false);
    const [findRef, setFindRef] = useState(false);
    const [imageActive, setImageActive] = useState(0);
    const { data, setData } = useContext(DataContext)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./src/data/mock-data.json');
            const productData = await response.json();

            setData(productData);
        };

        fetchData();
    }, []);

    const handleInfoActiveChange = () => setInfoActive(infoActive ? false : true);
    const handleFindRefActiveChange = () => setFindRef(findRef ? false : true);

    return (
        <>
            {data.length !== 0 ?
                <ProductScreenContainer>
                    <Header />
                    <ProductSlider imageActive={imageActive} setImageActive={setImageActive} />
                    <SectionInfo
                        handleInfoActiveChange={handleInfoActiveChange}
                        handleFindRefActiveChange={handleFindRefActiveChange}
                        setImageActive={setImageActive}
                    />
                    <Line></Line>
                    <ProductRef />
                    <ValueContainer />
                    <ProductPack />
                    {infoActive ? <ProductInfo handleInfoActiveChange={handleInfoActiveChange} /> : null}
                    {findRef ? <FindRef handleFindRefActiveChange={handleFindRefActiveChange} /> : null}
                </ProductScreenContainer>
                : null}
        </>
    )
}