import { CarouselBox, CartContainer, Details, PictureBox,CarouselItem, PictureContainer, Carouselimage, CarouselCaptionText, ProductTitle, StockBox, ScoreBox, Score, DetailIcon, PositionBox, PriceContainer, Price, Currency, LookButton, ButtonContainer } from "../../styles/dashboard/ProductCart.style";
import Image from "next/image";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ProductCart=({relatedProduct})=>{

    return(
        <CartContainer>
            <PictureBox>
            <Carousel hover='pause' indicators={false} >
                {relatedProduct.imageUrl.map((image,index)=>{
                     return <Carousel.Item key={index}>
                                <Image src={image}  width='210' height='170' priority alt={relatedProduct.productName} />
                                <Carousel.Caption>
                                    <CarouselCaptionText>{relatedProduct.productName}</CarouselCaptionText>
                                </Carousel.Caption>
                     </Carousel.Item>
                })}  
            </Carousel>
            </PictureBox>
            <Details>
                <ProductTitle>{relatedProduct.productName}</ProductTitle>
                <StockBox>
                    <ScoreBox>
                        <PositionBox pos='start'>
                            <DetailIcon color='yellow' icon={faStar}></DetailIcon>
                           < Score>{relatedProduct.score}</Score>
                        </PositionBox>
                    </ScoreBox>
                    <ScoreBox>
                        <PositionBox pos='end'>
                        <Score>{relatedProduct.isAvailable?'موجوددرانبار':'ناموجود'}</Score>
                        <DetailIcon color='red' icon={faCheck}></DetailIcon>
                        </PositionBox>
                    </ScoreBox>
                </StockBox>
                <PriceContainer>
                    <Currency>تومان</Currency>
                    <Price>{relatedProduct.price}</Price>
                </PriceContainer>
                <ButtonContainer>
                    <Link href={`/product/${relatedProduct.productId}`} >
                        <LookButton disabled={relatedProduct.isAvailable?false:true}>مشاهده</LookButton>
                    </Link>
                </ButtonContainer>
            </Details>
        </CartContainer>
    )
}

export default ProductCart;