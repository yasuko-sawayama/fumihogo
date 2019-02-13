import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BookIcon = styled.i`
  font-size: 42px;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.5em 0.6em;
`;

const CircleButton = styled(NavLink)`
  div {
    width: 100%;
    text-align: center;
    margin-top: 5px;
    font-family: "hannari";
  }
`;

const ProductButton = ({ to }) => (
  <CircleButton to={to}>
    <BookIcon className="fas fa-book" />
    <div>よむ</div>
  </CircleButton>
);

ProductButton.propTypes = {
  to: PropTypes.string
};

ProductButton.defaultProps = {
  to: ""
};

export default ProductButton;
