import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import RIEKTextarea from './riek/RIEKTextarea';

const Desc = styled.div`
white-space: pre-line;
margin-bottom: 15px;
`;

const Description = ({
  description='',
  about: {
    created_at,
    character_count,
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
      <Desc>
        <Field
          name="description"
          component={RIEKTextarea}
          className="description"
          rows={5}
          />
      </Desc>
      <div className="dl-horizontal" id="about">
        <dl>
          <dt>作者:</dt>
          <dd>{nickname}</dd>
          <dt>公開日:</dt>
          <dd>{created_at}</dd>
          <dt>文字数:</dt>
          <dd>{character_count}</dd>
          <dt>ページ数:</dt>
          <dd>{pageCount}</dd>
          <dt>公開範囲:</dt>
          <dd>
            <Field name="privacy_level"
                   component="select"
                   type="select"
                   className="form-control input-sm"
                   label={null}
                   help="非公開の作品は自分だけが見ることができます。"
                   >
              <option value="public_open">公開</option>
              <option value="login">ログイン限定公開</option>
              <option value="closed">非公開</option>
            </Field>
          </dd>
        </dl>
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
