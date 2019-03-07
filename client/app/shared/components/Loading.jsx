import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingStyled = styled(ReactLoading)`
  &:before {
    content: "";
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 9999;
  }
  svg {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(40% - 50px);
    display: inline-block;
    width: 100px;
    height: 100px;
    fill: #ffffff;
    z-index: 99999999;
  }
`;

const Loading = () => (
  <LoadingStyled type="spinningBubbles" delay={400} color="#ffffff"/>
);

export default Loading;
