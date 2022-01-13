import styled from "styled-components";
import { darkGray, device } from "../../utilities/GlobalVariablesStyles";
import { colors } from "../../utilities/GlobalVariablesStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Details=styled.section` 
 display: flex;
 flex-direction: column;
 direction: ltr;
 text-align:right;
 background-color: ${colors.white};
 padding: 0 1rem;
 font-family: Arial, Helvetica, sans-serif;
 @media ${device.mobileS}{
    width: 100%;
    height: 70%;
}
@media ${device.mobileM}{
    width: 100%;
    height: 70%;
}
@media ${device.tablet}{
    width: 33%;
    height: 100%;
}
@media ${device.laptop}{
   width: 33%;
   height: 100%;
}
`
export const TitleBox=styled.div` 
 display: flex;
 flex-direction: column;
 justify-content: end;
 align-items: flex-end;
 flex: 1;
 width: 100%;
 border-bottom:.5px solid ${colors.lightBlue};
 padding-bottom: 5px;
 margin-bottom: 5px;
` 
export const ProductName=styled.strong` 

@media ${device.mobileS}{
    font-size: .6rem;
}
@media ${device.mobileM}{
    font-size: .8rem;
}
@media ${device.tablet}{
    font-size: 1rem;
}
@media ${device.laptop}{
    font-size: 1.2rem;
}

`
export const DetailsBox=styled.div` 
 flex:7;
 display: flex;
 flex-direction: column;
 width: 100%;
 font-family: monospace;
`
export const LikeBox=styled.div` 
 display: flex;
 justify-content: end;
 align-items: center;
 margin-bottom: 1rem;

`
export const LikeIcon=styled(FontAwesomeIcon)` 
color:${(props)=>props.color};
cursor: pointer;

 @media ${device.mobileS}{
    font-size: 1rem;
}
@media ${device.mobileM}{
    font-size: 1rem;
}
@media ${device.tablet}{
    font-size: 1.2rem;
}
@media ${device.laptop}{
    font-size: 1.5rem;
}
`
export const LikeCount=styled.span` 
 margin-right: 5px;
 @media ${device.mobileS}{
    font-size: .6rem;
}
@media ${device.mobileM}{
    font-size: .7rem;
}
@media ${device.tablet}{
    font-size: .8rem;
}
@media ${device.laptop}{
    font-size: 1rem;
}
color:${darkGray};
`
export const ColorsText=styled.span` 
 margin-top: 2rem;
  @media ${device.mobileS}{
    font-size: .6rem;
}
@media ${device.mobileM}{
    font-size: .7rem;
}
@media ${device.tablet}{
    font-size: .9rem;
}
@media ${device.laptop}{
    font-size: 1.1rem;
}
`
export const ColorsTypeBox=styled.div` 
 display: flex;
 align-items: center;
 margin-bottom: 1rem;
 justify-content: center;
 margin-top: 5px;
`
export const ColorsType=styled.div` 

 border-radius: 50%;
 background-color: ${(props)=>props.color};
 margin-left: 5px;
  @media ${device.mobileS}{
    width: 1rem;
    height: 1rem
}
@media ${device.mobileM}{
    width: 1rem;
    height: 1rem
}
@media ${device.tablet}{
    width: 1.5rem;
    height: 1.5rem
}
@media ${device.laptop}{
    width: 1.7rem;
    height: 1.7rem;
}
`
export const PropertiyList=styled.ul` 
 display: flex;
 flex-direction: column;
 text-align:right;
`
export const Property=styled.li` 
 padding: .5rem 0;
 display: flex;
 justify-content: end;
 align-items: center;
 color:${darkGray};
 @media ${device.mobileS}{
    font-size: .6rem;
}
@media ${device.mobileM}{
    font-size: .7rem;
}
@media ${device.tablet}{
    font-size: .8rem;
}
@media ${device.laptop}{
    font-size: 1rem;
}

`