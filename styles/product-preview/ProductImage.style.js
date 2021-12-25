import styled from "styled-components";
import { colors } from "../../utilities/GlobalVariablesStyles";
import { device } from "../../utilities/GlobalVariablesStyles";

export const ImageBox=styled.section` 
 flex: 1;
 background-color: ${colors.white};
 height: 100%;
 display: flex;
 flex-direction: column;
`

export const ImageContainer=styled.div` 
 position: relative;
 flex: 7;
 width: 100%;

`
export const OtherImagesBox=styled.div` 
 flex: 3;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`
export const OtherImageContainer=styled.div` 
 position:relative;
 //border-radius: 20px;
 border: 1px solid ${colors.lightGray};
 margin-right: 1rem;
 cursor: pointer;

 @media ${device.mobileS}{
    width: 3rem;
    height: 3rem;
}
@media ${device.mobileM}{
    width: 3rem;
    height: 3rem;
}
@media ${device.tablet}{
    width: 4rem;
    height: 4rem;
}
@media ${device.laptop}{
    width: 4.5rem;
    height: 4.5rem;
}
`