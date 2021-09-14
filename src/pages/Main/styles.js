import styled from "styled-components"

export const WrapperMain=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #f5f5f5;
`;

export const NavbarContainer=styled.div`
  width: ${({hide})=>hide?"100px":"350px"};
  height: 100%;
  background-color: #ffbf2b;
  border-radius: 0 0 40px 0;
  overflow: hidden;
  transition-duration: .5s;
  z-index: 99999999;
  @media only screen and (max-width: 1300px){
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
  @media only screen and (max-width: 1050px){
    width: ${({hide})=>hide?"70px":"300px"};
    border-radius: 0 0 30px 0;
  }
  
  @media only screen and (max-width: 400px){
    width: ${({hide})=>hide?"0":"100%"};
    border-radius: 0 0 30px 0;
  }
`;

export const PageContainer=styled.div`
  width: calc(100% - ${({hide})=>hide?"100px":"350px"});
  height: 100%;
  //background-color: aqua;
  overflow: auto;
  transition-duration: .5s;
  //border-radius: 40px 0 0 0 ;
  //border: 1px solid black;
  overflow-x: hidden;
  @media only screen and (max-width: 1300px){
    width: calc(100% - 100px);
    margin-left: 100px;
  }
  @media only screen and (max-width: 1050px){
    width: calc(100% - 70px);
    margin-left: 70px;
  }
  @media only screen and (max-width: 400px){
    width: 100%;
    margin-left: 0;
  }
`;