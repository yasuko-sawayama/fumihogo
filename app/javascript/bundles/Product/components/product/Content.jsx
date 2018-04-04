import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.article`
line-height: 1.8;
font-size: 16px;
letter-spacing: 1px;
`;

const Content = ({ pageTitle, content, pageId, totalPage }) => (
  <div className="row">
    <div className="col-xs-12">
      { pageTitle && <h3>{pageTitle}</h3> }
      <p className="pull-right text-muted">{pageId}/{totalPage}ページ</p>
    </div>

    <Article id="content" className="col-xs-12"
             dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

Content.propTypes = ({
  pageTitle: PropTypes.string.isRequired,
  pageId: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
});

export default Content;
