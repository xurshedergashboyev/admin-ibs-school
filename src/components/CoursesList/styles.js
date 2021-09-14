import styled from "styled-components"

export const WrapperCoursesList = styled.div`
  width: 100%;
  //display: flex;
  //flex-wrap: wrap;
  //justify-content: space-evenly;
`;


export const TableWrapper = styled.div`
  width: 900px;
  margin: 20px auto;
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
    width: 95%;
  }
`;

export const TableRow = styled.div`
  width: 100%;
  //background: white;
  display: flex;
  border-radius: 10px;
  padding: 10px 20px;
  border-bottom: 1px solid black;
  align-items: center;
  transition-duration: .5s;
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255, 255, 255, 1) 50%);

  &:hover {
    background: linear-gradient(0deg, rgba(191, 191, 191, 1) 0%, rgba(255, 255, 255, 1) 50%);
    box-shadow: 0 0 5px grey;
    transform: scale(1.01);
  }
  
  @media only screen and (max-width: 1050px){
    padding: 5px 10px;
  }
 
`;

export const CardBox = styled.div`
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  width: 30%;
  border: 1px dashed #ffbf2b;
  border-radius: 20px;
  padding: 10px;
  background-color: white;
  margin-bottom: 15px;
`;

export const TableImg = styled.div`
  width: 5%;
  //height: 100px;
  //border: 1px dashed #ffbf2b;
  //margin: auto;
  display: flex;

  img {
    width: 100%;
    height: auto;
  }
  
  @media only screen and (max-width: 1050px){
    width: 7%;
  }
  @media only screen and (max-width: 800px){
    width: 10%;
  }
`;

export const CourseName = styled.p`
  width: fit-content;
  text-align: center;
  //margin: 10px auto;
  display: block;
  font-weight: bold;
  font-size: 16px;

  span {
    //width: 20px;
    //height: 20px;
    font-size: 10px;
    margin-right: 5px;
    display: inline-flex;
    border-radius: 50%;
    //align-items: center;
    justify-content: center;
    //border: 1px solid yellow;
  }
  @media only screen and (max-width: 600px){
    font-size: 14px;
  }
`;

export const LangIn = styled.span`
  //width: 20px;
  //height: 20px;
  font-size: 12px;
  margin-right: 5px;
  display: inline-flex;
  border-radius: 50%;
  //align-items: center;
  justify-content: center;
  //border: 1px solid yellow;
`

export const CategoryCourseName = styled.div`
  width: 25%;
  padding-left: 10px;
  @media only screen and (max-width: 1050px) {
    width: 28%;
  }
  @media only screen and (max-width: 800px) {
    width: 35%;
  }
  @media only screen and (max-width: 600px) {
    width: 70%;
  }
`;

export const Category = styled.p`
  width: fit-content;
  text-align: center;
  //padding: 5px 20px;
  //border: 1px solid #ffbf2b;
  border-radius: 30px;
  //margin: auto;
  //font-weight: bold;
  font-size: 12px;
  color: darkgrey;
  
  @media only screen and (max-width: 1050px){
    font-size: 11px;
  }
  @media only screen and (max-width: 800px){
    font-size: 10px;
  }
`;

export const HashTags = styled.p`
  width: fit-content;
  text-align: center;
  padding: 5px 20px;
  border: 1px solid #ffbf2b;
  border-radius: 30px;
  margin: auto;
  font-size: 14px;
  color: darkgrey;
`;

export const DescriptionBox = styled.div`
  width: 50%;
  @media only screen and (max-width: 1050px){
    width: 42%;
  }
  @media only screen and (max-width: 800px){
    width: 45%;
  }
  @media only screen and (max-width: 600px){
    display: none;
  }
`;

export const Description = styled.p`
  //text-align: center;
  //margin: 10px 0;
  font-size: 13px;
  
  @media only screen and (max-width: 1050px){
    font-size: 12px;
  }
  @media only screen and (max-width: 800px){
    font-size: 11px;
  }
`;

export const DisplayFlex = styled.div`
  display: flex;
`;

export const Numbers = styled.div`
  width: 13%;
  
  @media only screen and (max-width: 1050px){
    display: none;
  }
`;

export const Number = styled.p`
  width: fit-content;
  //text-align: center;
  //margin: 10px auto;
  border-radius: 20px;
  //padding: 5px 15px;
  //border: 1px dashed #ffbf2b;
  font-size: 14px;
  
  @media only screen and (max-width: 1050px){
    font-size: 12px;
  }
`;

export const ButtonsBox = styled.div`
  width: 10%;
  border-radius: 20px;
  overflow: hidden;
  //margin: auto;
`;

export const Button = styled.button`
  color: white;
  background-color: ${props => props.bgColor};
  padding: 10px 20px;
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
  
  @media only screen and (max-width: 1050px){
    width: 13%;
  }
  
  @media only screen and (max-width: 1050px){
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
  
  @media only screen and (max-width: 1050px){
    width: 30px;
    height: 30px;
    padding: 7.5px;
  }
  
  @media only screen and (max-width: 1050px){
    width: 26px;
    height: 26px;
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
    small{
      color: darkgrey;
    }
`;

export const DeletionImg = styled.div`
  width: 150px;
  height: auto;
  img{
    width: 100%;
    border-radius: 10px;
  }
`;

export const ActionsBox=styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-top: 10px;
`;