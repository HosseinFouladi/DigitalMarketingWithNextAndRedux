import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllCategories, selectRelatedProduct,selectSearchedProducts,selectAllProducts } from "../../redux/selectors/ProductSelector";
import { DashboardContainer, ProductContainer, ProductPreviewContainer, SidebarContainer, TestDiv } from "../../styles/dashboard/Dashboard.style";
import { Paragraph } from "../../styles/register/Register.style";
import SideBar from "../layout/SideBar";
import ProductCart from "./ProductCart";
import ProductImage from "../prduct-preview/ProductImage";


 

 const Dashboard=({type})=>{
 

   const relatedProducts=useSelector(selectRelatedProduct);
   const products=useSelector(selectAllProducts);
   const searchedProducts=useSelector(selectSearchedProducts);
   useEffect(()=>{
      console.log(relatedProducts);
   },[relatedProducts])
    return(
       <DashboardContainer>
            {type=='product'?
             <ProductContainer>
             {searchedProducts.length>0?searchedProducts.map(item=>{
                return  <ProductCart key={item.id} relatedProduct={item}></ProductCart>
             })
             : relatedProducts.length>0?relatedProducts.map(item=>{
                 return  <ProductCart key={item.id} relatedProduct={item}></ProductCart>
                }):products.map((item,index)=>{
                   if((index%3)===0){
                    return <ProductCart key={item.id} relatedProduct={item}></ProductCart>
                   }
                  
                })}
             </ProductContainer>
             :
              <ProductPreviewContainer>
                 <ProductImage></ProductImage>
                 <ProductImage></ProductImage>
                 <ProductImage></ProductImage>
              </ProductPreviewContainer> }
           <SidebarContainer>
              <SideBar></SideBar>
           </SidebarContainer>
       </DashboardContainer>
    )
        
 }
 export default Dashboard;