import styled,{css} from "styled-components";
import { colors } from "../../utilities/GlobalVariablesStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from "../../utilities/GlobalVariablesStyles";
import BasicDateTimePicker from "../../components/material-ui/DataTimePicker";
import Image from "next/image";


export const Container=styled.div` 
 display: flex;
 flex-direction: column;
 width: 100vw;
 height: 100vh;
 background-color: ${colors.lightGray};
 font-family: sans-serif;
`
const SetBorder=css` 
 transition: all .2s;
 height: 100%;
 &:hover{
     border-bottom: 2px solid ${colors.red};
 }
`
export const HeaderSection=styled.section` 
 flex: 1;
 background-color: ${colors.white};
 border-bottom: 1px solid gray;
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 box-shadow: 0 0 5px 0 gray;
 border-radius: 3px;
 padding-top: 5px;
 padding-bottom: 5px;
`
export const ContentSection=styled.section` 
 flex: 10;
 width: 100%;


`
export const IconSize=css` 
  @media ${device.mobileS}{
    font-size: .3rem;
}
@media ${device.mobileM}{
    font-size: .5rem;
}
@media ${device.tablet}{
    font-size:.7rem;
}
@media ${device.laptop}{
    font-size: 1.1rem;
}
`
export const CategoriesLink=styled.div` 
 flex:1 ;
 display:flex;
 justify-content: center;
 align-items: center;
 ${SetBorder};
`
export const FontAwesome=styled(FontAwesomeIcon)` 

 color:${colors.icons};
 ${IconSize};
`
export const LinkText=styled.span` 
margin-right: 5px;
cursor: pointer;
 color:${colors.black};
 font-weight: 550;
 @media ${device.mobileS}{
    font-size: .5rem;
}
@media ${device.mobileM}{
    font-size: .6rem;
}
@media ${device.tablet}{
    font-size:.7rem;
}
@media ${device.laptop}{
    font-size: .9rem;
}
`
export const SearchInput=styled.input` 
 width: 100%;
 text-align: right;
 background-color: #DDDDDD;
 border: none;


 &:focus{
    outline: none;
    border: none;
 }
 border-radius: .5rem;
 @media ${device.mobileS}{
    font-size: .5rem;
    padding: .2rem 2rem;
}
@media ${device.mobileM}{
    font-size: .6rem;
    padding: .3rem 2rem;
}
@media ${device.tablet}{
    font-size:.7rem;
    padding: .4rem 2rem;
}
@media ${device.laptop}{
    font-size: .9rem;
    padding: .5rem 2rem;
}

`
export const SearchBox=styled.div` 
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 @media ${device.mobileS}{
     flex:1;
}
@media ${device.mobileM}{
   flex:1;
}
@media ${device.tablet}{
    flex: 1;
}
@media ${device.laptop}{
   
    flex: 1;
}
`
export const SearchIcon=styled(FontAwesomeIcon)` 

 position: absolute;
 right: .6rem;
 color:${colors.icons};
 @media ${device.mobileS}{
    font-size: .3rem;
}
@media ${device.mobileM}{
    font-size: .5rem;
}
@media ${device.tablet}{
    font-size:.7rem;
}
@media ${device.laptop}{
    font-size: 1.1rem;
}
`
export const TimeContainer=styled.div` 

 display: flex;
 justify-content: center;

 @media ${device.mobileS}{
    width: 0;
}
@media ${device.mobileM}{
   width: 0;
}
 @media ${device.tablet}{
    flex:1;
}
@media ${device.laptop}{
   flex:1;
}
`

export const ProfileContainer=styled.div` 
 display: flex;
 justify-content: center;
 align-items: center;
 flex: 1;
 ${SetBorder};
`
export const Username=styled.strong` 
  @media ${device.mobileS}{
    font-size:.6rem ;
}
@media ${device.mobileM}{
   font-size:.8rem;
}
 @media ${device.tablet}{
    font-size: 1rem;
}
@media ${device.laptop}{
   font-size: 1.2rem;
}
margin-right: 5px;
`
export const ProfilePicture=styled.div` 

 position: relative;
  @media ${device.mobileS}{
    width: .8rem;
   height: .8rem
}
@media ${device.mobileM}{
    width: 1rem;
   height: 1rem;
}
 @media ${device.tablet}{
    width: 1.2rem;
   height: 1.2rem
}
@media ${device.laptop}{
   width: 1.4rem;
   height: 1.4rem;
}
`
export const UserImage=styled(Image)` 
 border-radius: 50%;
`
export const CartIcon=styled(FontAwesomeIcon)` 
  @media ${device.mobileS}{
    font-size:.8rem ;
}
@media ${device.mobileM}{
   font-size:1rem;
}
 @media ${device.tablet}{
    font-size: 1.3rem;
}
@media ${device.laptop}{
   font-size: 1.5rem;
}
 color:${colors.primaryDark};
`
export const CartBox=styled.div` 
 flex:1; 
 ${SetBorder};
 display: flex;
 justify-content: center;
 align-items: center;
`
export const ProductCount=styled.div` 
 border-radius: 50%;
 background-color: ${colors.lightGray};
 color:red;
 display: flex;
 justify-content: center;
 align-items: center;

 @media ${device.mobileS}{
    width: .5rem;
   height: .5rem;
   transform: translate(-.2rem,-.4rem);
   font-size:.3rem;
}
@media ${device.mobileM}{
    width: .6rem;
   height: .6rem;
   transform: translate(-.3rem,-.5rem);
   font-size: .4rem;
}
 @media ${device.tablet}{
    width: .6rem;
   height: .6rem;
   transform: translate(-.4rem,-.6rem);
   font-size: .4rem;
}
@media ${device.laptop}{
   width: .7rem;
   height: .7rem;
   transform: translate(-.5rem,-.7rem);
   font-size: .5rem;
}
`