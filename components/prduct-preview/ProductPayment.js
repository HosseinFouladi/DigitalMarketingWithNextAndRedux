import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../../redux/actions/ProductActions";
import { addProductToUser } from "../../redux/actions/UserActions";
import { selectCurrentProduct } from "../../redux/selectors/ProductSelector";
import { Currency, DetailIcon, Price, PriceContainer, Score } from "../../styles/dashboard/ProductCart.style";
import { AvailibilityBox, ButtonContaier, CartButton, Explain, Payment, PaymentBox, PriceBox } from "../../styles/product-preview/ProductPayment.style";
import Notif from "../notification/Notification";

const ProductPayment=()=>{

    const product=useSelector(selectCurrentProduct);
    const dispatch=useDispatch();
    const addToCart=()=>{
        dispatch(addProductToUser(product));
        dispatch(setCount());
        Notif('success','محصول مورد نظر با موفقیت به سبد کالا اضافه شد','اضافه به سبد خرید!');
    }
    return(
        <Payment>
            <PaymentBox>
            <AvailibilityBox>
                <Score>{product && product.isAvailable?'موجود در انبار':'ناموجود'}</Score>
                <DetailIcon icon={faCheck} color='dont-care'></DetailIcon>
            </AvailibilityBox>
            <Explain>تمامی مسئولیت های ویژگی خریدازجمله رنگ محصول ِقیمت و....برعهده خریدارمیباشدوپس ازپرداخت ِهیچ گونه بازگردانی صورت نمیگیرد</Explain>
            <PriceBox>
                <PriceContainer>
                    <Currency>تومان</Currency>
                    <Price>{product && product.price}</Price>
                </PriceContainer>
               <ButtonContaier>
                <CartButton onClick={addToCart} opacity={product.isAvailable?'bold':'light'} disabled={product && product.isAvailable?false:true} >افزودن به سبد خرید</CartButton>
               </ButtonContaier>
            </PriceBox>
            </PaymentBox>
        </Payment>
    )
}

export default ProductPayment;