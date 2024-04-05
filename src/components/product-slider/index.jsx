import { useContext } from "react";
import { images } from "../../utils/images";
import { DataContext } from "../../context/data-context";

import { SliderContainer, Slider, Product, Image, ReturnArrow, ForwardArrow } from "./style";

export const ProductSlider = ({ imageActive, setImageActive }) => {
  const { dataProducts, currentIndexProducts, setCurrentIndexProducts } = useContext(DataContext);

  const handleChangeSlider = (direction) => {
    if (direction === 'next'){
      setCurrentIndexProducts((prevIndex) => (prevIndex + 1) % dataProducts.length); 
      changeDelay();
    } else {
      setCurrentIndexProducts((prevIndex) => (prevIndex - 1 + dataProducts.length) % dataProducts.length); 
      changeDelay();
    }
  };

  const changeDelay = () => { setTimeout(() => { setImageActive(0); }, 180); };

  return (
    <SliderContainer >
      <Slider style={{ transform: `translateX(-${currentIndexProducts * 100}%)` }}>
        {dataProducts.map((product, index) => {
          return (
            <Product key={index}>
              <Image src={product.images[imageActive].image} alt="Imagem do produto" />
            </Product>
          );
        })}
      </Slider>

      <ReturnArrow src={images.returnArrow} onClick={() => handleChangeSlider('prev')} alt="Botão de voltar"/>
      <ForwardArrow src={images.forwardArrow} onClick={() => handleChangeSlider('next')} alt="Botão de avançar"/>
    </SliderContainer>
  );
};