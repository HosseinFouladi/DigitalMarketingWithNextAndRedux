import styled from "styled-components";
import {colors} from '../../utilities/GlobalVariablesStyles';
import { device } from "../../utilities/GlobalVariablesStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  IconSize } from "./Layout.style";
import Image from "next/image";

export const SideBarBox=styled.div` 
 //position: fixed;
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: start;
 background-color: ${colors.white};
 z-index: 1;
 right:0;
 top:5rem;
 border: 1px solid ${colors.icons};
`

export const CategoryList=styled.div` 
 display: flex;
 flex-direction: column;
 background-color: ${colors.white};
 width: 100%;
 align-items: center;
 font-family: 'Merriweather';
 height: 100%;

`
export const CategoryItem=styled.div` 
width: 100%;
padding: 0 .5rem;
transition: all .3s;
display: flex;
justify-content: center;
align-items: center;
color:	#666666;
&:hover{
    border-bottom: .2px solid ${colors.lightGray};
    border-top: .2px solid ${colors.lightGray};
    color: ${colors.red};
    background-color: #eeeeee;
    cursor: pointer;
}
 /*@media ${device.mobileS}{
    height: 1.5rem;
}
@media ${device.mobileM}{
    height: 1.5rem;
}
@media ${device.tablet}{
    height: 2.5rem;
}
@media ${device.laptop}{
   // height: 2.5rem;
   flex:1;
}*/
flex:1;
`
export const CategoryName=styled.span` 

@media ${device.mobileS}{
    font-size:.4rem;
    margin-right: 2px;
}
@media ${device.mobileM}{
    font-size:.6rem;
    margin-right: 2px;
}
@media ${device.tablet}{
    font-size:.9rem;
    margin-right: 5px;
}
@media ${device.laptop}{
    font-size:1rem;
    margin-right: 5px;
}

`
export const ListIcons=styled.div` 
 width: 1rem;
 height:1rem;
 color: #666666;
 position: relative;
 @media ${device.mobileS}{
    width: .5rem;
    height:.5rem;
}
@media ${device.mobileM}{
    width: .6rem;
    height:.6rem;
}
@media ${device.tablet}{
    width: .8rem;
    height:.8rem;
}
@media ${device.laptop}{
    width: 1rem;
    height:1rem;
}
`
export const ListImages=styled(Image)`
 color:red;
 fill:#666666;
`

