
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories, selectRelatedProduct } from "../../redux/selectors/ProductSelector";
import { CategoryItem, CategoryList, CategoryName, ListIcons, ListImages, SideBarBox } from "../../styles/layout/SideBar.style";
import BackImg from '../../public/images/backimg.svg';
import Image from "next/image";
import { setRelatedProducts } from "../../redux/actions/ProductActions";
import { Router, useRouter } from "next/router";

const SideBar=()=>{

    const categories=useSelector(selectAllCategories);
    const addressPrefix='/../public/images/';
    const dispatch=useDispatch();
    const router=useRouter();

    
    const showProduct=id=>{

       dispatch(setRelatedProducts(id));
    }
    const showProductpPage=(e,id)=>{
        e.preventDefault();
        dispatch(setRelatedProducts(id));
        router.push('/product');
        
    }
    return(
        <SideBarBox>
            <CategoryList>
                {categories.map(item=>{
                  return <CategoryItem key={item.categoryId} onMouseEnter={()=>showProduct(item.categoryId)} onClick={(e)=>showProductpPage(e,item.categoryId)}>
                       <CategoryName>{item.categoryName}</CategoryName>
                       <ListIcons >
                           <ListImages src={`${addressPrefix}${item.icon}`} layout='fill' />
                       </ListIcons>
                   </CategoryItem>
                })}
            </CategoryList>
        </SideBarBox>
    )
}
export default SideBar;