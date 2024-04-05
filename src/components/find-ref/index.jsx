import { useContext, useState } from "react";
import { DataContext } from "../../context/data-context";
import { images } from "../../utils/images";

import { FindRefContainer, Container, TitleContainer, Title, ContentContainer } from "./style";

export const FindRef = ({ handleFindRefModal }) => {
  const [inputValue, setInputValue] = useState('');
  const [refNotFound, setRefNotFound] = useState(false);
  const { dataProducts, setCurrentIndexProducts } = useContext(DataContext);

  const findRef = () => {
    const foundRef = dataProducts.find(({ reference }) => reference === inputValue);

    if (foundRef) {
      setCurrentIndexProducts(dataProducts.indexOf(foundRef));
      handleFindRefModal();
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
          <img src={images.closeButton} alt="Imagem de X" onClick={handleFindRefModal} />
        </TitleContainer>

        <ContentContainer>
          <div>
            <input 
              type="text" 
              value={inputValue} 
              placeholder="00.00.0000" 
              onChange={e => setInputValue(e.target.value)} 
            />
            {refNotFound && <p>Referencia não encontrada</p>}

            <button type="button" onClick={findRef}> Buscar </button>
          </div>
        </ContentContainer>
      </Container>
    </FindRefContainer>
  );
};