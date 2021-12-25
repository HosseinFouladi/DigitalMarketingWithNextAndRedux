import styled from 'styled-components';
import { device } from '../../utilities/GlobalVariablesStyles';
import { colors } from '../../utilities/GlobalVariablesStyles';
export const Form=styled.form` 
 height: 100%;
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
`;


export const Input=styled.input` 
@media ${device.mobileS}{
    font-size: .4rem;
    padding: .2rem .5rem;
}
@media ${device.mobileM}{
    font-size: .6rem;
    padding: .3rem .7rem;
}
@media ${device.tablet}{
    font-size: .8rem;
    padding: .4rem .8rem;
}
@media ${device.laptop}{
    font-size: 1rem;
    padding: .4rem 1rem;
}
border: none;
border-bottom: 1px solid ${colors.gray};
outline: none;
&:focus{
 border: 1px solid ${colors.primaryLight} ;
}

border-radius: 3px;
color:${colors.black};
`;
export const ErrorSpan=styled.span`
 color:${colors.red};
 
 @media ${device.mobileS}{
    font-size: .4rem;
    
}
@media ${device.mobileM}{
    font-size: .6rem;
    ;
}
@media ${device.tablet}{
    font-size: .8rem;
    
}
@media ${device.laptop}{
    font-size: 1rem;
}
`
export const InputMark=styled.span` 
 position: absolute;

 background-color: ${colors.white};
 visibility: hidden;
 color:${colors.primaryLight};
 ${Input}:focus +&& {
     visibility: visible;
 }

 @media ${device.mobileS}{
    font-size: .2rem;
    left: 1rem;
    top:-.1rem;
}
@media ${device.mobileM}{
    font-size: .4rem;
    left: 1rem;
    top:-.3rem;
}
@media ${device.tablet}{
    font-size: .6rem;
    left: .8rem;
    top:-.4rem;
    
}
@media ${device.laptop}{
    font-size: .8rem;
    left: 1rem;
    top:-.6rem;
}
`
export const InputBox=styled.div` 
position: relative;
display: flex;
flex-grow: 1;
flex-direction: column;
align-items: center;
`;


export const Label=styled.label` 
 cursor: pointer;
 box-shadow: 0 0 5px 0 ${colors.gray};
 padding:5px 5px;
 border-radius: 5px;

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
color:'#FF7F50';
`
export const FileInput=styled.input` 
  opacity: 0;
   position: absolute;
   z-index: -1;
`
export const SubmitButton=styled.button` 
 background-color: ${colors.primaryDark};
 color:${colors.white};
 border-radius: 1rem;
 transition: all .3s ;
 box-shadow: 0 5px 5px 0 ${colors.gray};
 
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

 &:hover{
     transform: translateY(-3px) scale(1.1);
     cursor: pointer;
 }

`
