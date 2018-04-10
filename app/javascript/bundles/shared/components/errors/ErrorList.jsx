import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrList = styled.ul`
margin-top: 10px;
font-weight: bold;
`;

const ErrorList = ({ errors, }) => (
  <ErrList>
    { errors.map((error, index) => <li key={index}>{error}</li>) }
  </ErrList>
);

ErrorList.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ErrorList;


