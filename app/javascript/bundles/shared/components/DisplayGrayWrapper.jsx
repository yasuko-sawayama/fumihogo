import React from 'react';
import styled from 'styled-components';

const GrayContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(45,45,45, 0.6);
    z-index: 99999;

#loader {
    left: 50%;
    top: 50%;
    position: fixed;
    width: 180px;
    height: 180px;
    margin: -90px 0 0 -90px;
}
`;

export default ({ children }) => (
  <GrayContainer>
    {children}
  </GrayContainer>
);
