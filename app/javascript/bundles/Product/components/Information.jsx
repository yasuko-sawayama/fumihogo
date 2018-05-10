import PropTypes from 'prop-types';
import React from 'react';

const Information = ({ id }) => (
  <h1>詳細情報:{id} </h1>
);

Information.propTypes = {
  id: PropTypes.number.isRequired
};

export default Information;

