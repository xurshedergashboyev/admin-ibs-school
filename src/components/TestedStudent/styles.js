import styled from "styled-components"

export const RequestedStudentWrapper = styled.div`
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
  @media only screen and (max-width: 1050px) {
    width: 700px;
  }
  @media only screen and (max-width: 800px) {
    width: 500px;
  }
  @media only screen and (max-width: 600px) {
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
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%);

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
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    width: 30%;
  }
  @media only screen and (max-width: 800px) {
    width: 27%;
  }
`;

export const FullName = styled.div`
  font-size: 18px;
  font-weight: bold;
  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }
`;

export const Course = styled.div`
  font-size: 14px;
  color: darkgrey;
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const ContactBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    width: 45%;
  }
  @media only screen and (max-width: 600px) {
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
    font-size: 9px;
  }
`;


export const Email = styled.div`
  //width: 35%;
  display: flex;
  align-items: center;
  color: darkgrey;
  font-size: 14px;
`;

export const ResultBox = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  @media only screen and (max-width: 800px) {
    width: 33%;
  }
`;

export const Level = styled.div`
  padding: 5px 10px;
  color: white;
  border-radius: 20px;
  font-weight: bold;
  background-color: ${props => props.bgColor};
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    padding: 2.5px 5px;
    margin: auto;
  }
`;

export const Tick = styled.button`
  width: 5%;
  //height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  //padding-left: 10px;
  //border: 1px solid var(--green);
  border-radius: 10px;
  //padding: 1.5px 0;
  background-color: transparent;

  &:hover {
    svg {
      color: white;
      background-color: var(--green);
      border: 2px solid var(--green);
    }
  }

  svg {
    width: 30px;
    height: 30px;
    color: var(--green);
    transition-duration: .5s;
    border-radius: 50%;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    width: 10%;
  }
`;