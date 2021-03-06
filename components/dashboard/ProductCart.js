import {
  CartContainer,
  Details,
  PictureBox,
  CarouselCaptionText,
  ProductTitle,
  StockBox,
  ScoreBox,
  Score,
  DetailIcon,
  PositionBox,
  PriceContainer,
  Price,
  Currency,
  LookButton,
  ButtonContainer,
} from "../../styles/dashboard/ProductCart.style";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCheck, faStar,faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { findCategory } from "../../redux/actions/ProductActions";
import { useEffect } from "react";

const ProductCart = ({ relatedProduct }) => {
  const dispatch = useDispatch();

  const determineCategory = useCallback((id) => {
    dispatch(findCategory(id));
  });
  return (
    <CartContainer>
      <PictureBox>
        <Carousel hover="pause" indicators={false}>
          {relatedProduct &&
            relatedProduct.imageUrl.map((image, index) => {
              return (
                <Carousel.Item key={index}>
                  <Image
                    src={image}
                    width="250"
                    height="170"
                    priority
                    alt={relatedProduct.productName}
                  />
                  <Carousel.Caption>
                    <CarouselCaptionText>
                      {relatedProduct.productName}
                    </CarouselCaptionText>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
        </Carousel>
      </PictureBox>
      <Details>
        <ProductTitle>
          {relatedProduct && relatedProduct.productName}
        </ProductTitle>
        <StockBox>
          <ScoreBox>
            <PositionBox pos="start">
              <DetailIcon color="yellow" icon={faStar}></DetailIcon>
              <Score>{relatedProduct && relatedProduct.score}</Score>
            </PositionBox>
          </ScoreBox>
          <ScoreBox>
            <PositionBox pos="end">
              <Score>
                {relatedProduct.isAvailable ? "????????????????????????" : "??????????????"}
              </Score>
              <DetailIcon color={relatedProduct.isAvailable?'avalable':'red'} icon={relatedProduct.isAvailable?faCheck:faTimes}></DetailIcon>
            </PositionBox>
          </ScoreBox>
        </StockBox>
        <PriceContainer>
          <Currency>??????????</Currency>
          <Price>{relatedProduct.price}</Price>
        </PriceContainer>
        <ButtonContainer>
          <Link href={`/product/${relatedProduct.productId}`}>
            <LookButton
              onClick={() => determineCategory(relatedProduct.categoryId)}
              disabled={relatedProduct.isAvailable ? false : true}
            >
              ????????????
            </LookButton>
          </Link>
        </ButtonContainer>
      </Details>
    </CartContainer>
  );
};

export default ProductCart;
