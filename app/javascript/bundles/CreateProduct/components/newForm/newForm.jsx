import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import BootstrapField from '../../../shared/components/forms/BootstrapField';

import PageForm from '../../../shared/components/forms/PageForm';

const newForm = ({
  pristine,
  reset,
  submitting,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} >
      <div id="productInfo">
        <Field name="title"
               component={ BootstrapField }
               type="text"
               help="小説タイトルは必須です。"
               label="タイトル" />

        <Field name="description"
               component={ BootstrapField }
               type="text"
               componentClass="textarea"
               label="概要（200文字以内）" />
        
        <Field name="privacy_level"
               component={BootstrapField}
               type="select"
               componentClass="select"
               label="公開範囲"
               >
          <option value="public_open">公開</option>
          <option value="login">ログイン限定公開</option>
          <option value="closed">非公開</option>
        </Field>
      </div>

      <hr />

      <PageForm />

      <div className="buttonArea">
        <button className="btn btn-primary"
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

export default newForm;
