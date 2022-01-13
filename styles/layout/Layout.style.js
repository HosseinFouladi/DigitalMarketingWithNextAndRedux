import styled,{css} from "styled-components";
import { colors } from "../../utilities/GlobalVariablesStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from "../../utilities/GlobalVariablesStyles";
import Image from "next/image";


export const Container=styled.div` 
 display: flex;
 flex-direction: column;
 width: 100vw;
 height: 100vh;
 background-color: ${colors.lightGray};
 font-family: sans-serif;
 position: relative;
 direction: rtl;
`
const SetBorder=css` 
 transition: all .2s;
 height: 100%;
 &:hover{
     border-bottom: 2px solid ${colors.red};
 }
`
export const HeaderSection=styled.section` 
 //flex: 1;
 direction: ltr;
 position: fixed;
 z-index:20;
 background-color: ${colors.white};
 border-bottom: 1px solid gray;
 width: 100vw;
 display: flex;
 justify-content: space-between;
 align-items: center;
 box-shadow: 0 0 5px 0 gray;
 border-radius: 3px;
 padding-top: 5px;
 padding-bottom: 5px;
 padding-right: 5px;

 @media ${device.mobileS}{
    height: 1.5rem;
}
@media ${device.mobileM}{
    height: 2rem;
}
@media ${device.tablet}{
    height: 3rem;
}
@media ${device.laptop}{
    height: 3.5rem;
}
`
export const CategoriesLink=styled.div` 
 flex:1 ;
 display:flex;
 //justify-content: center;
 flex-direction: column;
 justify-content: start;
 align-items: end;
 ${SetBorder};
 cursor: pointer;
`
export const CategoryBox=styled.div` 
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`

export const AdminJob=styled.span` 
 
`
export const SidebarContainer=styled.section` 
 height: 99vh;
 position: fixed;
 overflow: hidden;
 display: flex;
 float: right;
 direction: ltr;
 z-index:20;

 @media ${device.mobileS}{
    padding-top: 1.2rem;
    width: 4rem;
    margin-right: -.4rem;
    visibility: ${(props)=>props.isOpen?'visible':'hidden'};
}
@media ${device.mobileM}{
    padding-top: 1.65rem;
    width: 6rem;
    margin-right: -.6rem;
    visibility: hidden;
 ${CategoriesLink}:hover & {
     visibility: visible;
 }

}
@media ${device.tablet}{
    visibility: hidden;
 ${CategoriesLink}:hover & {
     visibility: visible;
 }
    padding-top: 2.7rem;
    width: 7rem;
    margin-right: -.8rem;
}
@media ${device.laptop}{
    visibility: hidden;
 ${CategoriesLink}:hover & {
     visibility: visible;
 }
    padding-top: 3.2rem;
    width: 9rem;
    margin-right: -1rem;
}
// position: relative;
`
export const ContentSection=styled.section` 
 flex: 10;
 width: 100%;
 direction: ltr;
 @media ${device.mobileS}{
    padding-top: 1.5rem;
}
@media ${device.mobileM}{
    padding-top: 2rem;
}
@media ${device.tablet}{
    padding-top: 3rem;
}
@media ${device.laptop}{
    padding-top: 3.5rem;
}
overflow-y: scroll;

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

export const FontAwesome=styled(FontAwesomeIcon)` 

 &:hover{
     background-color: ${(props)=>props.isSort?`#ced4da`:`transport`};
 }
 cursor: pointer;
 color:${colors.icons};
 ${IconSize};
`
export const LinkText=styled.span` 

cursor: pointer;
 color:${colors.black};
 font-weight: 550;
 @media ${device.mobileS}{
    font-size: .3rem;
    margin-right: ${(props)=>props.margin!='no'?'1px':''};
}
@media ${device.mobileM}{
    font-size: .6rem;
    margin-right: ${(props)=>props.margin!='no'?'5px':''};
}
@media ${device.tablet}{
    font-size:.7rem;
    margin-right: ${(props)=>props.margin!='no'?'5px':''};
}
@media ${device.laptop}{
    font-size: .9rem;
    margin-right: ${(props)=>props.margin!='no'?'5px':''};
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

 justify-content: center;
 flex:1;
 display: ${(props)=>props.isAdmin==true?'flex':'none'};
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
    font-size:.4rem ;
}
@media ${device.mobileM}{
   font-size:1rem;
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