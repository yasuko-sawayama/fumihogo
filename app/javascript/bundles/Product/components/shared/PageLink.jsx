import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { pageUrl } from "../../libs/utils";

const StyledLink = styled(NavLink).attrs("active")`
  &.active {
    color: #fff;
    background-color: #eb6864;
  }
`;

const PageLink = ({ productId, position, title }) => (
  <li>
    <StyledLink activeClassName="active" to={pageUrl(position, productId)}>
      {position}. {title}
    </StyledLink>
  </li>
);

PageLink.propTypes = {
  productId: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default PageLink;
