import { images } from "../../objects/images.js";
import { HeaderContainer, ProductSectionContainer, ReturnButton, ProductSection, ForwardButton, FunctionSpan } from "./style.jsx";

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={images.returnArrow} alt="Btn de retornar" />

            <ProductSectionContainer>
                <ReturnButton type="button"> &lt; </ReturnButton>

                <div>
                    <ProductSection>{`(id) Casaco`}</ProductSection>
                </div>

                <ForwardButton type="button"> &gt; </ForwardButton>
            </ProductSectionContainer>

            <FunctionSpan>F</FunctionSpan>
        </HeaderContainer>
    )
}