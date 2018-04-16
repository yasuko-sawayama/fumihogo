import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Desc = styled.p`
white-space: pre-line;
`;

const Description = ({
  description,
  about: {
    created_at,
    charactor_count,
    privacyLevel,
    pageCount,
  },
  author: {
    id,
    nickname,
    avator
  },
}) => (
  <div className="row">
    <div className="col-xs-12">
      <h3>Description</h3>
    </div>
    <div className="col-sm-4">
      <img src="http://dummyimage.com/600x400/000/fff" className="img-responsive" alt="カバー"/>
    </div>
    <div className="col-sm-8">
      <Desc className="description">
        {description}
      </Desc>
      <div className="dl-horizontal" id="about">
        <dl>
          <dt>作者:</dt>
          <dd>{nickname}</dd>
          <dt>公開日:</dt>
          <dd>{created_at}</dd>
          <dt>文字数:</dt>
          <dd>{charactor_count}</dd>
          <dt>ページ数:</dt>
          <dd>{pageCount}</dd>
          <dt>公開範囲:</dt>
          <dd>{privacyLevel}</dd>
        </dl>
      </div>
    </div>
  </div>
);

Description.propTypes = {
  description: PropTypes.string,
  about: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    charactor_count: PropTypes.number.isRequired,
    privacyLevel: PropTypes.string.isRequired,
    pageCount: PropTypes.number.isRequired,
  }).isRequired,
  author: PropTypes.shape({
    nickname: PropTypes.string,
    avator: PropTypes.string,
  }),
};

export default Description;
