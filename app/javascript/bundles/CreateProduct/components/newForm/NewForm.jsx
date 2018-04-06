import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';

import BootstrapField from './BootstrapField';
import EditorField from '../../../shared/components/forms/EditorField';

import validate from './validate';

let NewForm = ({
  pristine,
  reset,
  submitting,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} >
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

      <hr />
              
      <h4>本文：1ページ</h4>
      <div className="description">
        2ページ目以降は小説投稿後に追加できます
      </div>


      <Field name="pageTitle"
             component={ BootstrapField }
             type="text"
             help="ページごとのタイトルは省略できます。"
             label="タイトル" />

      <EditorField
        key="field"
        name="editorText"
        id="inputEditorText"
        disabled={false}
        placeholder="Type here"
        label="本文"
        />

      <div className="buttonArea">
        <button className="btn btn-primary"
                type="submit"
                disabled={submitting} >
          新しい小説を作成する
        </button>
        
        {'　'}
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">
          入力をクリア
        </button>
      </div>
    </form>
  );
}

export default NewForm = reduxForm({
  form: 'new_form',
  validate,
})(NewForm);
