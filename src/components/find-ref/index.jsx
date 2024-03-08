import { useContext, useState } from "react";
import { DataContext } from "../../context/data-context";
import { images } from "../../objects/images";

import { FindRefContainer, Container, TitleContainer, Title, ContentContainer } from "./style";

export const FindRef = ({ handleFindRefModalToggle }) => {
    const [inputValue, setInputValue] = useState('');
    const [refNotFound, setRefNotFound] = useState(false);
    const { data, setCurrentIndex } = useContext(DataContext);

    const findRef = () => {
        const foundRef = data.find(({ reference }) => reference === inputValue);

        if (foundRef) {
            setCurrentIndex(data.indexOf(foundRef));
            handleFindRefModalToggle();
            setRefNotFound(false);
        } else {
            setRefNotFound(true);
        }
    };

    return (
        <FindRefContainer>
            <Container>
                <TitleContainer>
                    <Title>BUSCAR POR REF</Title>
                    <img src={images.closeButton} alt="Imagem de X" onClick={handleFindRefModalToggle} />
                </TitleContainer>

                <ContentContainer>
                    <div>
                        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="00.00.0000" />
                        {refNotFound && <p>Referencia não encontrada</p>}

                        <button type="button" onClick={findRef}>Buscar</button>
                    </div>
                </ContentContainer>
            </Container>
        </FindRefContainer>
    );
};