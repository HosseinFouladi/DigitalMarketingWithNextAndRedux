import styled from 'styled-components';
import {colors} from '../../utilities/GlobalVariablesStyles';
import {device} from '../../utilities/GlobalVariablesStyles';
import { darkGray } from '../../utilities/GlobalVariablesStyles';


export const Payment=styled.section` 
direction: ltr;
@media ${device.mobileS}{
    width: 100%;
    height: 20rem;
}
@media ${device.mobileM}{
    width: 100%;
    height: 25rem;
}
@media ${device.tablet}{
    width: 33%;
    height: 100%;
}
@media ${device.laptop}{
   width: 33%;
   height: 100%;
}
 display: flex;
 flex-direction: column;
 padding:4rem 0;
 justify-content: start;
 background-color: ${colors.white};
 font-family: "Yekan"!important;
`
export const PaymentBox=styled.div` 
 width: 95%;
 border: 1px solid ${colors.like};
 background-color: ${colors.lightGray};
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding:1rem 5px;



 @media ${device.mobileS}{
    height: 100%;
    margin-left:.5rem;
}
@media ${device.mobileM}{
    height: 100%;
    margin-left:.7rem;
}
@media ${device.tablet}{
    height: 80%;
}
@media ${device.laptop}{
    height: 70%;
}
`
export const AvailibilityBox=styled.div`
 display: flex;
 align-items: center;
 justify-content: end;
 width: 100%;
 flex: 1;
 border-bottom: 1px solid ${colors.lightGray};
`
export const PriceBox=styled.div` 
 display: flex;
 flex-direction: column;
 justify-content: end;
 flex: 1;
`
export const Explain=styled.p` 
text-align: center;
flex: 2;
 color:${darkGray};//#FF3333
 @media ${device.mobileS}{
    font-size: .6rem;
}
@media ${device.mobileM}{
    font-size: .8rem;
}
@media ${device.tablet}{
    font-size: .8rem;
}
@media ${device.laptop}{
   font-size: 1rem;
}
`
export const CartButton=styled.button` 
 background-color: ${colors.primaryDark};
 color: ${colors.white};
 border-radius: 5px;
 
 border: none;
 @media ${device.mobileS}{
    font-size: .6rem;
    margin-top: .2rem;
}
@media ${device.mobileM}{
    font-size: .7rem;
    margin-top: .5rem;
    width: 60%;
}
@media ${device.tablet}{
    font-size: .9rem;
    margin-top: .5rem;
    
}
@media ${device.laptop}{
   font-size: 1.1rem;
   margin-top: 1rem;
}
&:hover{
    transform: translateY(-5px) scale(1.01);
    box-shadow: 1px 1px 1px 1px ${colors.lightBlue};
}
transition: all .3s;
opacity: ${(props)=>props.opacity=='light'?'40%':'1'};
`
export const ButtonContaier=styled.div` 
 width: 100%;
 display: flex;
 justify-content:center;
`


