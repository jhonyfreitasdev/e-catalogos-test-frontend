import { useContext } from "react";
import { DataContext } from "../../context/data-context";
import { images } from "../../objects/images";
import { SectionInfoContainer, ImageSlider, ImageContainer } from "./style"

export const SectionInfo = (props) => {
    const { data, currentIndex } = useContext(DataContext)
        
    return (
        <SectionInfoContainer>
            <img onClick={props.handleInfoActiveChange} src={images.info} alt="Imagem de info" />
            <img onClick={props.handleFindRefActiveChange} src={images.query} alt="Imagem de lupa" />

            <ImageSlider>
                {data[currentIndex].images.map((item, index) => {
                    return (
                        <ImageContainer key={index} onClick={() => props.setImageActive(index)}>
                            <img src={item.image} alt="Teste" />
                        </ImageContainer>
                    )
                })}
            </ImageSlider>

            <img src={images.cart} alt="Imagem de carrinho de compras" />
        </SectionInfoContainer>
    )
}