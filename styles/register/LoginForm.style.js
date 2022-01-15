import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors } from '../../utilities/GlobalVariablesStyles';
import { device } from '../../utilities/GlobalVariablesStyles';

export const Form=styled.form` 

 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
 
 @media ${device.mobileS}{
    height:${(props)=>props.type=='login'?'70%;':'100%'}
}
@media ${device.mobileM}{
    height:100%;
}
@media ${device.tablet}{
    height:100%;
}
@media ${device.laptop}{
    height:100%;
}
`;

export const SelectRole=styled.select` 
direction: rtl;
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
border-radius: 3px;
color:${colors.black};
background-color:#E6E6FA;
`
export const RoleOption=styled.option` 

`
export const Input=styled.input` 
background-color:#E6E6FA;
direction: rtl;
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
border-radius: 3px;
color:${colors.black};
`;
export const ErrorSpan=styled.span`

margin-top: ${(props)=>props.err=='img'?'-1rem':''};
 color:${colors.red};
 
 @media ${device.mobileS}{
    font-size: .4rem;
    
}
@media ${device.mobileM}{
    font-size: .5rem;
    ;
}
@media ${device.tablet}{
    font-size: .6rem;
    
}
@media ${device.laptop}{
    font-size: .8rem;
}
`
export const InputMark=styled.span` 
 position: absolute;

 background-color:transparent;
 visibility: hidden;
 color:${colors.primaryLight};
 ${Input}:focus +&& {
     visibility: visible;
 }

 @media ${device.mobileS}{
    font-size: .2rem;
    right: 1rem;
    top:-.1rem;
}
@media ${device.mobileM}{
    font-size: .4rem;
    right: 1rem;
    top:-.3rem;
}
@media ${device.tablet}{
    font-size: .6rem;
    right: .8rem;
    top:-.4rem;
    
}
@media ${device.laptop}{
    font-size: .8rem;
    right: 1rem;
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

export const UploadImageBox=styled.div` 
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #EEEEEE;
 border-radius: 5px;
 border: .5px solid ${colors.like};
 
 @media ${device.mobileS}{
    width:${(props)=>props.type=='admin'?'90%':'6rem'};
    height: 1rem;
}
@media ${device.mobileM}{
    width:${(props)=>props.type=='admin'?'90%':'8rem'};
    height: 1.2rem;
}
@media ${device.tablet}{
    width:${(props)=>props.type=='admin'?'90%':'10rem'};
    height: 1.5rem;
}
@media ${device.laptop}{
    width:${(props)=>props.type=='admin'?'90%':'12rem'};
    height: 2.1rem;
}
`
export const UploadIcon=styled(FontAwesomeIcon)` 
 @media ${device.mobileS}{
    font-size: .6rem;
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
export const Label=styled.label` 
 
 cursor: pointer;
 padding:5px 5px;
 

@media ${device.mobileS}{
    font-size: .5rem;
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
color:'#FF7F50';
`
export const FileInput=styled.input` 
  opacity: 0;
   position: absolute;
   z-index: -1;
`
export const SubmitButton=styled.button` 

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

 background-color: ${(props)=>{
        if(props.loading)
       return '#CCFFCC';
     switch(props.types){
         case 'add':
             return colors.blue;
             case 'edit':
                 return colors.primaryDark
                 default: 
                    return colors.red
     }
  
 }};
 border:none;
 


`
