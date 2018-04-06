import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';

import BootstrapField from './BootstrapField';
import EditorField from '../../../shared/components/forms/EditorField';

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
      <div className="descripotion">
        2ページ目以降は小説投稿後に追加できます
      </div>

      <hr />

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

      <hr />

      <div>
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

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "タイトルを入力してください。";
  }
  if (!values.description) {
    errors.description = "概要を入力して下さい。"
  }
  if (values.description && values.description.length > 200) {
    errors.description = "概要は200文字以内で入力して下さい。"
  }
  if (values.editorText && !values.editorText.blocks[0].text) {
    errors.editorText = "本文を入力して下さい。"
  }

  return errors;
};

export default NewForm = reduxForm({
  form: 'new_form',
  validate,
})(NewForm);
