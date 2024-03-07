import styled from "styled-components";

const ProductRefContainer = styled.div`
    padding: 6px 0;
`
const Ref = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 8px 20px;
`
const Name = styled.p`
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`
const Code = styled.p`
    color: #024650;
    font-size: 18px;
    font-weight: 400;

    span {
        color: #001a1e;
    }
`
const Price = styled.p`
    color: #001a1e;
    font-size: 18px;
    font-weight: 400;

    span {
        color: #024650;
        font-size: 14px;
    }
`

export { ProductRefContainer, Ref, Name, Code, Price } 