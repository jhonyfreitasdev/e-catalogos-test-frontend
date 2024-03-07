import styled from "styled-components";

const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #809caa;
    padding: 8px 20px;
    width: 100%;

    img {
        cursor: pointer;
    }
`
const ProductSectionContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`
const ProductSection = styled.p `
    color: #809caa;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase; 
    padding: 3px;
    border-radius: 5px;
    background-color: #fdfffd;
    margin: auto;
`
const FunctionSpan = styled.span `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    color: #809CAA;
    border-radius: 9999px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    width: 24px;
    height: 24px;
`

export { HeaderContainer, ProductSectionContainer, ProductSection, FunctionSpan }