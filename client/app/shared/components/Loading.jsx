import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingStyled = styled(ReactLoading)`
  svg {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(40% - 50px);
    display: inline-block;
    width: 100px;
    height: 100px;
    fill: #e6e6e6;
    z-index: 99999999;
  }
`;

const Loading = () => <LoadingStyled type="spinningBubbles" delay={800}/>;

export default Loading;
