import { useContext } from "react";
import { DataContext } from "../../context/data-context";
import { images } from "../../objects/images";

import { SectionInfoContainer, ImageSlider, ImageContainer } from "./style";

export const SectionInfo = ({handleInfoModalToggle, handleFindRefModalToggle, setImageActive}) => {
    const { data, currentIndex } = useContext(DataContext);
    
    return (
        <SectionInfoContainer>
            <img onClick={handleInfoModalToggle} src={images.info} alt="Imagem de info" />
            <img onClick={handleFindRefModalToggle} src={images.query} alt="Imagem de lupa" />

            <ImageSlider>
                {data[currentIndex].images.map((item, index) => {
                    return (
                        <ImageContainer key={index} onClick={() => setImageActive(index)}>
                            <img src={item.image} alt="Teste" />
                        </ImageContainer>
                    )
                })}
            </ImageSlider>

            <img src={images.cart} alt="Imagem de carrinho de compras" />
        </SectionInfoContainer>
    );
};