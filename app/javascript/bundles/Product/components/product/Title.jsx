import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div className="page-header">
    <h1 className="title">{title}</h1>
  </div>
);

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
