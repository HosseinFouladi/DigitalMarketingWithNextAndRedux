import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectRelatedProduct,
  selectSearchedProducts,
  selectAllProducts,
} from "../../redux/selectors/ProductSelector";
import {
  DashboardContainer,
  ProductContainer,
  ProductPreviewContainer,
} from "../../styles/dashboard/Dashboard.style";
import ProductCart from "./ProductCart";
import ProductImage from "../prduct-preview/ProductImage";
import ProductDetail from "../prduct-preview/ProductDetail";
import ProductPayment from "../prduct-preview/ProductPayment";

const Dashboard = ({ type }) => {
  const relatedProducts = useSelector(selectRelatedProduct);
  const products = useSelector(selectAllProducts);
  const searchedProducts = useSelector(selectSearchedProducts);

  return (
    <DashboardContainer>
      {type == "product" ? (
        <ProductContainer>
          {searchedProducts.length > 0
            ? searchedProducts.map((item) => {
                return (
                  <ProductCart
                    key={item.id}
                    relatedProduct={item}
                  ></ProductCart>
                );
              })
            : relatedProducts.length > 0
            ? relatedProducts.map((item) => {
                return (
                  <ProductCart
                    key={item.id}
                    relatedProduct={item}
                  ></ProductCart>
                );
              })
            : products.map((item, index) => {
                if (index % 3 === 0) {
                  return (
                    <ProductCart
                      key={item.id}
                      relatedProduct={item}
                    ></ProductCart>
                  );
                }
              })}
        </ProductContainer>
      ) : (
        <ProductPreviewContainer>
          <ProductImage></ProductImage>
          <ProductDetail></ProductDetail>
          <ProductPayment></ProductPayment>
        </ProductPreviewContainer>
      )}
    </DashboardContainer>
  );
};
export default Dashboard;
