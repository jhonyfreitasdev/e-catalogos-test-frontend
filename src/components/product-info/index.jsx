import { useContext } from "react";
import { DataContext } from "../../context/data-context";
import { images } from "../../utils/images";

import { ProductInfoContainer, Container, TitleContainer, Title, ContentContainer, Colors, ColorContent, Info } from "./style";

export const ProductInfo = ({handleInfoModal}) => {
  const { dataProducts, currentIndexProducts } = useContext(DataContext);
  const { 
    name, 
    reference, 
    brand_name, 
    category_name,
    group_name, 
    colors 
  } = dataProducts[currentIndexProducts];
    
  return (
    <ProductInfoContainer>
      <Container>
        <TitleContainer>
          <Title>Informações</Title>
          <img src={images.closeButton} alt="Imagem de X" onClick={handleInfoModal} />
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