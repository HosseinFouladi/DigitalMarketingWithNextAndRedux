import styled, { keyframes } from "styled-components";
import { colors } from "../../utilities/GlobalVariablesStyles";
import { device } from "../../utilities/GlobalVariablesStyles";

const animate = keyframes`
  0%{
    transform:  translateY(-15rem);

  }

  50%{
      transform: translateY(5rem) ;
  }

  80%{
    transform:  translateY(-2rem); 
  }
  100% {
    transform:   translateY(0);
  }
`;

export const ImageBox = styled.section`
  animation: ${animate} 2s linear;
  @media ${device.mobileS} {
    width: 100%;
    height: 60%;
  }
  @media ${device.mobileM} {
    width: 100%;
    height: 60%;
  }
  @media ${device.tablet} {
    width: 33%;
    height: 100%;
  }
  @media ${device.laptop} {
    width: 33%;
    height: 100%;
  }
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  direction: ltr;
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 7;
  width: 100%;
`;
export const OtherImagesBox = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OtherImageContainer = styled.div`
  position: relative;
  border: 1px solid ${colors.lightGray};
  margin-right: 1rem;
  cursor: pointer;

  @media ${device.mobileS} {
    width: 3rem;
    height: 3rem;
  }
  @media ${device.mobileM} {
    width: 3rem;
    height: 3rem;
  }
  @media ${device.tablet} {
    width: 4rem;
    height: 4rem;
  }
  @media ${device.laptop} {
    width: 4.5rem;
    height: 4.5rem;
  }
`;
