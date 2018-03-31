import React from 'react';
import styled from 'styled-components';

const Desc = styled.p`
white-space: pre-line;
`;

const Description = ({
  description,
  about: {
    created_at,
    charactor_count,
    privacy_level,
    page_count,
  },
  author: { nickname, avator }
}) => (
  <div className="row">
    <div className="col-xs-12">
      <h3>Description</h3>
    </div>
    <div className="col-sm-4">
      <img src="http://dummyimage.com/600x400/000/fff" className="img-responsive"/>
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
          <dd>{page_count}</dd>
          <dt>公開範囲:</dt>
          <dd>{privacy_level}</dd>
        </dl>
      </div>
    </div>
  </div>
);

export default Description;
