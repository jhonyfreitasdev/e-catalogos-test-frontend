import styled from "styled-components"

const FindRefContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00000080;
    width: 100vw;
    height: 100vh;
`
const Container = styled.div`
    position: relative;
    z-index: 1;
    width: 90%;
    max-width: calc(324px);
    margin: 10vh auto;
`
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
`
const Title = styled.h1`
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    width: 60%;
    padding: 8px 0;
    margin: 0 auto;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 0 0 3px 3px;
    min-height: 70vh;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border-radius: 5px;
        width: 90%;
        padding: 12px 16px;
        
        input {
            background-color: #f0f0f0dc;
            font-size: 18px;
            padding: 8px 12px;
            width: 100%;
            margin: 12px 0;
        }
        p {
            color: #ff0000;
            font-size: 12px;
            font-weight: 300;
            margin: 4px 0;
        }
        button {
            background-color: #6f97ab;
            color: #fff;
            font-family: 'Poppins';
            font-size: 14px;
            text-align: center;
            font-weight: 600;
            cursor: pointer;
            border-radius: 5px;
            padding: 5px 10px;
        }
    }
`

export { FindRefContainer, Container, TitleContainer, Title, ContentContainer }