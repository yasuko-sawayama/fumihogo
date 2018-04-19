import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TwitterShareButton, TwitterIcon } from 'react-share';

const url = location.href;

const Desc = styled.p`
white-space: pre-line;
`;

// TODO: 画像
const Description = ({
  id,
  title,
  description='',
  about: {
    created_at,
    character_count,
    privacyLevel,
    pageCount,
  },
  author: {
    nickname,
    avator
  },
}) => (
  <div className="row">
    <div className="col-xs-12">
      <h3>Description</h3>
    </div>
    <div className="col-sm-12">
      <Desc className="description">
        {description}
      </Desc>
      <div className="dl-horizontal" id="about">
        <dl>
          <dt>作者:</dt>
          <dd>
            <a href={`/users/${nickname}`}>
              {nickname}
            </a>
          </dd>
          <dt>公開日:</dt>
          <dd>{created_at}</dd>
          <dt>文字数:</dt>
          <dd>{character_count}</dd>
          <dt>ページ数:</dt>
          <dd>{pageCount}</dd>
          <dt>公開範囲:</dt>
          <dd>{privacyLevel}</dd>
        </dl>
      </div>
      <div className="pull-right">
        <TwitterShareButton url={url} title={`${title} を共有する`} >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  </div>
);

Description.propTypes = {
  description: PropTypes.string,
  about: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    character_count: PropTypes.number.isRequired,
    privacyLevel: PropTypes.string.isRequired,
    pageCount: PropTypes.number.isRequired,
  }).isRequired,
  author: PropTypes.shape({
    nickname: PropTypes.string,
    avator: PropTypes.string,
  }),
};

export default Description;
