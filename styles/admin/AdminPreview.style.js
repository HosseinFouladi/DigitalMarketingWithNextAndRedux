import styled from "styled-components";
import { device } from "../../utilities/GlobalVariablesStyles";
export const AdminView = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: scroll;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media ${device.mobileM} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media ${device.tablet} {
    padding-top: 3em;
    padding-bottom: 3rem;
  }
  @media ${device.laptop} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;
