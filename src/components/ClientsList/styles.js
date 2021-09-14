import styled from "styled-components"
import {Link} from "react-router-dom";

export const WrapperTeachersList = styled.div`
  width: 100%;
  //display: flex;
  //flex-wrap: wrap;
  //justify-content: space-evenly;
`;

export const CardBox = styled.div`
  width: 30%;
  border: 1px dashed #ffbf2b;
  border-radius: 20px;
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
`;

export const TableImg = styled.p`
  width: fit-content;
  height: fit-content;
  font-weight: bold;
  //border: 1px dashed #ffbf2b;
  border-radius: 50px;
  margin: auto;
  overflow: hidden;
`;

export const FullNames = styled.p`
  text-align: center;
  margin: 10px 0;
`;

export const Position = styled.p`
  width: fit-content;
  text-align: center;
  padding: 5px 20px;
  border: 1px solid #ffbf2b;
  border-radius: 30px;
  margin: auto;
  font-weight: bold;
`;

export const LangIn = styled.span`
  width: 20px;
  height: 20px;
  font-size: 12px;
  margin-right: 10px;
  display: inline-flex;
  border-radius: 50%;
  //align-items: center;
  justify-content: center;
  border: 1px solid yellow;
`

export const Description = styled.p`
  text-align: center;
  margin: 10px 0;
`;

export const BirthDate = styled.p`
  width: fit-content;
  text-align: center;
  margin: 10px auto;
  border-radius: 20px;
  padding: 5px 20px;
  border: 1px dashed #ffbf2b;
`;

export const ButtonsBox = styled.div`
  width: fit-content;
  border-radius: 20px;
  overflow: hidden;
  margin: auto;
`;

export const Button = styled.button`
  color: white;
  background-color: ${props => props.bgColor};
  padding: 10px 20px;

`;

export const TableWrapper = styled.div`
  width: 900px;
  //margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  //border: 1px solid grey;
  box-shadow: 0 0 15px darkgrey;
  margin: auto;

  @media only screen and (max-width: 1050px) {
    width: 700px;
  }

  @media only screen and (max-width: 800px) {
    width: 500px;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
  }

`;

export const TableRowWrapper=styled.div`
  position: relative;
  &:hover{
    .bin{
      display: flex;
    }
  }
`;

export const TableRow = styled(Link)`
  width: 100%;
  //background-color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  border-bottom: 1px solid black;
  transition-duration: .5s;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%);

  &:hover {
    background: linear-gradient(0deg, rgba(191, 191, 191, 1) 0%, rgba(255, 255, 255, 1) 50%);
    box-shadow: 0 0 5px grey;
    transform: scale(1.01);
  }


  @media only screen and (max-width: 800px) {
    padding: 5px 10px;
  }
`;

export const ClientId = styled.p`
  width: 5%;
  //height: 60px;
  overflow: hidden;
  //margin-right: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;

  @media only screen and (max-width: 800px) {
    //width: 7%;
    font-size: 14px;
  }

  @media only screen and (max-width: 600px) {
    width: 10%;
    font-size: 12px;
  }
`;

export const FullNameBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  @media only screen and (max-width: 1050px) {
    width: 69%;
    padding-left: 10px;
  }
  @media only screen and (max-width: 800px) {
    width: 60%;
    padding-left: 10px;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    padding-left: 10px;
  }
`;

export const FullName = styled.div`
  font-size: 18px;
  font-weight: bold;

  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

export const Email = styled.div`
  font-size: 14px;
  color: darkgrey;
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`;


export const PhoneNumber = styled.div`
  width: 20%;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1050px) {
    width: 26%;
    //font-size: 14px;
  }
  @media only screen and (max-width: 800px) {
    width: 35%;
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const DayMonth = styled.div`
  margin-right: 10px;
`;
export const Day = styled.div`
  font-size: 15px;
  font-weight: bold;
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
`;
export const Month = styled.div`
  font-size: 10px;
  color: grey;
  text-align: center;
  //font-family: "Oswald",sans-serif;
  @media only screen and (max-width: 800px) {
    font-size: 8px;
  }
`;
export const Year = styled.div`
  font-size: 30px;
  //font-weight: bold;
  font-family: "Oswald", sans-serif;
  @media only screen and (max-width: 800px) {
    font-size: 25px;
  }
`;


export const ActionBox = styled.div`
  width: 10%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: 1px solid black;
  border-radius: 20px;
  //box-shadow: 0 0 5px grey;
  @media only screen and (max-width: 1050px) {
    width: 13%;
  }
  @media only screen and (max-width: 800px) {
    width: 15%;
  }
  @media only screen and (max-width: 600px) {
    width: 20%;
  }
`;

const Icon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  padding: 10px;
  background-color: white;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 800px) {
    width: 35px;
    height: 35px;
  }
  @media only screen and (max-width: 600px) {
    width: 25px;
    height: 25px;
    padding: 5px;
  }
`;

export const Edit = styled(Icon)`
  color: var(--green);
  border: 1px solid var(--green);

  &:hover {
    background-color: var(--green);
    color: white;
  }
`;

export const Delete = styled(Icon)`
  color: var(--red);
  border: 1px solid var(--red);

  &:hover {
    background-color: var(--red);
    color: white;
  }
`;

export const ContactBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DeletionBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, .7);
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DeletionPage = styled.div`
  margin: auto;
  width: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px grey;
`;

export const DeletionText = styled.div`
  text-align: center;

  small {
    color: darkgrey;
  }
`;

export const DeletionImg = styled.div`
  width: 150px;
  height: auto;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const ActionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-top: 10px;
`;

export const DeleteBox = styled.div`
  width: 60px;
  height: 60px;
  //display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 0 5px darkgrey;
  position: absolute;
  top: 0;
  left: -60px;
  bottom: 0;
  padding: 15px;
  border-radius: 50%;
  color: var(--red);
  cursor: pointer;
  display: none;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: var(--red);
    color: white;
  }

  @media only screen and (max-width: 600px) {
    left: 0;
  }
`;