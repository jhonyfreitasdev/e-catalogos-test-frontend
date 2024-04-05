import styled from "styled-components";

const ProductScreenContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
const Line = styled.div `
    background-color: #ccd0cf;
    width: calc(100% - 40px);
    height: 1px;
    margin: 0 auto;
`;

export { ProductScreenContainer, Line };