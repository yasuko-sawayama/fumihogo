import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';
import { TwitterShareButton, TwitterIcon } from 'react-share';

import PermissionsListSelector from '../../../shared/components/forms/PermissionsListSelector';
import PrivacyLevelSelector from '../../../shared/components/forms/PrivacyLevelSelector';
import RIEKTextarea from '../../../shared/components/forms/riek/RIEKTextarea';

const url = location.href;

const Desc = styled.div`
white-space: pre-line;
margin-bottom: 15px;
`;

const Description = ({
  currentUser,
  editAttributes: {
    updatedPrivacyLevel,
  },
  title,
  description='',
  about: {
    created_at,
    character_count,
    privacyLevel,
    pageCount,
    impressionCount,
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
    <div className="col-sm-4">
      画像アップローダ予定
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
          <dt>閲覧数:</dt>
          <dd>{impressionCount}</dd>
          <dt>公開範囲:</dt>
          <dd>
            <Field
              name="privacy_level"
              component={PrivacyLevelSelector}
              className="form-control input-sm"
              label={null}
              currentUser={currentUser}
              />
            <Field
              name="permissions_list_id"
              component={PermissionsListSelector}
              label="閲覧を許可するリスト"
              currentUser={currentUser}
              privacyLevel={updatedPrivacyLevel}
              />
          </dd>
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
  currentUser: PropTypes.any.isRequired,
  description: PropTypes.string,
  about: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    character_count: PropTypes.number.isRequired,
    privacyLevel: PropTypes.string.isRequired,
    pageCount: PropTypes.number.isRequired,
    impressionCount: PropTypes.number.isRequired,
  }).isRequired,
  author: PropTypes.shape({
    nickname: PropTypes.string,
    avator: PropTypes.string,
  }),
};

export default Description;
