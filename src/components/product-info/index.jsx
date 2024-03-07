import { useContext } from "react";
import { DataContext } from "../../context/data-context";
import { images } from "../../objects/images";
import { ProductInfoContainer, ImageSlider, ImageContainer } from "./style"

export const ProductInfo = () => {
    const { data, currentIndex } = useContext(DataContext)
    
    return (
        <ProductInfoContainer>
            <img src={images.info} alt="Imagem de info" />
            <img src={images.query} alt="Imagem de lupa" />

            <ImageSlider>
                {data[currentIndex].images.map((item, index) => {
                    return (
                        <ImageContainer key={index} onClick={() => console.log(index)}>
                            <img src={item.image} alt="Teste" />
                        </ImageContainer>
                    )
                })}
            </ImageSlider>

            <img src={images.cart} alt="Imagem de carrinho de compras" />
        </ProductInfoContainer>
    )
}