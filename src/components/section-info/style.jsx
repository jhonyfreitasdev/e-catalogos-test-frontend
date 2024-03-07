import styled from "styled-components";

const SectionInfoContainer = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 4px;

    img {
        width: 34px;
        height: 34px;
        cursor: pointer;
    }
`
const ImageSlider = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`
const ImageContainer = styled.div `
    border: 1px solid #5da0ad;
    width: 44px;
    height: 44px;
    cursor: pointer;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`
export { SectionInfoContainer, ImageSlider, ImageContainer }