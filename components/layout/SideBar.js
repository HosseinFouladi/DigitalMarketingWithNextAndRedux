
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories } from "../../redux/selectors/ProductSelector";
import { CategoryItem, CategoryList, CategoryName, ListIcons, ListImages, SideBarBox } from "../../styles/layout/SideBar.style";
import {  setRelatedProducts } from "../../redux/actions/ProductActions";
import {  useRouter } from "next/router";
import { useState } from "react";

const SideBar=()=>{

    const categories=useSelector(selectAllCategories);
    const dispatch=useDispatch();
    const [id,setId]=useState()
    const router=useRouter();

    
    const showProduct=id=>{
        setId(id);
       dispatch(setRelatedProducts(id));
    }
    const showProductpPage=(e,id)=>{
        e.preventDefault();
        dispatch(setRelatedProducts(id));
        if(window.location.href!='http://localhost:3000/product'){
            router.push('/product');
        }
        
    }
    return(
        <SideBarBox>
            <CategoryList>
                { categories && categories.map(item=>{
                  return <CategoryItem key={item.categoryId} active={id==item.categoryId?true:false} onMouseEnter={()=>showProduct(item.categoryId)} onClick={(e)=>showProductpPage(e,item.categoryId)}>
                       <CategoryName>{item.categoryName}</CategoryName>
                       <ListIcons >
                           <ListImages src={item.icon} layout='fill' />
                       </ListIcons>
                   </CategoryItem>
                })}
            </CategoryList>
        </SideBarBox>
    )
}
export default SideBar;