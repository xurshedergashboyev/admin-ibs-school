import styled from "styled-components"

export const ButtonAdd = styled.div`
  width: ${({width}) => width ? width : "100%"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffbf2b;
  font-size: 18px;
  border-radius: 20px;
`;

export const Clean = styled.div`
  width: fit-content;
  padding: 5px 20px;
  margin-top: 10px;
  border: 1px solid #ffbf2b;
  border-radius: 20px;
`;

export const MonthBox = styled.div`
  display: flex;
`;

export const Number = styled.p`
  width: 30px;
  font-size: 20px;
  font-weight: bold;
  //margin-right: 10px;
`;

export const Month = styled.p`
  font-size: 20px;
`;