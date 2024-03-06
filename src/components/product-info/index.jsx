import { images } from "../../objects/images";
import { ProductInfoContainer, ImageSlider, ImageContainer } from "./style"

export const ProductInfo = () => {
    return ( 
        <ProductInfoContainer>
            <img src={images.info} alt="Imagem de info" />
            <img src={images.query} alt="Imagem de lupa" />

            <ImageSlider>
                {/* Map com renderização de imagens  */}

                <ImageContainer>
                    <img src={images.image} alt="Teste" />
                </ImageContainer>
                <ImageContainer>
                    <img src={images.image} alt="Teste" />
                </ImageContainer>
            </ImageSlider>

            <img src={images.cart} alt="Imagem de carrinho de compras" />
        </ProductInfoContainer>
    )
}