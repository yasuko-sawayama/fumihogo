import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

import EditPageForm from '../../../shared/components/forms/EditPageForm';
// import validate from './validate';

const PageEditForm = props => {
  const {
    pristine,
    reset,
    submitting,
    handleSubmit,
    actions,
    product: {
      id,
      currentPage,
    },
  } = props;
  return (
    <form onSubmit={handleSubmit(values =>actions.updatePage(values))}>
      <EditPageForm id={id} pageId={currentPage} />
      <div className="buttonArea">
        <button className="btn btn-primary"
                type="submit"
                disabled={submitting} >
          更新する
        </button>

        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">
          キャンセル
        </button>
      </div>
    </form>
  );
}

export default PageEditForm;
