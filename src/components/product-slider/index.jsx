import { useContext } from "react";
import { images } from "../../objects/images";
import { DataContext } from "../../context/data-context";

import { SliderContainer, Slider, Product, Image, ReturnArrow, ForwardArrow } from "./style";

export const ProductSlider = ({ imageActive, setImageActive }) => {
    const { data, currentIndex, setCurrentIndex } = useContext(DataContext);

    const nextSlider = () => { 
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); 
        delayChange();
    };
    const prevSlider = () => { 
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length); 
        delayChange();
    };
    const delayChange = () => { setTimeout(() => { setImageActive(0); }, 180); };

    return (
        <SliderContainer >
            <Slider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((product, index) => {
                    return (
                        <Product key={index}>
                            <Image src={product.images[imageActive].image} alt="Imagem do produto" />
                        </Product>
                    )
                })}
            </Slider>

            <ReturnArrow src={images.returnArrow} onClick={prevSlider} alt="Botão de voltar"/>
            
            <ForwardArrow src={images.forwardArrow} onClick={nextSlider} alt="Botão de avançar"/>
        </SliderContainer>
    );
};