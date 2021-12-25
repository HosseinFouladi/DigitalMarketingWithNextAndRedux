import styled from "styled-components";
import { device } from "../../utilities/GlobalVariablesStyles";
import { colors } from "../../utilities/GlobalVariablesStyles";

export const Details=styled.section` 
 display: flex;
 flex-direction: column;
 flex: 1;
 height: 100%;
 text-align:right;
`
export const ProductName=styled.h4` 

 flex:1;
 width: 100%;
 border-bottom:.5px solid ${colors.lightBlue};
 padding: 5px 0;
 
@media ${device.mobileS}{
    font-size: 1.2rem;
}
@media ${device.mobileM}{
    font-size: 1.2rem;
}
@media ${device.tablet}{
    font-size: 1.2rem;
}
@media ${device.laptop}{
    font-size: 1.2rem;
}

`