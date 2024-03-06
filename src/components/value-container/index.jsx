import { images } from "../../objects/images"
import { Container, Price, Count, Desc } from "./style"

export const ValueContainer = () => {
    return (
        <Container>
            <Price>
                <Desc>Atual</Desc>
                <p>{'R$ 0,00'}</p>
            </Price>

            <Count>
                <img src={images.removeButton} alt="Botão de remover" />

                <p> {0} </p>

                <img src={images.addButton} alt="Botão de adicionar" />
            </Count>

            <Price>
                <Desc>Acumulado</Desc>
                <p>{'R$ 0,00'}</p>
            </Price>
        </Container>
    )
}