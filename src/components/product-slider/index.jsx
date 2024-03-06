import { images } from "../../objects/images"
import { SliderContainer, Slider, Product, Image, ReturnArrow, ForwardArrow } from "./style"

export const ProductSlider = () => {
    return (
        <SliderContainer>
            <Slider>
                {/* Map das imagens */}
                <Product>
                    <Image src={images.image} alt="Imagem do produto" />
                </Product>
            </Slider>

            <ReturnArrow src={images.returnArrow} alt="Botão de voltar" />
            <ForwardArrow src={images.forwardArrow} alt="Botão de avançar" />
        </SliderContainer>
    )
}