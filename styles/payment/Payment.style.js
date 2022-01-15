import styled from "styled-components";
import {colors} from '../../utilities/GlobalVariablesStyles';
import { device } from "../../utilities/GlobalVariablesStyles";
export const PaymentPreview=styled.section` 
 position: relative;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content:center;
 align-items: center;
 margin-left: 1.5rem;
 @media ${device.mobileS}{
    padding-top: 3rem;
    padding-bottom: 3rem;
}
@media ${device.mobileM}{
    padding-top: 5rem;
    padding-bottom: 5rem;
}
@media ${device.tablet}{
    padding-top: 8rem;
    padding-bottom: 8rem;
}
@media ${device.laptop}{
    padding-top: 10rem;
    padding-bottom: 10rem;
}

`

export const PayButton=styled.button` 
 background-color: ${colors.primaryDark};
 color:${colors.white};
 border-radius: 5px;
 border: none;
 font-family: "Yekan"!important;
 padding:2px 10px;
 @media ${device.mobileS}{
    font-size: .4rem;
}
@media ${device.mobileM}{
    
    font-size: .6rem;
}
@media ${device.tablet}{
   
    font-size: 1rem;
}
@media ${device.laptop}{
    font-size: 1.2rem;
}
transition: all .3s;
&:hover{
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 1px 1px 0 ${colors.primaryLight};
}
`