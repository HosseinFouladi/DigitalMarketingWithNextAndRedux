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
export const SidebarContainer=styled.section` 
 flex:1;
 height: 100%;
 overflow: hidden;
 display: flex;
// position: relative;
${CategoriesLink}:hover +&& {
    display: none;
 }
`
export const ProductContainer=styled.section` 
 flex: 5;
 height: 100%;
 display: flex;
 overflow: scroll;
 padding:1.5rem 1.5rem;
 flex-wrap:wrap;
 justify-content: center;
 border: 1px solid ${colors.icons};
`
export const ProductPreviewContainer=styled.section` 
 flex:5;
 height: 100%;
 display: flex;
 border: 1px solid ${colors.icons};
// background-color: ${colors.white};
`
