import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Content = styled.div`
  margin: 5px 0;
  padding: 4px;
  line-height: 1.8;
  color: #111;
  letter-spacing: 1px;
  font-size: 16px;
`;

const ContentReading = ({ content }) => (
  <Content dangerouslySetInnerHTML={{ __html: content }}/>
);

ContentReading.propTypes = {
  content: PropTypes.string.isRequired
};

export default ContentReading;
