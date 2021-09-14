import styled from "styled-components"

export const Title=styled.p`
  font-size: 30px;
  text-align: left;
  font-weight: bold;
  @media only screen and (max-width:1050px){
    font-size: 25px;
  }
  
  @media only screen and (max-width:800px){
    font-size: 20px;
  }
  
  @media only screen and (max-width:600px){
    font-size: 15px;
  }
`;

export const Table=styled.table`
  border-left: 1px solid #ffbf2b;
  border-right: 1px solid #ffbf2b;
  border-spacing: 0;

`;

export const TableRow=styled.tr`
  background-color: yellow;
  border: 1px solid black;
  &:hover{
    background-color: rgba(255,255,0,0.8);
  }
`;

export const TableHead=styled.thead`
  background-color: #ffbf2b;
  text-align: left;
  padding: 5px;
  border-top: 1px solid #ffbf2b;
  border-bottom: 1px solid #ffbf2b;
`;

export const TableBody=styled.tbody`
  background-color: yellow;
  border: 1px solid black;
  &:hover{
    background-color: rgba(255,255,0,0.8);
  }
`;

export const TableData=styled.td`
  cursor: pointer;
  padding: 5px;
  //border-top: 1px solid #ffbf2b;
  border-bottom: 1px solid #ffbf2b;
`;

export const DeleteBox=styled.div`
  width:60px;
  height:60px;
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
  svg{
    width: 100%;
    height: 100%;
  }
  
  &:hover{
    background-color: var(--red);
    color: white;
  }
  
  @media only screen and (max-width: 600px){
    left: 0;
  }
`;