import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import PageForm from '../../../../shared/components/forms/PageForm';
import validate from './validate';

const NewPageForm = (props) => {
  const {
    pristine,
    reset,
    submitting,
    handleSubmit,
    id,
    currentPage,
    about: { pageCount },
    submitPage,
  } = props;
  return (
    <form onSubmit={handleSubmit(values => submitPage(values, { id }))} >
      <PageForm id={id} pageCount={pageCount} />
      <div className="buttonArea">
        <button
          className="btn btn-primary"
          type="submit"
          disabled={submitting}
        >
          ページを追加する
        </button>

        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">
          入力をクリア
        </button>
      </div>
    </form>
  );
};

NewPageForm.propTypes = ({
  id: PropTypes.number.isRequired,
  pageCount: PropTypes.number,
});

export default reduxForm({
  form: 'new_page_form',
  validate,
})(NewPageForm);
