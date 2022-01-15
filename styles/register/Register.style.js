import styled from 'styled-components';
import { colors, darkGray } from '../../utilities/GlobalVariablesStyles';
import { device } from '../../utilities/GlobalVariablesStyles';


export const Container=styled.div` 
 //position: relative;
 display: flex;
 width: 100vw;
 height: 100vh;
 justify-content: center;
 align-items: center;
 font-family: "Yekan"!important;


`
export const RegisterContianer=styled.main` 
 position: absolute;
 top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

 border-radius: 5%;
 z-index:5;
 display: flex;
 @media ${device.mobileS}{
    width: 80%;
    height: 60%;
 }
 @media ${device.mobileM}{
    width: 80%;
 height: 75%;
 }
 @media ${device.tablet}{
    width: 80%;
 height: 75%;
 }
 @media ${device.laptop}{
    width: 80%;
 height: 75%;
 }
`
export const RegisterSection=styled.section` 
 border-top-left-radius: 5%;
 border-bottom-left-radius: 5%;
 flex:2;
 background-color: ${colors.white};
 height: 100%;
 display: flex;
 flex-direction: column;
 //justify-content: space-evenly;
 align-items: center;
`
export const IconContainer=styled.div` 
 display: flex;
 flex:1;
 justify-content: center;
 align-items: center;
`
export const SiteName=styled.strong` 
 color:${colors.black};//lightBlue
 @media ${device.mobileS}{
     font-size: .8rem;
 }
 @media ${device.mobileM}{
     font-size: 1rem;
 }
 @media ${device.tablet}{
     font-size: 1.2rem;
 }
 @media ${device.laptop}{
     font-size: 1.4rem;
 }
`
export const Icon=styled.div`
 @media ${device.mobileS}{
    width: 1rem;
     height: 1rem;
 } 
  @media ${device.mobileM}{
     width: 1.5rem;
     height: 1.5rem;
 }
 @media ${device.tablet}{
    width: 2rem;
     height: 2rem;
 }
 @media ${device.laptop}{
    width: 2.5rem;
     height: 2.5rem;
 }
`
export const Title=styled.h3` 
 color:${darkGray};//primaryLight
 flex:1;
 //background-image: linear-gradient(to right,${colors.primaryLight},${colors.primaryDark});
 -webkit-background-clip: text;
 //color: transparent;

 @media ${device.mobileS}{
   font-size: .7rem;
 } 
  @media ${device.mobileM}{
    font-size: .9rem;
 }
 @media ${device.tablet}{
    font-size: 1.1rem;
 }
 @media ${device.laptop}{
    font-size: 1.3rem;
 }
`
export const FormContainer=styled.div` 
 flex:5;
`
export const AddressContainer=styled.div` 
 flex:1;
 display: flex;
 justify-content: end;
 flex-direction: column;
`
export const Address=styled.h4` 
 color:${colors.gray};
 
 @media ${device.mobileS}{
   font-size: .4rem;
 } 
  @media ${device.mobileM}{
    font-size: .6rem;
 }
 @media ${device.tablet}{
    font-size: .8rem;
 }
 @media ${device.laptop}{
    font-size: 1rem;
 }
`
export const RightSection=styled.section` 
 flex:1;
 background-image: linear-gradient(to top,${colors.primaryLight},${colors.primaryDark});
 height: 100%;
 border-top-right-radius: 5%;
 border-bottom-right-radius: 5%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 color:${colors.white};
 padding: 0 .7rem;
`
export const Hello=styled.h2` 
  @media ${device.mobileS}{
   font-size: .8rem;
 } 
  @media ${device.mobileM}{
    font-size: 1rem;
 }
 @media ${device.tablet}{
    font-size: 1.2rem;
 }
 @media ${device.laptop}{
    font-size: 1.4rem;
 }
`
export const GuideButton=styled.button` 
  background-color: transparent;
 color:${colors.white};
 border-radius: 1rem;
 transition: all .3s ;
 border:1px solid ${colors.white};
 margin-top: 1rem;
 cursor: pointer;
 &:hover{
     transform: translateY(-3px) scale(1.1);
     cursor: pointer;
 }

 @media ${device.mobileS}{
    padding: .2rem 1rem;
    font-size: .6rem;
}
@media ${device.mobileM}{
    padding: .3rem 1rem;
    font-size: .7rem;
}
@media ${device.tablet}{
    padding: .4rem 1.5rem;
    font-size: .9rem;
}
@media ${device.laptop}{
    padding: .5rem 2rem;
    font-size: 1rem;
}
`
export const Paragraph=styled.p` 
  @media ${device.mobileS}{
    font-size: .5rem;
}
@media ${device.mobileM}{
   
    font-size: .6rem;
}
@media ${device.tablet}{
  
    font-size: .7rem;
}
@media ${device.laptop}{
 
    font-size: .8rem;
}
`
export const BackgroundImage=styled.div` 
 position: relative;
 width: 100%;
 height: 100%;
 background-position: center;
 background-size: cover;
`
