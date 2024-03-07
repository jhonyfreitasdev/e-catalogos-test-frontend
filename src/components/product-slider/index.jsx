import { useContext } from "react";
import { images } from "../../objects/images"
import { DataContext } from "../../context/data-context";
import { SliderContainer, Slider, Product, Image, ReturnArrow, ForwardArrow } from "./style"

export const ProductSlider = () => {
    const { data, currentIndex, setCurrentIndex } = useContext(DataContext);

    const nextSlider = () => {setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);};

    const prevSlider = () => {setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);};

    return (
        <SliderContainer >
            <Slider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((product, index) => {
                    return (
                        <Product key={index}>
                            <Image src={product.images[0].image} alt="Imagem do produto" />
                        </Product>
                    )
                })}
            </Slider>

            <ReturnArrow src={images.returnArrow} onClick={prevSlider} alt="Botão de voltar" />
            <ForwardArrow src={images.forwardArrow} onClick={nextSlider} alt="Botão de avançar" />
        </SliderContainer>
    )
}