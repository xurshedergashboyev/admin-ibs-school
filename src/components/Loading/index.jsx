import React from 'react';
import {BoxLoading} from 'react-loadingg'
import {LoadingWrapper} from "./styles";

const Loading = () => {
    return (
        <LoadingWrapper>
            <BoxLoading color={"#ffbf2b"} size={"large"} speed={.5} style={{position:"relative",margin:"auto"}}/>
        </LoadingWrapper>
    );
}

export default Loading;