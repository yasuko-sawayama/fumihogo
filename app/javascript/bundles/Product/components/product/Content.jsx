import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.article`
line-height: 1.8;
font-size: 16px;
letter-spacing: 1px;
`;

const Content = ({ content }) => (
  <div className="row">
    <div className="col-xs-12">
      <Article id="content" dangerouslySetInnerHTML={{__html: content}} />
    </div>
  </div>
  );

Content.propTypes = {
  content: PropTypes.string,
};

export default Content;
