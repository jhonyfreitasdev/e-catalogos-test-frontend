import { useContext, useState } from "react";
import { images } from "../../objects/images.js";
import { DataContext } from "../../context/data-context.jsx";

import { HeaderContainer, ProductSectionContainer, ProductSection, FunctionSpan } from "./style.jsx";

export const Header = () => {
    const { data, currentIndex, setCurrentIndex } = useContext(DataContext);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const categoryList = data.map(({category_name}) => category_name);
    const uniqueCategoriesList = [...new Set(categoryList)];
    const actualCategory = categoryList[currentIndex];

    const productsInCategory = data.filter(item => item.category_name === data[currentIndex].category_name).length;
    
    const navigateCategory = (direction) => {
        const newIndex = (currentCategoryIndex + direction + uniqueCategoriesList.length) % uniqueCategoriesList.length;
        setCurrentCategoryIndex(newIndex);
        
        const foundCategory = data.find((item) => item.category_name === uniqueCategoriesList[newIndex]);
        const productIndex = data.indexOf(foundCategory);
        setCurrentIndex(productIndex);
    };
    
    return (
        <HeaderContainer>
            <img src={images.returnArrow} alt="Btn de retornar" />

            <ProductSectionContainer>
                <img src={images.whiteReturnArrow} onClick={() => navigateCategory(-1)} alt="Imagem de seta" />
                <div>
                    <ProductSection>{`(${productsInCategory}) ${actualCategory}`}</ProductSection>
                </div>
                <img src={images.whiteForwardArrow} onClick={() => navigateCategory(1)} alt="Imagem de seta" />
            </ProductSectionContainer>

            <FunctionSpan>F</FunctionSpan>
        </HeaderContainer>
    );
};