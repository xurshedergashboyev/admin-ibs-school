import styled from "styled-components"

export const ErrorWrapper=styled.div`
  width: 400px;
  height: calc(100vh - 200px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width:600px){
    width: 250px;
  } 
`;

export const ErrorImg=styled.div`
  width: 100%;
  margin: auto;
  img{
    width: 100%;
  }
`;