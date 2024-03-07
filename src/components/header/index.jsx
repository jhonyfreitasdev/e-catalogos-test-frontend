import { useContext, useState } from "react";
import { images } from "../../objects/images.js";
import { DataContext } from "../../context/data-context.jsx";
import { HeaderContainer, ProductSectionContainer, ProductSection, FunctionSpan } from "./style.jsx";

export const Header = () => {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const { data, currentIndex, setCurrentIndex } = useContext(DataContext);
    const categoryList = data.map(item => item.category_name);
    const productsInCategory = data.filter(item => item.category_name === data[currentIndex].category_name).length;

    const actualCategory = categoryList[currentIndex];
    
    const uniqueCategoriesList = [...new Set(categoryList)];

    
    const prevSection = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex - 1 + uniqueCategoriesList.length) % uniqueCategoriesList.length);
        const foundCategory = data.find(item => item.category_name === uniqueCategoriesList[currentCategoryIndex] )
        const productIndex = data.indexOf(foundCategory);
        setCurrentIndex(productIndex)
    }

    const nextSection = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % uniqueCategoriesList.length);
        const foundCategory = data.find(item => item.category_name === uniqueCategoriesList[currentCategoryIndex] )
        const productIndex = data.indexOf(foundCategory);
        setCurrentIndex(productIndex)
    }
    return (
        <HeaderContainer>
            <img src={images.returnArrow} alt="Btn de retornar" />

            <ProductSectionContainer>
                <img src={images.whiteReturnArrow} onClick={prevSection} alt="Imagem de seta" />
                <div>
                    <ProductSection>{`(${productsInCategory}) ${actualCategory}`}</ProductSection>
                </div>
                <img src={images.whiteForwardArrow} onClick={nextSection} alt="Imagem de seta" />
            </ProductSectionContainer>

            <FunctionSpan>F</FunctionSpan>
        </HeaderContainer>
    )
}