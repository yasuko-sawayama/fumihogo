import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingStyled = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99999999;

  div {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(40% - 50px);
    display: inline-block;
  }
`;

const Loading = () => (
  <LoadingStyled>
    <ReactLoading
      type="spinningBubbles"
      color="#fff"
      width="100px"
      height="100px"
      delay={200}
    />
  </LoadingStyled>
);

export default Loading;
