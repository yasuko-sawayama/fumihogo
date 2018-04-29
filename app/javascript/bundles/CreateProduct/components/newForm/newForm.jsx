import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Field } from 'redux-form';

import BootstrapField from '../../../shared/components/forms/BootstrapField';
import PermissionsListSelector from './PermissionsListSelector';
import PrivacyLevelSelector from './PrivacyLevelSelector';
import PageForm from '../../../shared/components/forms/PageForm';

class newForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps) {
    const { dispatch, change,
            currentUser: { permissions_lists, }, } = this.props;
    const { productAttributes: { product: { privacy_level, permissions_list_id } }} = nextProps;

    if (privacy_level === 'list' && !permissions_list_id) {
      dispatch(change('permissions_list', permissions_lists[0].id));
    }
  }

  render() {
    const {
      pristine,
      reset,
      submitting,
      handleSubmit,
      currentUser,
      productAttributes,
    } = this.props;
    
    return (
      <form onSubmit={handleSubmit} >
        <div id="productInfo">
          <Field
             name="title"
             component={ BootstrapField }
             type="text"
             help="小説タイトルは必須です。"
             label="タイトル" />

          <Field
             name="description"
             component={ BootstrapField }
             type="text"
             componentClass="textarea"
             label="概要（200文字以内）" />
          
          <Field
             name="privacy_level"
             component={PrivacyLevelSelector}
             type="select"
             componentClass="select"
            label="公開範囲"
            currentUser={currentUser}
            />

          <Field
             name="permissions_list"
             component={PermissionsListSelector}
             label="閲覧を許可するリスト"
             privacyLevel={productAttributes.product.privacy_level}
             currentUser={currentUser}
             />
        </div>

        <hr />

        <PageForm />

        <div className="buttonArea">
          <button
             className="btn btn-primary"
             type="submit"
             disabled={submitting} >
            新しい小説を作成する
          </button>

          <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">
            入力をクリア
          </button>
        </div>
      </form>
    );
  }
}

export default newForm;
