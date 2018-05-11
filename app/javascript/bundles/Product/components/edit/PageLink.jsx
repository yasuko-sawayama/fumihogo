import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { join } from '../../../shared/utils/join';
import styled from 'styled-components';

const StyledLink = styled(NavLink).attrs('active')`
&.active {
    color: #fff;
    background-color: #EB6864;
}
`;

const PageLink = ({
  id, api, position, title, url,
}) => (
  <li>
    <StyledLink activeClassName="active" to={join(url, `/pages/${id}`)}>
      {position}.{' '}
      {title}
    </StyledLink>
  </li>
);

PageLink.propTypes = {
  id: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageLink;
