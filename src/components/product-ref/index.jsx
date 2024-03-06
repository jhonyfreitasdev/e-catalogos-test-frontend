import { ProductRefContainer, Ref, Name, Code, Price } from "./style";

export const ProductRef = () => {
    return (
        <ProductRefContainer>
            <Ref>
                <Name>{'casaco'}</Name>
                <Code><span> Ref: </span> {'66.01.0059'}</Code>
                <Price><span> R$ </span> {35.99}</Price>
            </Ref>
        </ProductRefContainer>
    )
}