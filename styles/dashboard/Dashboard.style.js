import styled from "styled-components";
import { device } from "../../utilities/GlobalVariablesStyles";
import {colors} from '../../utilities/GlobalVariablesStyles'
import { CategoriesLink } from "../layout/Layout.style";

export const DashboardContainer=styled.div` 
 display: flex;
 width: 100%;
 height: 100%;
 font-family: 'Lemonada';
 overflow: scroll;
 background-color: ${colors.lightGray};
 z-index: 0;

`
export const ProductContainer=styled.section` 
 width: 100%;
 height: 100%;
 display: flex;
 overflow: scroll;
 padding:1.5rem 1.5rem;
 flex-wrap:wrap;
 justify-content: center;
 border: 1px solid ${colors.icons};
`
export const ProductPreviewContainer=styled.section` 

 width: 100%;
 height: 100%;
 display: flex;
 flex-wrap: wrap;
 border: 1px solid ${colors.icons};
 overflow: scroll;
 background-color: ${colors.white};
 justify-content: center;
 direction: rtl;
`
