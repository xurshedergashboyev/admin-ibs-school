import styled from "styled-components";

export const StopOrGraduate = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);

  p {
    font-size: 60px;
    font-weight: bold;
    color: ${({process}) => process === "graduated" ? "var(--green)" : process === "stopped" ? "var(--red)" : null};
  }
  
  @media only screen and (max-width: 600px){
    p{
      font-size: 40px;
    }
  }
`;

export const CourseMonthBox = styled.div`
  margin-bottom: 10px;
  box-shadow: 0 0 5px darkgrey;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  &:last-child{
    margin-bottom: 0;
  }
`;

export const CourseName = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  @media only screen and (max-width: 600px){
    span {
      font-size: 14px;
    }
    small {
      font-size: 14px !important;
    }
  }

  span {
    cursor: pointer;
    position: relative;
  }

  small {
    font-size: 16px;
    color: grey;
  }
`;

export const StopFinishBox = styled.div`
  //width: 100px;
  height: 60px;
  background-color: white;
  position: absolute;
  top: 35px;
  left: 0;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 5px darkgrey;
  overflow: hidden;
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  padding: 10px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CourseDurationBox = styled.div`
  width: 100%;
  //border-top: 2px solid #ffbf2b;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  overflow: auto;
`;

export const PaymentDay = styled.div`
  width: ${({width}) => width}%;
  min-width: 65px;
  border-top: 3px solid ${({active}) => active ? "#ffbf2b" : "darkgrey"};
  cursor: pointer;
`;

export const Circle = styled.div`
  width: 20px;
  height: 40px;
  //border-radius: 50px;
  //background-color: darkgrey;
  color: ${({active}) => active ? "#ffbf2b" : "darkgrey"};
  margin: auto;

  svg {
    border: 0;
    width: 20px;
    height: 40px;
  }
`;

export const Date = styled.p`
  width: 100%;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;