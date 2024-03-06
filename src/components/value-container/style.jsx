import styled from "styled-components"

const Container = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 2px;
`
const Price = styled.div `
    color: #323131;
    font-size: 16px;
    text-align: center;
    border-radius: 5px;
    padding: 2px;
`
const Count = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 2px 8px;
    border-radius: 5px;

    img{
        width: 36px;
        cursor: pointer;
    }

    p{
        color: #6f97ab;
        font-size: 24px;
        text-align: center;
        padding: 2px;
        line-height: 24px;
        border: 1px solid #6f97ab;
    }
`
const Desc = styled.p `
    color: #000000;
    font-weight: 500;
`

export { Container, Price, Count, Desc }