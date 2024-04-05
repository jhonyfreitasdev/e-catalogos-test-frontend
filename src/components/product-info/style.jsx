import styled from "styled-components";

const ProductInfoContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00000080;
    width: 100vw;
    height: 100vh;
`;
const Container = styled.div`
    position: relative;
    z-index: 1;
    width: 90%;
    max-width: calc(360px);
    margin: 10vh auto;
`;
const TitleContainer = styled.div`
    position: relative;
    background-color: #809caa;
    padding: 8px 20px;
    border-radius: 3px 3px 0 0;

    img {
        position: absolute;
        top: 4px;
        right: 4px;
        cursor: pointer;
    }
`;
const Title = styled.h1`
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    width: 60%;
    padding: 8px 0;
    margin: 0 auto;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #ffffff;
    border-radius: 0 0 3px 3px;
    min-height: 70vh;
`;
const Colors = styled.p`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin: 0 auto;
    padding: 8px 12px;
`;
const ColorContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;

    div {
        color: #ffffff;
        font-size: 12px;
        text-align: center;
        border-radius: 8px;
        padding: 2px;
        width: 45%;
    }
`;
const Info = styled.p`
    font-size: 14px;
    font-weight: 500;
    padding: 8px 12px;
    
    span {
        font-weight: 400;
    }
`;

export { ProductInfoContainer, Container, TitleContainer, Title, ContentContainer, Colors, ColorContent, Info };