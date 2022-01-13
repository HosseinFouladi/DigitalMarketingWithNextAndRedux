import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors, darkGray } from "../../utilities/GlobalVariablesStyles";
import { device } from "../../utilities/GlobalVariablesStyles";

export const Table=styled.table` 
 
 background-color: ${colors.white};
 border: .5px solid #AAAAAA!important;
 border-radius: 5px !important;
 z-index:5;
 overflow: scroll;
 text-align:center;
 display: flex;
 flex-direction: column;
 
 @media ${device.mobileS}{
    font-size: .4rem;
    width: 90%;
    max-height: 15rem;
}
@media ${device.mobileM}{
    
    font-size: .6rem;
    width: 90%;
    max-height: 20rem;
}
@media ${device.tablet}{
   
    font-size: 1rem;
    width: 80%;
    max-height: 25rem;
}
@media ${device.laptop}{
    font-size: 1.2rem;
    width: 75%;
    max-height: 30rem;
}
`
export const Thead=styled.thead` 
 background-color: ${colors.black};
 color: ${colors.white};
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding:5px 0;
`
export const Td=styled.td` 
 text-align:center;
 padding:5px 0px;
 width: 13%;
// flex-grow: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 
`
export const Tbody=styled.tbody` 
 font-family: monospace;
 width: 100%;
`
export const Tr=styled.tr` 
 border-bottom: 1px solid #AAAAAA;
 background-color: ${(props)=>(props.indx)%2!=0?`${colors.lightGray}`:`${colors.white}`};
 padding:5px 5px;
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
export const HeadTr=styled.tr` 
 width: 100%;
 padding:5px 0;
 background-color: ${colors.black};
 color: ${colors.white};
 display: flex;
 justify-content: space-between;
 align-items: center;
`
export const ImageContainer=styled.div`
position :relative ;
 border-radius: 50%;
 //perspective: .1px;
 overflow: hidden;
 @media ${device.mobileS}{
    width: 1.3rem;
    height: 1rem;
}
@media ${device.mobileM}{
    
    width: 1.5rem;
    height: 1.2rem;
}
@media ${device.tablet}{
    width: 1.8rem;
    height: 1.5rem;
}
@media ${device.laptop}{
    width: 2rem;
    height: 1.5rem;
}
transition: all .2s;
&:hover{
    position: absolute;
    transform: scale(5);
    z-index:10;
}
`
export const ToggleIcon=styled(FontAwesomeIcon)`
color: ${(props)=>props.color=='red'?`${darkGray}`:`${colors.gray}`};
  @media ${device.mobileS}{
    font-size: .6rem;
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
cursor: pointer;
&:hover{
  color:${(props)=>props.color=='red'?`${colors.red}`:`	${colors.black}`}
}
`
export const TdImg=styled.td` 
 display: flex;
 justify-content: center;
 align-items: center;
`