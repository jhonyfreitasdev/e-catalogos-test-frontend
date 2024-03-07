import { DataContext } from "../../context/data-context";
import { useContext } from "react";
import { images } from "../../objects/images";
import { ProductPackContainer, Pack, Size, TotalPack } from "./style";

export const ProductPack = () => {
    const { data, currentIndex } = useContext(DataContext);

    let totalPack = 0;
    Object.values(data[currentIndex].sizes).forEach(item => { totalPack += item });

    return (
        <ProductPackContainer>
            <Pack> {data[currentIndex].sizes.P} <Size> P </Size> </Pack>
            <Pack> {data[currentIndex].sizes.M} <Size> M </Size> </Pack>
            <Pack> {data[currentIndex].sizes.G} <Size> G </Size> </Pack>
            {data[currentIndex].sizes.GG ? <Pack> {data[currentIndex].sizes.GG} <Size> GG </Size> </Pack> :""}

            <img src={images.equal} alt="Sinal de igual" />

            <Pack> {totalPack} <TotalPack> PACK </TotalPack> </Pack>
        </ProductPackContainer>
    )
}