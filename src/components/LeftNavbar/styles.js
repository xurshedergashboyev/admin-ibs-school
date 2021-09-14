import styled from "styled-components"
import {Link} from "react-router-dom";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const NavbarLogoBox = styled(Link)`
  width: 100%;
  height: 100px;
  background-color: white;
  padding-left: ${({hide}) => hide ? "20px" : "20px"};
  display: flex;
  align-items: center;
  transition-duration: .5s;
  cursor: pointer;
  @media only screen and (max-width: 1050px) {
    height: 70px;
    padding-left: 17.5px;
  }
`;

export const NavbarLogo = styled.div`
  width: ${({hide}) => hide ? "60px" : "100%"};
  height: ${({hide}) => hide ? "60px" : "50px"};
  display: flex;
  align-items: center;
  //background-color: white;
  overflow: hidden;
  transition-duration: .5s;

  img {
    height: 100%;
  }

  @media only screen and (max-width: 1050px) {
    width: ${({hide}) => hide ? "40px" : "100%"};
    height: ${({hide}) => hide ? "40px" : "40px"};
  }

`;

export const Navs = styled.div`
  width: 100%;
  height: calc(100% - 180px);
  padding: 10px 0;
  overflow: auto;
  //display: flex;
  transition-duration: .5s;
  @media only screen and (max-width: 1050px) {
    height: calc(100% - 130px)
  }
  @media only screen and (max-width: 400px) {
    height: calc(100% - 70px)
  }
`;

export const Nav = styled(Link)`
  width: 100%;
  height: ${({hide}) => !hide ? "50px" : "70px"};
  padding: 10px 30px;
  //display: block;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition-duration: .5s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    ${({hide}) => !hide &&
            `.innerNavs {width: 100%;}
            .nav {width: 0;}`
    }
  }

  @media only screen and (max-width: 1050px) {
    height: ${({hide}) => !hide ? "50px" : "40px"};
  }
`;

export const NavName = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  transition-duration: .5s;
  display: flex;
  align-items: center;
  //overflow: hidden;

    // ${({hide}) => hide && "justify-content: center"};
  // transition-delay: .5s;

  img {
    width: ${({hide}) => !hide ? "25px" : "40px"};
    margin-left: ${({hide}) => hide ? "30px" : "20px"};
    transition-duration: .5s;
    //transition-delay: .5s;
  }

  p {
    width: ${({hide}) => !hide ? "calc(100% - 25px)" : 0};
    height: fit-content;
    font-size: 20px;
    //font-weight: bold;
    padding-left: 10px;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition-duration: .5s;
  }

  @media only screen and (max-width: 1050px) {
    img {
      width: ${({hide}) => !hide ? "25px" : "25px"};
      margin-left: ${({hide}) => hide ? "22.5px" : "20px"};
    }

    p {

    }
  }
`;

export const InnerNavs = styled.div`
  width: 0;
  height: 100%;
  //padding: 20px 0;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  transition-duration: .5s;
`;

export const InnerNav = styled(Link)`
  width: ${props => props.width}%;
  padding: 0 5px;
  //font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 20px;
    //margin-left: 20px;
  }

  p {
    padding-left: 5px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const HideToggleBox = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px 40px 40px 0;
  transition-duration: .5s;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media only screen and (max-width: 1050px) {
    height: 60px;
  }
  //@media only screen and (max-width: 400px){
  //   height: 0;
  // }
`;

export const HideToggleText = styled.div`
  ${({hide}) => !hide && "padding-left: 30px"};
  font-size: 20px;
  display: ${({hide}) => !hide ? "unset" : "none"};
  //transition-duration: .5s;
  overflow: hidden;


`;

export const HideToggleIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 50px;
  transform: rotate(${({hide}) => !hide ? "0deg" : "180deg"});
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  svg {
    width: 20px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  transition-duration: .5s;

  @media only screen and (max-width: 1050px) {
    width: 60px;
    height: 60px;
    padding: 0 12.5px;
    svg {
      width: 15px;
    }
  }

  @media only screen and (max-width: 400px) {
    width: 40px;
    height: 40px;
    padding: 0 10px;
    position: fixed;
    top: 15px;
    left: ${({hide}) => hide ? 0 : "calc(100vw - 40px)"};
      // right: ${({hide}) => hide ? "auto" : 0};
    z-index: 9999999999;
  }
`;
