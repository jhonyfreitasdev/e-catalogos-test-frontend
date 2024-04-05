import { useContext, useEffect, useState } from "react";
import { Header } from "../header";
import { ProductSlider } from "../product-slider";
import { SectionInfo } from "../section-info";
import { ProductRef } from "../product-ref";
import { ValueContainer } from "../value-container";
import { ProductPack } from "../product-pack";
import { DataContext } from "../../context/data-context";
import { ProductInfo } from "../product-info";
import { FindRef } from "../find-ref";

import { ProductScreenContainer, Line } from './style';

export const ProductScreen = () => {
  const [infoModal, setInfoModal] = useState(false);
  const [findRefModal, setFindRefModal] = useState(false);
  const [imageActive, setImageActive] = useState(0);
  const { dataProducts, setDataProducts } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/mock-data.json');
      const productData = await response.json();

      setDataProducts(productData);
    };

    fetchData();
  }, []);

  const handleInfoModal = () => setInfoModal(!infoModal);
  const handleFindRefModal = () => setFindRefModal(!findRefModal);

  return (
    <>
      {dataProducts.length !== 0 && (
        <ProductScreenContainer>
          <Header />
          <ProductSlider imageActive={imageActive} setImageActive={setImageActive} />
          <SectionInfo
            handleInfoModal={handleInfoModal}
            handleFindRefModal={handleFindRefModal}
            setImageActive={setImageActive}
          />
          <Line/>
          <ProductRef />
          <ValueContainer />
          <ProductPack />
          {infoModal && <ProductInfo handleInfoModal={handleInfoModal} />}
          {findRefModal && <FindRef handleFindRefModal={handleFindRefModal} />}
        </ProductScreenContainer>
      )}
    </>
  );
};