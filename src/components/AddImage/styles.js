import styled from "styled-components"

export const Form = styled.form`
  width: 500px;
  border-radius: 30px;
  box-shadow: 0 0 5px #ffbf2b;
  margin: auto;
  padding: 20px;
  background-color: white;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 600px){
    max-width: 300px;
    padding: 15px;
  }
`;

export const Label=styled.label`
  width: 60%;
  height: fit-content;
  //height: 150px;
  display: block;
  margin: auto;
  color: #ffbf2b;
  svg{
    display: block;
    height: 300px;
    width: 100%;
  }
  @media only screen and (max-width: 600px){
    svg{
      height: 200px;
    }
  }
`;

export const FileName=styled.p`
  padding: 10px 40px;
  background-color: #ffbf2b;
  border-radius: 0 50px 50px 0;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

// export const Button=styled.button`
//   display: block;
//   margin: 30px auto 0;
//   padding: 10px 50px;
//   border-radius: 50px;
//   border: 1px solid #ffbf2b;
//   color:${({loading,error,success})=>loading||error||success?"white":"#ffbf2b"};
//   font-weight: bold;
//   font-size: 20px;
//   background-color: ${({loading, error, success})=>loading?"var(--grey)":error?"var(--red)":success?"var(--green)":"white"};
//   transition-duration: .5s;
//   box-shadow: 0 0 5px ${({loading, error, success})=>loading?"var(--grey)":error?"var(--red)":success?"var(--green)":"#ffbf2b"};
//
//   &:hover{
//     border-color: ${({loading, error, success})=>loading?"var(--grey)":error?"var(--red)":success?"var(--green)":"white"};
//     background-color: ${({loading, error, success})=>loading?"var(--grey)":error?"var(--red)":success?"var(--green)":"#ffbf2b"};
//     //background-color: #ffbf2b;
//     color: white;
//     box-shadow: 0 0 5px ${({loading, error, success})=>loading?"var(--grey)":error?"var(--red)":success?"var(--green)":"#ffbf2b"};
//   }
//
//   &:focus{
//     outline: 0;
//   }
// `;