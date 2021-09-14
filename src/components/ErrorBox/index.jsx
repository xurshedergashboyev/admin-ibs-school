import React from 'react';
import {ErrorImg, ErrorWrapper} from "./styles";
import errorImage from "../../assets/images/error.png"
const ErrorBox = () => {
    return (
        <ErrorWrapper>
            <ErrorImg>
                <img src={errorImage} alt=""/>
            </ErrorImg>
        </ErrorWrapper>
    );
}

export default ErrorBox;