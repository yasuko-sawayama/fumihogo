import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import PageForm from '../../../../shared/components/forms/PageForm';
import validate from './validate';

const NewPageForm = ({
  pristine,
  reset,
  submitting,
  handleSubmit,
  id,
  currentPage,
  about: { pageCount }
}) => (
  <div>
    <form onSubmit={handleSubmit} >
      <PageForm id={id} pageCount={pageCount} />
    </form>

    <div className="buttonArea">
        <button className="btn btn-primary"
                type="submit"
                disabled={submitting} >
          ページを追加する
        </button>
        
        {'　'}
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">
          入力をクリア
        </button>
      </div>
  </div>
);

NewPageForm.propTypes = ({
  id: PropTypes.number.isRequired,
  pageCount: PropTypes.number,
})

export default reduxForm({
  form: 'new_page_form',
  validate,
})(NewPageForm);
