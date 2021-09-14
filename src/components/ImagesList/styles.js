import styled from "styled-components"

export const ImagesBox = styled.div`
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  
  @media only screen and (max-width: 1050px){
    width: 700px;
  }
  
  @media only screen and (max-width: 800px){
    width: 500px;
  }
  
  @media only screen and (max-width: 800px){
    width: 300px;
  }
`;

export const ImageBox = styled.div`
  width: 170px;
  height: 170px;
  //display: flex;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  //margin-right: 10px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  //visibility: hidden;
  //flex-wrap: wrap;
  //justify-content: space-around;
  &:hover {
    .data {
      opacity: 1;
    }
  }
  
  @media only screen and (max-width: 1050px){
    width: 130px;
    height: 130px;
  }
  @media only screen and (max-width: 800px){
    width: 115px;
    height: 115px;
    //margin-bottom: 7px;
  }
  @media only screen and (max-width: 800px){
    width: 140px;
    height: 140px;
    margin-bottom: 20px;
  }
`;

export const CopiedMessage = styled.div`
  background-color: var(--light-blue);
  color: white;
  //font-weight: bold;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 40px;
  border-radius: 0 40px 40px 0;
  @media only screen and (max-width: 1050px){
    padding: 5px 25px;
  }
  
  @media only screen and (max-width: 800px){
    padding: 5px 10px;
    font-size: 16px;
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  //border: 1px solid black;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  //height: auto;
  display: block;
  //margin: auto;
  //border-radius: 10px;
`;

export const ImageData = styled.div`
  width: 100%;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 0;
  transition-duration: .5s;
`;

export const ImageId = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: ${({copied}) => copied ? "var(--light-blue)" : "black"};
`;

export const ActionsBox = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  
  @media only screen and (max-width: 1050px){
    width: 100px;
  }
  
  @media only screen and (max-width: 800px){
    width: 85px;
  }
`;

export const Icon = styled.button`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border: 1px solid black;
  border-radius: 50px;
  transition-duration: 0.5s;

  svg {
    width: 100%;
    height: 100%;
  }
  
  @media only screen and (max-width: 1050px){
    width: 45px;
    height: 45px;
  }
  
  @media only screen and (max-width: 800px){
    width: 40px;
    height: 40px;
  }
`;

export const Copy = styled(Icon)`
  border-color: var(--light-blue);
  color: var(--light-blue);

  &:hover {
    background-color: var(--light-blue);
    color: white;
  }
`;

export const Delete = styled(Icon)`
  border-color: var(--red);
  color: var(--red);

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

`;

export const DeletionImg = styled.div`
  width: 150px;
  height: auto;
  img{
    width: 100%;
    border-radius: 10px;
  }
`;

