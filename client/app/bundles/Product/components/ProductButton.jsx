import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Color } from "../../../shared/constants";

const BookIcon = styled.i`
  font-size: 42px;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.5em 0.6em;

  background-color: ${props =>
  props.disabled ? Color.UNREADABLE : "transparent"};
`;

const CircleButton = styled(NavLink)`
  pointer-events: ${props => (props.disabled ? "none" : "auto")};

  div {
    width: 100%;
    text-align: center;
    margin-top: 5px;
    font-family: "hannari";
  }
`;

const ProductButton = ({ to, auth: { show } }) => (
  <CircleButton to={to} disabled={!show}>
    <BookIcon className="fas fa-book" disabled={!show}/>
    {show && <div>よむ</div>}
  </CircleButton>
);

ProductButton.propTypes = {
  to: PropTypes.string,
  auth: PropTypes.shape({ show: PropTypes.bool }).isRequired
};

ProductButton.defaultProps = {
  to: "",
  auth: {
    show: false,
    update: false
  }
};

export default ProductButton;
