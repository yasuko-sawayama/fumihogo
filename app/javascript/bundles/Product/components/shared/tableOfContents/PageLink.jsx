import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { pageUrl } from "../../../libs/utils";

const StyledLink = styled(NavLink).attrs("active")`
  &.active {
    color: #fff;
    background-color: #eb6864;
  }
`;

const PageLink = ({ api, position, title, productId }) => (
  <li>
    <StyledLink activeClassName="active" to={pageUrl(position, productId)}>
      {position}. {title}
    </StyledLink>
  </li>
);

PageLink.propTypes = {
  position: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PageLink;
