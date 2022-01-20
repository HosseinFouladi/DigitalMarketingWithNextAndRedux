import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentCategory,
  selectCurrentProduct,
  selectLikeSituation,
} from "../../redux/selectors/ProductSelector";
import {
  ColorsType,
  ColorsTypeBox,
  Details,
  DetailsBox,
  ColorsText,
  LikeBox,
  LikeCount,
  LikeIcon,
  ProductName,
  PropertiyList,
  Property,
  TitleBox,
} from "../../styles/product-preview/ProductDetail.style";
import { colors } from "../../utilities/GlobalVariablesStyles";
import { setLikeCount } from "../../redux/actions/ProductActions";

const ProductDetail = () => {
  const product = useSelector(selectCurrentProduct);
  const category = useSelector(selectCurrentCategory);

  const isLike = useSelector(selectLikeSituation);

  const dispatch = useDispatch();

  const handleColor = () => {
    if (!product.isLiked) {
      dispatch(setLikeCount("increment"));
    } else {
      dispatch(setLikeCount("decrement"));
    }
  };
  return (
    <Details>
      <TitleBox>
        <ProductName>{product && product.productName}</ProductName>
      </TitleBox>
      <DetailsBox>
        <LikeBox>
          <LikeCount>پسند:{product && product.likes}</LikeCount>
          <LikeIcon
            onClick={handleColor}
            color={isLike == true ? colors.red : colors.like}
            icon={faHeart}
          ></LikeIcon>
        </LikeBox>
        <LikeBox>
          <LikeCount>{product && product.score}</LikeCount>
          <LikeIcon color={"#FF9900"} icon={faStar}></LikeIcon>
        </LikeBox>
        <ColorsText>:رنگ های موجود</ColorsText>
        <ColorsTypeBox>
          <ColorsType color={product.colors && product.colors[0]}></ColorsType>
          <ColorsType color={product.colors && product.colors[1]}></ColorsType>
          <ColorsType color={product.colors && product.colors[2]}></ColorsType>
        </ColorsTypeBox>
        <ColorsText>ویژگی های کالا</ColorsText>
        <PropertiyList>
          <Property>
            دسته بندی کالا: {category && category.categoryName}
          </Property>
          <Property>تعداد: {product && product.count}</Property>
        </PropertiyList>
      </DetailsBox>
    </Details>
  );
};

export default ProductDetail;
