import { useContext } from "react";
import { images } from "../../objects/images.js";
import { DataContext } from "../../context/data-context.jsx";

import { HeaderContainer, ProductSectionContainer, ProductSection, FunctionSpan } from "./style.jsx";

export const Header = () => {
    const { data, currentIndex, setCurrentIndex } = useContext(DataContext);
    
    const categoryList = data.map(({category_name}) => category_name);
    const uniqueCategoriesList = [...new Set(categoryList)];
    const actualCategory = categoryList[currentIndex];
    const productsInCategory = data.filter(({category_name}) => category_name === data[currentIndex].category_name).length;
    let currentIndexCategory = uniqueCategoriesList.indexOf(actualCategory);

    const changeCategory = (direction) => {
        let nextIndexCategory = (currentIndexCategory + direction + uniqueCategoriesList.length) % uniqueCategoriesList.length;
        const fistProductOfCategory = data.find(({category_name}) => category_name === uniqueCategoriesList[nextIndexCategory]);
        const indexProduct = data.indexOf(fistProductOfCategory);
        setCurrentIndex(indexProduct);
    };
    
    return (
        <HeaderContainer>
            <img src={images.returnArrow} alt="Btn de retornar" />

            <ProductSectionContainer>
                <img src={images.whiteReturnArrow} onClick={() => changeCategory(-1)} alt="Imagem de seta" />
                <div>
                    <ProductSection>{`(${productsInCategory}) ${actualCategory}`}</ProductSection>
                </div>
                <img src={images.whiteForwardArrow} onClick={() => changeCategory(1)} alt="Imagem de seta" />
            </ProductSectionContainer>

            <FunctionSpan>F</FunctionSpan>
        </HeaderContainer>
    );
};