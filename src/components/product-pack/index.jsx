import { images } from "../../objects/images";
import { ProductPackContainer, Pack, Size, TotalPack } from "./style";

export const ProductPack = () => {
    return (
        <ProductPackContainer>
            <Pack> {2} <Size> P </Size> </Pack>
            <Pack> {2} <Size> M </Size> </Pack>
            <Pack> {2} <Size> G </Size> </Pack>
            <Pack> {2} <Size> GG </Size> </Pack>

            <img src={images.equal} alt="Sinal de igual" />

            <Pack> {8} <TotalPack> PACK </TotalPack> </Pack>
        </ProductPackContainer>
    )
}