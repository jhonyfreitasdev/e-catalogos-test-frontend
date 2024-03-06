import styled from "styled-components";

const SliderContainer = styled.div`
    position: relative;
    border-bottom: 3px solid #809caa;
    overflow: hidden;
    flex-grow: 1;
    height: 1%;
`
const Slider = styled.div`
    position: relative;
    display: flex;
    transition: transform 0.5s ease 0s;
    width: 100%;
    height: 100%;
`
const Product = styled.div`
    flex: 0 0 100%;    
`
const ReturnArrow = styled.img`
    position: absolute;
    bottom: 40px;
    left: 20px;
    cursor: pointer;
`
const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`
const ForwardArrow = styled.img`
    position: absolute;
    bottom: 40px;
    right: 20px;
    cursor: pointer;
`

export { SliderContainer, Slider, Product, Image, ReturnArrow, ForwardArrow };