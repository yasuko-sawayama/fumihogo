import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { join } from '../../../shared/utils/join';

const PageLink = ({ id, api, order, title, url }) => (
  <li>
    <NavLink activeClassName="active" to={join(url, `/pages/${id}`)}>{title}</NavLink>
  </li>
);

PageLink.propTypes = {
  id: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageLink;
