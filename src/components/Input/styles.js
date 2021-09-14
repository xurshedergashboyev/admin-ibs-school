import styled from "styled-components"
import NumberFormat from "react-number-format";

export const Form = styled.form`
  width: 500px;
  border-radius: 15px;
  box-shadow: 0 0 5px #ffbf2b;
  margin: 0 auto 20px;
  padding: 20px;
  background-color: white;
  position: relative;
  //overflow: hidden;
  display: block;
  @media only screen and (max-width: 600px) {
    max-width: 300px;
    padding: 10px;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  width: ${({width}) => width ? width : "100%"};
  border-radius: 20px;
  //box-shadow: 0 0 5px #ffbf2b;
  border: 1px solid #ffbf2b;
  padding: 10px 20px;
  font-size: 25px;
  margin-bottom: 20px;
  font-family: monospace, serif;
  background-color: transparent;

  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: darkgrey;
  }

  &:focus {
    box-shadow: 0 0 5px #ffbf2b;
    outline: 0;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

`;

export const Select = styled.select`
  width: ${({width}) => width ? width : "100%"};
  border-radius: 20px;
  //box-shadow: 0 0 5px #ffbf2b;
  border: 1px solid #ffbf2b;
  padding: 10px 20px;
  font-size: 25px;
  margin-bottom: 20px;
  font-family: monospace, serif;
  background-color: transparent;
  
  &::placeholder {
    color: darkgrey;
  }

  &:focus {
    box-shadow: 0 0 5px #ffbf2b;
    outline: 0;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`;

export const Radio = styled.input`
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  //top: 4px;

  outline: 0;
  
  &:checked {
    border: 8px solid #ffbf2b;
  }
`;

export const RadioWrapper = styled.div`
  width: ${({width}) => width ? width : "50%"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const RadioBox = styled.div`
  width: ${({width}) => width ? width : "50%"};
  display: flex;
  align-items: center;
  cursor: pointer;
  //justify-content: space-between;
  //margin-bottom: 20px;
`;

export const PhoneNumberFormat = styled(NumberFormat)`
  width: 100%;
  border-radius: 20px;
  //box-shadow: 0 0 5px #ffbf2b;
  border: 1px solid #ffbf2b;
  padding: 10px 20px;
  font-size: 25px;
  margin-bottom: 20px;
  font-family: monospace, serif;

  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: darkgrey;
  }

  &:focus {
    box-shadow: 0 0 5px #ffbf2b;
    outline: 0;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

`;

export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 20px;
  font-size: 25px;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 1px solid #ffbf2b;

  &::placeholder {
    color: darkgrey;
  }

  &:focus {
    box-shadow: 0 0 5px #ffbf2b;
    outline: 0;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`;


// export const Form = styled.form`
//   width: fit-content;
//   margin: 0 auto 20px;
//   border: 1px solid blue;
//   padding: 50px;
// `;

export const Label = styled.label`
  font-size: 20px;
  display: block;
  cursor: pointer;

  div {
    width: 80px;
    height: 30px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

// export const Input = styled.input`
//   width: 400px;
//   padding: 10px 20px;
//   font-size: 20px;
//   display: block;
// `;

// export const Textarea = styled.textarea`
//   width: 400px;
//   padding: 10px 20px;
//   font-size: 20px;
//   display: block;
// `;

export const ImgBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Img = styled.img`
  width: 150px;
  height: auto;
  display: block;
`;

export const Button = styled.button`
  width: ${({width}) => width ? width : "fit-content"};
  display: block;
  margin: 30px auto 0;
  padding: 10px 50px;
  border-radius: 50px;
  border: 1px solid #ffbf2b;
  color: ${({loading, error, success}) => loading || error || success ? "white" : "#ffbf2b"};
  font-weight: bold;
  font-size: 20px;
  background-color: ${({
                         loading,
                         error,
                         success
                       }) => loading ? "var(--grey)" : error ? "var(--red)" : success ? "var(--green)" : "white"};
  transition-duration: .5s;
  box-shadow: 0 0 5px ${({
                           loading,
                           error,
                           success
                         }) => loading ? "var(--grey)" : error ? "var(--red)" : success ? "var(--green)" : "#ffbf2b"};
  cursor: pointer;

  &:hover {
    border-color: ${({
                       loading,
                       error,
                       success
                     }) => loading ? "var(--grey)" : error ? "var(--red)" : success ? "var(--green)" : "white"};
    background-color: ${({
                           loading,
                           error,
                           success
                         }) => loading ? "var(--grey)" : error ? "var(--red)" : success ? "var(--green)" : "#ffbf2b"};
    //background-color: #ffbf2b;
    color: white;
    box-shadow: 0 0 5px ${({
                             loading,
                             error,
                             success
                           }) => loading ? "var(--grey)" : error ? "var(--red)" : success ? "var(--green)" : "#ffbf2b"};
  }

  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 5px 30px;
    margin-top: 10px;
  }
`;

// export const Button=styled.button`
//   padding: 10px 20px;
//   font-size: 20px;
//   color: black;
//   background-color: greenyellow;
//   border: 0;
//   width: 100%;
// `;

export const Checkbox = styled.input`
  margin: auto;
  display: block;
`;