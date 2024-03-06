import styled from "styled-components";

const ProductPackContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background-color: #809cab;
    padding: 16px 0 15px 0;
`
const Pack = styled.div `
    position: relative;
    background-color: #ffffff;
    color: #6f97ab;
    font-size: 20px;
    font-weight: 400;
    border-radius: 5px;
    padding: 0 10px;
`
const Size = styled.span `
    position: absolute;
    top: -13px;
    right: -12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    font-size: 14px;
    border-radius: 9999px;
    border: 1px solid #6F97AB;
    width: 24px;
    height: 24px;
`
const TotalPack = styled.span `
    position: absolute;
    top: -14px;
    left: 0;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    width: 100%;
`

export { ProductPackContainer, Pack, Size, TotalPack } 