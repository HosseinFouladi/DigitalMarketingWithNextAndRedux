import { useSelector } from "react-redux";
import { ImageBox, ImageContainer, OtherImageContainer, OtherImagesBox } from "../../styles/product-preview/ProductImage.style";
import { selectCurrentProduct, selectRelatedProduct } from "../../redux/selectors/ProductSelector";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductImage=()=>{

    const product=useSelector(selectCurrentProduct);
    const [defaultImage,setDefaultImage]=useState(null);

    const changeImage=image=>{
        setDefaultImage(image);
    }
    return(
        <ImageBox>
            <ImageContainer>
            {product && product.imageUrl && <Image src={defaultImage? defaultImage: product.imageUrl[0]} layout='fill' alt={product.productName}/>}
            </ImageContainer>
            <OtherImagesBox>
                {product && product.imageUrl && product.imageUrl.map(image=>{
            return  <OtherImageContainer onClick={()=>changeImage(image)} key={product.productId}>
                            <Image src={image} layout='fill' alt={product.productName}/>
                    </OtherImageContainer>
                })}
            </OtherImagesBox>
        </ImageBox>
    )

}
export default ProductImage;