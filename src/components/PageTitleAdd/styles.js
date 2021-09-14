import styled from "styled-components"
import {Link} from "react-router-dom";

export const NavbarBox = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 20px;
  @media only screen and (max-width: 1050px){
    width: 700px;
  }
  @media only screen and (max-width: 800px){
    width: 500px;
  }
  @media only screen and (max-width: 600px){
    width: 300px;
  }
`;

export const PageTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  
  @media only screen and (max-width: 800px){
    font-size: 25px;
  }
  
  @media only screen and (max-width: 600px){
    font-size: 20px;
  }
`;

export const Add = styled(Link)`
  width: 100px;
  //height: 50px;
  background-color: white;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffbf2b;
  border-radius: 10px;
  border: 1px solid #ffbf2b;
  box-shadow: 0 0 5px #ffbf2b;

  svg {
    width: 20px;
    height: 20px;
  }
  
  @media only screen and (max-width: 800px){
    width: 80px;
    
    svg{
      width: 17px;
      height: 17px;
    }
  }
  @media only screen and (max-width: 600px){
    width: 60px;
    
    svg{
      width: 15px;
      height: 15px;
    }
  }
`;

