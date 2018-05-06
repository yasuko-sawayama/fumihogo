import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.article`
line-height: 1.8;
font-size: 16px;
letter-spacing: 1px;
`;

const Count = styled.p`
margin-right: 0.8em;
`;

const Content = ({
  pageTitle, content,
  pageId, totalPage,
  impressionCount,
}) => (
  <div className="row">
    <div className="col-xs-12">
      { pageTitle && <h3>{pageTitle}</h3> }
      <p className="pull-right text-muted">ページ：{pageId}/{totalPage}</p>
      <Count className="count pull-right text-muted">閲覧数：{impressionCount}</Count>
    </div>

    <Article
      id="content"
      className="col-xs-12"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

Content.propTypes = ({
  pageTitle: PropTypes.string.isRequired,
  pageId: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  impressionCount: PropTypes.number.isRequired,
});

export default Content;
