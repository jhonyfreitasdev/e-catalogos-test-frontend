import { DataContext } from "../../context/data-context";
import { useContext } from "react";
import { images } from "../../utils/images";

import { ProductPackContainer, Pack, Size, TotalPack } from "./style";

export const ProductPack = () => {
  const { dataProducts, currentIndexProducts } = useContext(DataContext);
  const { sizes } = dataProducts[currentIndexProducts];

  const totalPack = Object.values(sizes).reduce((acc, item) => acc + item, 0);

  return (
    <ProductPackContainer>
      <Pack> {sizes.P} <Size> P </Size> </Pack>
      <Pack> {sizes.M} <Size> M </Size> </Pack>
      <Pack> {sizes.G} <Size> G </Size> </Pack>
      {sizes.GG && <Pack> {sizes.GG} <Size> GG </Size> </Pack>}

      <img src={images.equal} alt="Sinal de igual" />

      <Pack> {totalPack} <TotalPack> PACK </TotalPack> </Pack>
    </ProductPackContainer>
  );
};