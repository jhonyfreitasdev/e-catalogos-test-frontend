import { useContext } from "react";
import { images } from "../../utils/images.js";
import { DataContext } from "../../context/data-context.jsx";

import { HeaderContainer, ProductSectionContainer, ProductSection, FunctionSpan } from "./style.jsx";

export const Header = () => {
  const { dataProducts, currentIndexProducts, setCurrentIndexProducts } = useContext(DataContext);
    
  const listOfAllCategories = dataProducts.map(({category_name}) => category_name);
  const categoryList = [...new Set(listOfAllCategories)];
  const actualCategory = listOfAllCategories[currentIndexProducts];
  const productsInCategory = dataProducts.filter(({category_name}) => category_name === dataProducts[currentIndexProducts].category_name).length;
  let currentIndexCategory = categoryList.indexOf(actualCategory);

  const changeCategory = (direction) => {
    let nextIndexCategory = (currentIndexCategory + direction + categoryList.length) % categoryList.length;
    const fistProductOfCategory = dataProducts.find(({category_name}) => category_name === categoryList[nextIndexCategory]);
    const indexProduct = dataProducts.indexOf(fistProductOfCategory);
    setCurrentIndexProducts(indexProduct);
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