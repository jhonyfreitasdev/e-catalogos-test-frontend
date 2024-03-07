import { useContext } from "react";
import { ProductInfoContainer, Container, TitleContainer, Title, ContentContainer, Colors, ColorContent, Info } from "./style";
import { DataContext } from "../../context/data-context";
import { images } from "../../objects/images";

export const ProductInfo = ({handleInfoActiveChange}) => {
    const { data, currentIndex } = useContext(DataContext);
    const currentProduct = data[currentIndex];

    return (
        <ProductInfoContainer>
            <Container>
                <TitleContainer>
                    <Title>Informações</Title>
                    <img src={images.closeButton} alt="Imagem de X" onClick={handleInfoActiveChange} />
                </TitleContainer>

                <ContentContainer>
                    <Colors>Cores</Colors>

                    <ColorContent>
                        {currentProduct.colors.map((color, index) => {
                            return (
                                <div key={index} style={{ backgroundColor: `#${color.cod_hex}` }}> {color.color_name} </div>
                            )
                        })}
                    </ColorContent>

                    <Info>Nome do produto: <span>{currentProduct.name}</span></Info>
                    <Info>Referencia: <span>{currentProduct.reference}</span></Info>
                    <Info>Marca: <span>{currentProduct.brand_name}</span></Info>
                    <Info>Categoria: <span>{currentProduct.category_name}</span></Info>
                    <Info>Gênero: <span>{currentProduct.group_name}</span></Info>
                </ContentContainer>
            </Container>
        </ProductInfoContainer>
    )
}