import styled from "styled-components";
import { colors} from '../../utilities/GlobalVariablesStyles';
import { device } from "../../utilities/GlobalVariablesStyles";
import Image from "next/image";

export const SideBarBox=styled.div` 
 width: 100%;
 height: 100%;
 display:flex;
 flex-direction: column;
 justify-content: start;
 background-color: ${colors.primaryDark};
 z-index: 1;
 right:0;
 top:5rem;
 border: 1px solid ${colors.icons};
 border-radius: 5px;
 overflow:hidden;
 
`

export const CategoryList=styled.div` 
 display: flex;
 flex-direction: column;
 background-color: ${colors.primaryDark};//${colors.white}
 width: 100%;
 align-items: center;
 font-family: "Yekan"!important;
 height: 100%;
 overflow:scroll;

`
export const CategoryItem=styled.div` 
width: 100%;
padding: 0 .5rem;
transition: all .3s;
display: flex;
justify-content: center;
align-items: center;
color:${(props)=>props.active?`${colors.red}`:`${colors.white}`};//	#666666

    border-bottom: ${(props)=>props.active?`.2px solid ${colors.lightGray}`:''};
    border-top: ${(props)=>props.active?`.2px solid ${colors.lightGray}`:''};
    //color: ${colors.red};
    background-color:${(props)=>props.active?`${colors.primaryLight}`:`${colors.primaryDark}`};//#eeeeee
    cursor: pointer;


flex:1;
@media ${device.mobileS}{
    min-height: 1.5rem;
}
@media ${device.mobileM}{
    min-height: 1.8rem;
}
@media ${device.tablet}{
    min-height: 2rem;
}
@media ${device.laptop}{
    min-height: 3rem;
}
`
export const CategoryName=styled.span` 

@media ${device.mobileS}{
    font-size:.6rem;
    margin-right: 2px;
}
@media ${device.mobileM}{
    font-size:.8rem;
    margin-right: 2px;
}
@media ${device.tablet}{
    font-size:1rem;
    margin-right: 5px;
}
@media ${device.laptop}{
    font-size:1.2rem;
    margin-right: 5px;
}

`
export const ListIcons=styled.div` 
 overflow:hidden;
 color: #666666;
 position: relative;
 border-radius: 50%;
 margin-left: 2px;
 @media ${device.mobileS}{
    width: .8rem;
    height:.8rem;
}
@media ${device.mobileM}{
    width: 1rem;
    height:1rem;
}
@media ${device.tablet}{
    width: 1.2rem;
    height:1.2rem;
}
@media ${device.laptop}{
    width: 1.4rem;
    height:1.4rem;
}

`
export const ListImages=styled(Image)`
 color:red;
 fill:#666666;
`

