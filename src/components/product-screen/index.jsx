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
    const { data, setData } = useContext(DataContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/mock-data.json');
            const productData = await response.json();

            setData(productData);
        };

        fetchData();
    }, []);

    const handleInfoModalToggle = () => setInfoActive(!infoActive);
    const handleFindRefModalToggle = () => setFindRef(!findRef);

    return (
        <>
            {data.length !== 0 && (
                <ProductScreenContainer>
                    <Header />
                    <ProductSlider imageActive={imageActive} setImageActive={setImageActive} />
                    <SectionInfo
                        handleInfoModalToggle={handleInfoModalToggle}
                        handleFindRefModalToggle={handleFindRefModalToggle}
                        setImageActive={setImageActive}
                    />
                    <Line></Line>
                    <ProductRef />
                    <ValueContainer />
                    <ProductPack />
                    {infoActive && <ProductInfo handleInfoModalToggle={handleInfoModalToggle} />}
                    {findRef && <FindRef handleFindRefModalToggle={handleFindRefModalToggle} />}
                </ProductScreenContainer>
            )}
        </>
    );
};