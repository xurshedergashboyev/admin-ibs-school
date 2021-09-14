import styled from "styled-components"

export const Form = styled.form`
  width: 500px;
  border-radius: 30px;
  box-shadow: 0 0 5px darkgrey;
  margin: auto;
  padding: 20px;
  background-color: white;
  position: relative;
  overflow: hidden;
`;

export const Title=styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const Input=styled.input`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 0 5px grey;
  padding: 10px 20px;
  font-size: 25px;
  margin-bottom: 20px;
  &:focus{
    outline: 0;
  }
`;

export const Textarea=styled.textarea`
  width: 100%;
  border-radius: 20px;
  font-size: 25px;
  box-shadow: 0 0 5px grey;
  padding: 10px 20px;
  margin-bottom: 20px;
  
  &:focus{
    outline: 0;
  }
`;
