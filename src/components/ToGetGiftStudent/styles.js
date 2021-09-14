import styled from "styled-components"

export const ToGetGiftStudentWrapper=styled.div`
  width: fit-content;
  margin: 20px auto;

  @media only screen and (max-width: 600px){
    width: 95%;
  }
`;

export const TableWrapper = styled.div`
  width: 900px;
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  //border: 1px solid grey;
  box-shadow: 0 0 15px darkgrey;
  @media only screen and (max-width: 1050px){
    width: 700px;
  }
  @media only screen and (max-width: 800px){
    width: 500px;
  }
  @media only screen and (max-width: 600px){
    width: 100%;
  }
`;

export const TableRow = styled.div`
  width: 100%;
  height: 60px;
  //background-color: white;
  display: flex;
  border-radius: 10px;
  padding: 10px 20px;
  border-bottom: 1px solid black;
  transition-duration: .5s;
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255, 255, 255, 1) 50%);

  &:hover {
    background: linear-gradient(0deg, rgba(191, 191, 191, 1) 0%, rgba(255, 255, 255, 1) 50%);
    box-shadow: 0 0 5px grey;
    transform: scale(1.01);
    .bin{
      display: flex;
    }
  }
  @media only screen and (max-width: 800px){
    padding: 5px 10px;
  }
`;

export const TableData = styled.div`
  width: fit-content;
`;

export const Email = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  justify-content: space-between;
  @media only screen and (max-width: 600px){
    width: 90%;
    font-size: 14px;
  }
`;

export const Tick=styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  @media only screen and (max-width:600px){
    width: 10%;
  } 
`;