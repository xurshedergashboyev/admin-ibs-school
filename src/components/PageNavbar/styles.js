import styled from "styled-components"
import { Link } from "react-router-dom";

export const WrapperPageNavbar = styled.div`
  width: 100%;
  height: 100px;
  margin: 0 0 20px;
  background-color: white;
  border-radius: 0 0 40px 0;
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 1050px){
    height: 70px;
    border-radius: 0 0 30px 0;
  }
`;

export const PageNavs = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const PageNav = styled(Link)`
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  //margin: auto;
  font-weight: bold;
  transition-duration: .3s;
  &:hover {
    background-color: #ffbf2b;
    color: white;
  }
  @media only screen and (max-width: 800px){
    font-size: 14px;
  }
  
  @media only screen and (max-width: 600px){
    font-size: 12px;
    padding: 5px 10px;
  }
`;
