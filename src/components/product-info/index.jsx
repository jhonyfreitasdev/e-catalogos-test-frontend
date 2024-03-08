import { useContext } from "react";
import { DataContext } from "../../context/data-context";
import { images } from "../../objects/images";

import { ProductInfoContainer, Container, TitleContainer, Title, ContentContainer, Colors, ColorContent, Info } from "./style";

export const ProductInfo = ({handleInfoActiveChange}) => {
    const { data, currentIndex } = useContext(DataContext);
    const { name, reference, brand_name, category_name, group_name, colors } = data[currentIndex];

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
                        {colors && colors.map((color, index) => {
                            return (
                                <div key={index} style={{ backgroundColor: `#${color.cod_hex}` }}> {color.color_name} </div>
                            );
                        })}
                    </ColorContent>

                    <Info>Nome do produto: <span>{name}</span></Info>
                    <Info>Referência: <span>{reference}</span></Info>
                    <Info>Marca: <span>{brand_name}</span></Info>
                    <Info>Categoria: <span>{category_name}</span></Info>
                    <Info>Gênero: <span>{group_name}</span></Info>
                </ContentContainer>
            </Container>
        </ProductInfoContainer>
    );
};