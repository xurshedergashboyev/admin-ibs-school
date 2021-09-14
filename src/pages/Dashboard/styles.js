import styled from "styled-components"

export const DashboardPageWrapper = styled.div`
  width: 1000px;
  margin: 20px auto;
  //overflow: hidden;
  @media only screen and (max-width: 1150px){
    width: 800px;
  } 
  
  @media only screen and (max-width: 900px){
    width: 600px;
  } 

  @media only screen and (max-width: 700px){
    width: 500px;
  } 
  
  @media only screen and (max-width: 600px){
    width: 95%;
  } 

`;

export const TopCardsWrapper = styled.div`
  width: 100%;
  //display: flex;
  //justify-content: space-between;
  //min-width: 1000px;
  overflow: scroll;
  //@media only screen and (max-width: 1150px){
  //  width: 1000px;
  //  overflow-x: auto;
  //}
`;


export const TopCardsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;

  //min-width: 1000px;
  //overflow: scroll;
  @media only screen and (max-width: 1150px){
    width: 1000px;
    overflow-x: auto;
  }
`;

export const CardBox = styled.div`
  width: 24%;
  box-shadow: 0 0 5px darkgrey;
  padding: 0 15px 10px;
  background-color: white;
  border-radius: 10px;
  //display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  color: ${({color}) => color ? "var(--green)" : "var(--red)"};
  transform: translateY(5px) rotate(${({color}) => color ? 180 : 0}deg);

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Data = styled.div`
  width: 100%;
  //padding-left: 10px;
  display: flex;
  align-items: center;
`;

export const Numbers = styled.div`
  //width: calc(100% - 30px);
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const Main = styled.div`
  //width: calc(100% - 30px);
  font-weight: bold;
  font-family: Oswald, serif;
  font-size: 50px;
`;

export const Secondary = styled.div`
  //width: calc(100% - 30px);
  font-size: 20px;
  font-family: monospace;
  font-weight: bolder;
  padding-left: 5px;
  //color: var(--red);
  transform: translateY(13px);
  color: ${({color}) => color ? "var(--green)" : "var(--red)"};
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: darkgrey;
`;

export const CardStudentNumber = styled(CardBox)`
  display: block;
  height: fit-content;
  cursor: pointer;
`;

export const Category = styled.p`
  //display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  small {
    color: var(--grey);
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 10px;
  //background-color: #4bb543;
  display: flex;
  transition-duration: .2s;
  margin-bottom: 10px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    //transform: scaleX(1.0) scaleY(1.5);
    //height: 15px;
  }
`;

export const InsideLine = styled.div`
  width: ${({width}) => width};
  height: 10px;
  position: relative;
  background-color: ${({color}) => color};
  transition-duration: .2s;

  .course {
    display: none;
  }

  &:hover {
    height: 15px;

    .course {
      display: flex;
    }

    //transform: scaleX(1.0) scaleY(1.5);
    p {
      //transform: scaleX(unset);
    }
  }
`;

export const CourseNumber = styled.p`
  width: fit-content;
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  //display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(unset);
  font-size: 14px;
  font-weight: bold;
  padding: 10px 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 5px grey;

  p:nth-child(1) {
    padding-right: 10px;
  }

  p:nth-child(2) {
    padding-left: 10px;
  }
`;

export const ChartBox = styled.div`
  width: ${({width}) => width ? width : "74.5%"};
  border-radius: 10px;
  box-shadow: 0 0 5px grey;
  //display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 0;
  background-color: white;
  margin-bottom: 20px;
  
  @media only screen and (max-width: 1150px){
    width: 100%;
  }
  
  //div.recharts-wrapper{
  //  margin: auto;
  //}
`;

export const ChartTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 10px;
  @media only screen and (max-width: 700px){
    font-size: 20px;
  }
`;

export const ChartNavbarBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
export const ChartNavs = styled.div`
  width: fit-content;
  display: flex;
  margin: auto;
`;
export const ChartNav = styled.p`
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${({clicked})=>clicked?"#ffbf2b":"transparent"};
  color: ${({clicked})=>clicked?"#fff":"black"};
  transition-duration: .5s;
  font-weight: bold;
  
  @media only screen and (max-width: 700px){
    padding: 5px 15px;
    font-size: 14px;
  }
  
  @media only screen and (max-width: 700px){
    padding: 5px 10px;
    font-size: 12px;
  }
`;

export const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;