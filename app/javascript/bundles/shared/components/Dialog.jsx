import React from "react";
import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";

const Dialog = styled(Jumbotron)`
    background: #fff;
    top: 100px;
    left: 50%;
    top: 50%;
    position: fixed;
    width: 80%;
    height: 300px;
    margin: -150px 0 0 -40%;
p {
font-size: 14px;
}
`;

export default ({ children }) => (
  <Dialog>
    {children}
  </Dialog>
);
