
import styled ,{keyframes}from "styled-components";
import { colors } from "../../utilities/GlobalVariablesStyles";
import { device } from "../../utilities/GlobalVariablesStyles";

export const Form=styled.form` 
 background-color: ${colors.white};
 border-radius: 10px;
 box-shadow: 0 0 10px 0 ${colors.gray};
 z-index:5;
 direction: rtl;
 display: flex;
 flex-direction: column;

 @media ${device.mobileS}{
    height: ${(props)=>props.type=='category'?'13rem':'20rem'};
    padding: .5rem.5rem;
    width: 60%;
    &:last-child{
     margin-top:1rem;
 }
}
@media ${device.mobileM}{
    height: ${(props)=>props.type=='category'?'15rem':'23rem'};
    padding: 1rem 1rem;
    width:51%;
    &:last-child{
     margin-top:1rem;
 }
}
@media ${device.tablet}{
    height: ${(props)=>props.type=='category'?'18rem':'28rem'};
    padding: 1rem 1rem;
    width: 40%;
     &:last-child{
     margin-left: 2rem;
     margin-top: 0;
 }
}
@media ${device.laptop}{
    height: ${(props)=>props.type=='category'?'22rem':'33rem'};
    padding: 1rem 1rem;
    width: 40%;
    &:last-child{
     margin-left: 2rem;
     margin-top: 0;
 }
}
`
export const Subject=styled.strong` 

margin-bottom: 10px;
color: ${colors.black};
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
export const Titles=styled.span`
margin-bottom: 5px;
 color:	#777777;
 @media ${device.mobileS}{
    font-size: .4rem;
}
@media ${device.mobileM}{
    font-size: .4rem;
}
@media ${device.tablet}{
    font-size:.5rem;
}
@media ${device.laptop}{
    font-size: .7rem;
}
`
export const Input=styled.input` 
 width: 90%;
 border-radius: 5px;
 background-color: #EEEEEE;
 border: .5px solid ${colors.like};
 margin-bottom: 1rem;
 &:focus{
     outline: none;
    
 }
 @media ${device.mobileS}{
    font-size: .4rem;
    padding: 0 .5rem;
}
@media ${device.mobileM}{
    font-size: .6rem;
    padding: 0 .7rem;
}
@media ${device.tablet}{
    font-size: .8rem;
    padding: .1rem .8rem;
}
@media ${device.laptop}{
    font-size: 1rem;
    padding: .2rem 1rem;
}
`
export const ButtonBox=styled.div` 
 display: flex;
 align-items: center;
 width: 100%;
 justify-content: center;
 margin-top: 1.5rem;
`
export const AddButton=styled.button` 
 background-color: ${(props)=>{
        if(props.loading)
       return '#CCFFCC';
     switch(props.chooseColor){
         case 'add':
             return colors.blue;
             case 'edit':
                 return colors.primaryDark
                 default: 
                    return colors.red
     }
  
 }};
 color:${colors.white};
 border:none;
 border-radius: 5px;
 
 @media ${device.mobileS}{
    padding: .1rem .6rem;
    font-size: .4rem;
    margin-left: .3rem;
}
@media ${device.mobileM}{
    padding: .1rem .8rem;
    font-size: .5rem;
    margin-left: .5rem;
}
@media ${device.tablet}{
    padding: .1rem 1.1rem;
    font-size: .9rem;
    margin-left: 1rem;
}
@media ${device.laptop}{
    padding: .2rem 1.3rem;
    font-size: 1rem;
    margin-left: 1rem;
}
`
const rotator=  keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
    `

export const ButtonContent=styled.div` 
 display: flex;
 justify-content: center;
 align-items: center;
`
export const ButtonText=styled.span` 
`
export const Loader=styled.svg`
 animation: ${rotator} 1.4s linear infinite;
 @media ${device.mobileS}{
    width: .8rem ;
    height:.8rem;
}
@media ${device.mobileM}{
    width: 1rem ;
    height:1rem
}
@media ${device.tablet}{
    width: 1.5rem ;
    height:1.5rem;
}
@media ${device.laptop}{
    width: 2rem;
    height:2rem;
    margin-right: 5px;
}

` 

  const colorsAnim=keyframes` 
  0% {
stroke: #4285F4;
}
25% {
stroke: #DE3E35;
}
50% {
stroke: #F7C223;
}
75% {
stroke: #1B9A59;
}
100% {
stroke: #4285F4;
}
`
const dash=keyframes` 
0% {
stroke-dashoffset: 187;
}
50% {
stroke-dashoffset: 46.75;
transform: rotate(135deg);
}
100% {
stroke-dashoffset: 187;
transform: rotate(450deg);
}
`
export const Circle=styled.circle`
stroke-dasharray: 187;
stroke-dashoffset: 0;
transform-origin: center;
-webkit-animation: ${dash} 1.4s ease-in-out infinite, ${colorsAnim} 5.6s ease-in-out infinite;
animation: ${dash} 1.4s ease-in-out infinite, ${colorsAnim} 5.6s ease-in-out infinite;
`

  