import styled, { css } from "styled-components";
import { colors } from "../../utilities/GlobalVariablesStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from "../../utilities/GlobalVariablesStyles";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.lightGray};
  font-family: "Yekan" !important;
  position: relative;
  direction: rtl;
`;
const SetBorder = css`
  transition: all 0.2s;
  height: 100%;
  &:hover {
    border-bottom: 2px solid ${colors.red};
  }
`;
export const HeaderSection = styled.section`
  flex-wrap: wrap;
  direction: ltr;
  position: fixed;
  z-index: 20;
  background-color: ${colors.white};
  border-bottom: 1px solid gray;
  width: 100vw;
  display: flex;
  box-shadow: 0 0 5px 0 gray;
  border-radius: 3px;
  padding-right: 5px;
  padding-left: 5px;

  @media ${device.mobileS} {
    height: 5rem;
    justify-content: end;
    align-items: start;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media ${device.mobileM} {
    height: 2rem;
    justify-content: space-between;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  @media ${device.tablet} {
    height: 3rem;
    justify-content: space-between;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  @media ${device.laptop} {
    height: 3.5rem;
    justify-content: space-between;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
export const CategoriesLink = styled.div`
  //flex:1;
  display: flex;
  //justify-content: center;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  cursor: pointer;

  @media ${device.mobileS} {
    margin-bottom: 15px;
    width: 45%;
    order: 2;
  }
  @media ${device.mobileM} {
    margin-bottom: 0;
    width: 22%;
    order: 5;
  }
  @media ${device.tablet} {
    margin-bottom: 0;
    width: 22%;
    order: 5;
  }
  @media ${device.laptop} {
    margin-bottom: 0;
    width: 22%;
    order: 5;
  }
`;
export const CategoryBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdminJob = styled.span``;
export const SidebarContainer = styled.section`
  height: 99vh;
  position: fixed;
  overflow: hidden;
  display: flex;
  float: right;
  direction: ltr;
  z-index: 20;

  @media ${device.mobileS} {
    padding-top: 4.3rem;
    width: 5rem;
    margin-right: -0.6rem;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  }
  @media ${device.mobileM} {
    padding-top: 1.45rem;
    width: 7rem;
    margin-right: -0.6rem;
    visibility: hidden;
    ${CategoriesLink}:hover & {
      visibility: visible;
    }
  }
  @media ${device.tablet} {
    visibility: hidden;
    ${CategoriesLink}:hover & {
      visibility: visible;
    }
    padding-top: 2.1rem;
    width: 9rem;
    margin-right: -0.8rem;
  }
  @media ${device.laptop} {
    visibility: hidden;
    ${CategoriesLink}:hover & {
      visibility: visible;
    }
    padding-top: 2.4rem;
    width: 10rem;
    margin-right: -1rem;
  }
  // position: relative;
`;
export const ContentSection = styled.section`
  flex: 10;
  width: 100%;
  direction: ltr;
  @media ${device.mobileS} {
    padding-top: 4rem;
  }
  @media ${device.mobileM} {
    padding-top: 2rem;
  }
  @media ${device.tablet} {
    padding-top: 3rem;
  }
  @media ${device.laptop} {
    padding-top: 3.5rem;
  }
  overflow: auto;
`;
export const IconSize = css`
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.laptop} {
    font-size: 1rem;
  }
`;

export const FontAwesome = styled(FontAwesomeIcon)`
  &:hover {
    background-color: ${(props) => (props.isSort ? `#ced4da` : `transport`)};
  }
  cursor: pointer;
  color: ${colors.icons};
  ${IconSize};
`;
export const LinkText = styled.span`
  cursor: pointer;
  color: ${colors.black};
  font-weight: 550;
  @media ${device.mobileS} {
    font-size: 0.7rem;
    margin-right: ${(props) => (props.margin != "no" ? "5px" : "")};
  }
  @media ${device.mobileM} {
    font-size: 0.6rem;
    margin-right: ${(props) => (props.margin != "no" ? "5px" : "")};
  }
  @media ${device.tablet} {
    font-size: 0.9rem;
    margin-right: ${(props) => (props.margin != "no" ? "5px" : "")};
  }
  @media ${device.laptop} {
    font-size: 1.2rem;
    margin-right: ${(props) => (props.margin != "no" ? "5px" : "")};
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  text-align: right;
  background-color: #dddddd;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }
  border-radius: 0.5rem;
  @media ${device.mobileS} {
    font-size: 0.7rem;
    padding: 0.1rem 2rem;
  }
  @media ${device.mobileM} {
    font-size: 0.6rem;
    padding: 0.3rem 2rem;
  }
  @media ${device.tablet} {
    font-size: 0.7rem;
    padding: 0.4rem 2rem;
  }
  @media ${device.laptop} {
    font-size: 0.9rem;
    padding: 0.5rem 2rem;
  }
`;
export const SearchBox = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  //flex:1;
  @media ${device.mobileS} {
    justify-content: end;
    margin-bottom: 15px;
    width: 45%;
    order: 1;
  }
  @media ${device.mobileM} {
    justify-content: center;
    width: 25%;
    order: 4;
    margin-bottom: 0px;
  }
  @media ${device.tablet} {
    justify-content: center;
    width: 25%;
    order: 4;
    margin-bottom: 0px;
  }
  @media ${device.laptop} {
    justify-content: center;
    width: 25%;
    order: 4;
    margin-bottom: 0px;
  }
`;
export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 0.8rem;
  color: ${colors.icons};
  @media ${device.mobileS} {
    font-size: 0.5rem;
  }
  @media ${device.mobileM} {
    font-size: 0.5rem;
  }
  @media ${device.tablet} {
    font-size: 0.7rem;
  }
  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;
export const TimeContainer = styled.div`
  justify-content: center;
  //flex:1;
  //20
  display: ${(props) => (props.isAdmin == true ? "flex" : "none")};
  margin-left: 3px;
  @media ${device.mobileS} {
    order: 5;
    width: 35%;
  }
  @media ${device.mobileM} {
    order: 3;
    width: 15%;
  }
  @media ${device.tablet} {
    order: 3;
    width: 15%;
  }
  @media ${device.laptop} {
    order: 3;
    width: 15%;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //flex:1;

  @media ${device.mobileS} {
    width: 45%;
    order: 3;
  }
  @media ${device.mobileM} {
    width: 22%;
    order: 2;
  }
  @media ${device.tablet} {
    width: 22%;
    order: 2;
  }
  @media ${device.laptop} {
    width: 22%;
    order: 2;
  } ;
`;
export const Username = styled.strong`
  @media ${device.mobileS} {
    font-size: 0.6rem;
  }
  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
  margin-right: 5px;
`;
export const ProfilePicture = styled.div`
  position: relative;
  @media ${device.mobileS} {
    width: 1.2rem;
    height: 1.2rem;
  }
  @media ${device.mobileM} {
    width: 1.4rem;
    height: 1.4rem;
  }
  @media ${device.tablet} {
    width: 1.6rem;
    height: 1.6rem;
  }
  @media ${device.laptop} {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
export const UserImage = styled(Image)`
  border-radius: 50%;
`;
export const CartIcon = styled(FontAwesomeIcon)`
  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
  color: ${colors.primaryDark};
`;
export const CartBox = styled.div`
  //flex:1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    order: 4;
    width: 15%;
  }
  @media ${device.mobileM} {
    order: 1;
    width: 11%;
  }
  @media ${device.tablet} {
    order: 1;
    width: 11%;
  }
  @media ${device.laptop} {
    order: 1;
    width: 11%;
  }
`;
export const ProductCount = styled.div`
  border-radius: 50%;
  background-color: ${colors.lightGray};
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    width: 0.5rem;
    height: 0.5rem;
    transform: translate(-0.2rem, -0.4rem);
    font-size: 0.3rem;
  }
  @media ${device.mobileM} {
    width: 0.6rem;
    height: 0.6rem;
    transform: translate(-0.3rem, -0.5rem);
    font-size: 0.4rem;
  }
  @media ${device.tablet} {
    width: 0.6rem;
    height: 0.6rem;
    transform: translate(-0.4rem, -0.6rem);
    font-size: 0.4rem;
  }
  @media ${device.laptop} {
    width: 0.7rem;
    height: 0.7rem;
    transform: translate(-0.5rem, -0.7rem);
    font-size: 0.5rem;
  }
`;
