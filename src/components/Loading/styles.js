import styled from "styled-components"

export const LoadingWrapper=styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 1050px){
    height: valc(100vh - 170px);
  }
`;

export const ErrorImg=styled.div`
  width: 100%;
  //margin: auto;
  img{
    width: 100%;
  }
`;