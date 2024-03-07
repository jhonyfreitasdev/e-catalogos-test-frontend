import { useContext } from "react";
import { images } from "../../objects/images.js";
import { DataContext } from "../../context/data-context.jsx";
import { HeaderContainer, ProductSectionContainer, ReturnButton, ProductSection, ForwardButton, FunctionSpan } from "./style.jsx";

export const Header = () => {
    const { data, currentIndex } = useContext(DataContext);

    const productsInCategory = data.filter(item => item.category_name === data[currentIndex].category_name).length;

    return (
        <HeaderContainer>
            <img src={images.returnArrow} alt="Btn de retornar" />
            <ProductSectionContainer>
                <ReturnButton type="button"> &lt; </ReturnButton>
                <div>
                    <ProductSection>{`(${productsInCategory}) ${data[currentIndex].category_name}`}</ProductSection>
                </div>
                <ForwardButton type="button"> &gt; </ForwardButton>
            </ProductSectionContainer>
            <FunctionSpan>F</FunctionSpan>
        </HeaderContainer>
    )
}