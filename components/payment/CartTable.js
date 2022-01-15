import { ImageContainer, Table,TdImg, Tbody, Td, ToggleIcon, Tr, HeadTr } from "../../styles/payment/CartTable.style"
import Image from "next/image";
import { faChevronLeft, faChevronRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/UserSelector";
import { deleteProductFromUserCart, toggleReservedCount } from "../../redux/actions/UserActions";
import StripeCheckoutButton from "./StripeButton";
import { height } from "@mui/system";
const CartTable=()=>{

    const {products}=useSelector(selectCurrentUser);
    const dispatch=useDispatch();

    const ToggleCount=(product,operator)=>{
        dispatch(toggleReservedCount(product,operator))
    }
    const deleteproduct=id=>{
        dispatch(deleteProductFromUserCart(id))
    }

    return(
 
       <div style={{width:'100%',height:'100%'}}>
           { products.length>0&&   <Table>
            <HeadTr>
                <Td>عملیات</Td>
                <Td>حذف</Td>
                <Td>عکس</Td>
                <Td>قیمت</Td>
                <Td>تعداد سفارش</Td>
                <Td>نام محصول</Td>
                <Td>ردیف</Td>  
            </HeadTr>
            <Tbody>
                {products && products.map((item,index)=>{
                    return   <Tr key={item.productId} indx={index}>
                        <Td>
                            <StripeCheckoutButton  id='stripe' price={item.price*item.reserveCount}/>
                        </Td>
                        <Td>
                        <ToggleIcon onClick={()=>deleteproduct(item.productId)} icon={faTrashAlt} color='red'></ToggleIcon>
                        </Td>
                        <TdImg>
                        <ImageContainer>
                            <Image src={item.imageUrl[0]} layout='fill'/>
                        </ImageContainer>
                        </TdImg>
                        <Td>تومان{item.price*item.reserveCount}</Td>
                        <Td>
                        <ToggleIcon onClick={()=>ToggleCount(item,'decrement')} icon={faChevronLeft}/> {item.reserveCount} <ToggleIcon onClick={()=>ToggleCount(item,'increment')} icon={faChevronRight}/>
                        </Td>
 
                        <Td>{item.productName}</Td>
                        <Td>{index+1}#</Td>
                    </Tr>
                })}
            </Tbody>
        </Table>}
       </div>

    )
}
export default CartTable;