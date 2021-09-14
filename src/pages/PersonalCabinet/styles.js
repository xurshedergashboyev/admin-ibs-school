import styled from "styled-components"

export const PersonalCabinetWrapper = styled.div`
  width: 900px;
  //height: 100%;
  display: flex;
  margin: auto;

  @media only screen and (max-width: 1000px) {
    width: fit-content;
    flex-direction: column-reverse;
  }
`;

export const InformationBox = styled.div`
  width: 650px;
  height: 100%;
  //margin-bottom: 20px;
  //background-color: #4bb543;
  @media only screen and (max-width: 750px) {
    width: 500px;
  }
  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const Information = styled.div`
  width: 95%;
  //height: 100%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 5px darkgrey;
  margin: 0 auto 20px;
  padding: 10px;
`;

export const InformationTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;


export const PaymentTableBox = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 5px darkgrey;
`;

export const TableRow = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;
  border-bottom: 1px solid black;
  padding: 10px 20px;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding: 5px 10px;
    p {
      font-size: 12px;
    }
  }
`;

export const Amount = styled.p`
  width: 30%;

  @media only screen and (max-width: 600px) {
    width: 45%;
  }
`;

export const PaidFor = styled.p`
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 25%;
  }
`;

export const PaymentDate = styled.p`
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 20%;
  }
`;

export const Type = styled.div`
  width: 10%;
  height: 30px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const MainDataBox = styled.div`
  width: 250px;
  height: fit-content;
  margin-bottom: 20px;
  //background-color: grey;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  @media only screen and (max-width: 750px) {
    width: 500px;
  }
  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const MainData = styled.div`
  width: 90%;
  height: fit-content;
  padding: 10px;
  border-radius: 20px;
  background-color: white;
  margin: 0 auto 15px;
  box-shadow: 0 0 5px darkgrey;
  @media only screen and (max-width: 1000px) {
    width: 95%;
  }
`;

export const Avatar = styled.div`
  width: 165px;
  height: 165px;
  //padding: 10px;
  border-radius: 100px;
  background-color: rgba(255, 191, 43, 0.1);
  margin: auto;
  position: relative;
  //overflow: hidden;
  border-bottom: 1px solid #ffbf2b;
  border-right: 1px solid #ffbf2b;

  img {
    width: 100%;
    height: auto;
    border-radius: 0 0 100px 100px;
    //border-radius: 100px;
    //border-bottom: 1px solid #ffbf2b;
    //background-color: darkgrey;
  }
`;

export const Status = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: ${({active}) => active ? "#4bb543" : "transparent"};
  border: 5px solid white;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const FullName = styled.p`
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

export const Age = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
`;

export const Country = styled.p`
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: darkgrey;
`;

export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-family: Oswald,serif;
  &:last-child{
    margin-bottom: 0;
  }
  img{
    width: 17px;
    height: 17px;
    margin-right: 5px;
  }
  font-size: 12px;
  font-weight: bold;
`;

export const PaymentForm = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999999999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClosePopUp = styled.div`
  width: 60px;
  height: 60px;
  color: var(--red);
  border-radius: 50%;
  box-shadow: 0 0 5px var(--red);
  background-color: white;
  position: absolute;
  top: -20px;
  right: -20px;
  
  &:hover {
    color: white;
    background-color: var(--red);
  }

  svg {
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
`;