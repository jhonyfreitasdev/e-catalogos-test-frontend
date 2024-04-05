import { useContext } from "react";
import { DataContext } from "../../context/data-context";
import { images } from "../../utils/images";

import { SectionInfoContainer, ImageSlider, ImageContainer } from "./style";

export const SectionInfo = ({handleInfoModal, handleFindRefModal, setImageActive}) => {
  const { dataProducts, currentIndexProducts } = useContext(DataContext);
    
  return (
    <SectionInfoContainer>
      <img onClick={handleInfoModal} src={images.info} alt="Imagem de info" />
      <img onClick={handleFindRefModal} src={images.query} alt="Imagem de lupa" />

      <ImageSlider>
        {dataProducts[currentIndexProducts].images.map((item, index) => {
          return (
            <ImageContainer key={index} onClick={() => setImageActive(index)}>
              <img src={item.image} alt="Teste" />
            </ImageContainer>
          );
        })}
      </ImageSlider>

      <img src={images.cart} alt="Imagem de carrinho de compras" />
    </SectionInfoContainer>
  );
};