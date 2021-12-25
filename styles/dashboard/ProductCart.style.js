import styled,{css, keyframes} from "styled-components";
import { device,colors } from "../../utilities/GlobalVariablesStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconSize } from "../layout/Layout.style";



const rotate = keyframes`
  0%{
    transform:  translateX(-20rem);

  }

  50%{
      transform: translateX(5rem) rotateY(180deg); 
  }

  80%{
    transform:  rotateY(180deg); 
  }
  100% {
    transform:   translateX(0);
  }
`;

export const CartContainer=styled.div` 
 margin-right: 2rem;
 background-color: ${colors.white};
 animation: ${rotate} 3s linear ;
 margin-bottom: 2rem;
 border: 1px solid ${colors.icons};
 display: flex;
 flex-direction: column;
 font-family: 'Merriweather', serif;
 z-index: 0;


 @media ${device.mobileS}{
    width: 8rem;
    height: 15rem;
}
@media ${device.mobileM}{
    width: 10rem;
    height:18rem;
}
@media ${device.tablet}{
    width: 11rem;
    height: 20rem;
}
@media ${device.laptop}{
    width: 13rem;
    height: 23rem;
}
`
const Size=css` 
@media ${device.mobileS}{
    font-size: .8rem;
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
export const PictureBox=styled.div` 
 flex:2;
 width: 100%;
 position: relative;

`
export const Details=styled.div` 
 flex:3;
 width: 100%;
 padding: 1rem;
 display: flex;
 flex-direction: column;

 
`
export const ProductTitle=styled.h6` 
 text-align: right;
 flex: 1;
 ${Size};
 color:${colors.lightBlue};
`
export const StockBox=styled.div` 
 flex: 1;
 display: flex;
 justify-content: space-between;
 align-items: center;
 color:${colors.gray};
`
export const ScoreBox=styled.div` 
 flex:1;
 display: flex;
 align-items: center;
`
export const PositionBox=styled.div` 
 width: 100%;
 display: flex;
 justify-content: start;
 align-items: center;
`
export const Score=styled.span` 
 ${Size};
`
export const DetailIcon=styled(FontAwesomeIcon)`
 ${IconSize};
 color:${(props)=>props.color==='yellow'?'#FF9900':'#3399CC'};
`

export const PriceContainer=styled.div` 
 flex:1;
 display: flex;
`
export const Price=styled.strong` 
 ${Size};
 color:${colors.red};
`
export const Currency=styled.span` 
 margin-right: 5px;
 ${Size};
`
export const CarouselCaptionText=styled.span`
    transform: translateY(-3rem);
    visibility: hidden;
`
export const ButtonContainer=styled.div` 
 flex:1;
 display: flex;
 justify-content:center;
 align-items: center;
`
export const LookButton=styled.button` 

 @media ${device.mobileS}{
    padding: 0 .6rem;
    font-size: .6rem;
}
@media ${device.mobileM}{
    padding: 0 .8rem;
    font-size: .8rem;
}
@media ${device.tablet}{
    padding: .1rem 1.1rem;
    font-size: .9rem;
}
@media ${device.laptop}{
    padding: .1rem 1.3rem;
    font-size: 1rem;
}
background-color: ${colors.primaryLight};
color:${colors.white};
border-radius: 10px;
transition:all .2s;

&:hover{
    transform:translateY(-5px);
}
`
