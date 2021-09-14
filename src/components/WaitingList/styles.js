import styled from "styled-components"


export const TableWrapper = styled.div`
  width: 900px;
  margin: 20px auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 15px darkgrey;
  @media only screen and (max-width: 1050px) {
    width: 700px;
  }
  @media only screen and (max-width: 800px) {
    width: 500px;
  }

  @media only screen and (max-width: 600px) {
    width: 95%;
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
  margin: auto;
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


  @media only screen and (max-width: 800px) {
    padding: 5px 10px;
  }
`;

export const TableData = styled.div`
  width: fit-content;
`;

export const FullNameBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    width: 35%;
  }
`;

export const FullName = styled.div`
  font-size: 18px;
  font-weight: bold;
  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Course = styled.div`
  font-size: 14px;
  color: darkgrey;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const ContactBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 600px){
    width: 40%;
  }
`;

export const PhoneNumber = styled.div`
  //width: 25%;
  display: flex;
  align-items: center;
  //padding: 0 10px;
  font-weight: 600;
  @media only screen and (max-width: 800px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }
`;


export const Telegram = styled.div`
  //width: 35%;
  display: flex;
  align-items: center;
  color: darkgrey;
  font-size: 14px;
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

export const Date = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 16px;

  p {
    width: 100%;
    text-align: right;
  }

  @media only screen and (max-width: 800px) {
    //width: 10%;
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    //width: 10%;
    font-size: 10px;
  }
`;