import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class FormField extends React.Component {
  render() {
    // input と meta は redux-form が渡してくる props。
    // type や label は Field に渡した props がそのまま渡ってくる。
    // select や textarea に対応するために componentClass を受け取る。
    // select の option に対応するために children も受け取る。
    const {
      input,
      label,
      type,
      componentClass,
      children,
      placeholder,
      meta: {
        touched,
        error,
        warning,
      },
    } = this.props;

    const validationState = touched && ( error && "error" ) || ( warning && "warning" ) || null;

    return (
      <FormGroup>
        <ControlLabel>
          {label}
        </ControlLabel>

        <FormControl
          {...input}
          type = {type || "text"}
          componentClass = {componentClass || "input"}
          placeholder={placeholder} >
          {children}
        </FormControl>

        {touched && ( error || warning ) && <span className="text-danger">{ error || warning }</span>}
      </FormGroup>
    );
  }
}


let NewForm = ({
  pristine,
  reset,
  submitting,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} >
      <Field name="title"
             component={ FormField }
             type="text"
             label="タイトル" />
      <Field name="description"
             component={ FormField }
             type="text"
             componentClass="textarea"
             label="概要（200文字以内）" />
 
      <Field name="privacy_level"
             component={FormField}
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
        2ページ目以降は小説投稿後に追加できます。 <br />
        章タイトルはなくても作成できます。
      </div>
      <hr />
      <Field name="pageTitle"
             component={ FormField }
             type="text"
             label="タイトル" />
      <Field name="content"
             component={ FormField }
             type="text"
             componentClass="textarea"
             label="本文" />
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
  if (!values.content) {
    errors.description = "本文を入力して下さい。"
  }

  return errors;
};

export default NewForm = reduxForm({
  form: 'new_form',
  validate,
})(NewForm);
