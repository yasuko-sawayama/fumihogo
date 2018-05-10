import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { join } from '../../shared/utils/join';
import styled from 'styled-components';

const StyledLink = styled.li`
  .active {
    color: #fff;
    background-color: #eb6864;
  }
`;

const PageLink = ({ id, title, url, }) => (
  <StyledLink>
    <NavLink activeClassName="active" to={join(url, `/pages/${id}`)}>
      {id}. {title}
    </NavLink>
  </StyledLink>
);

PageLink.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default PageLink;
