import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Field } from "redux-form";

import EditPageForm from "../../../shared/components/forms/EditPageForm";
// import validate from './validate';

const PageEditForm = (props) => {
  const {
    pristine,
    reset,
    submitting,
    handleSubmit,
    actions,
    product: {
      id,
      currentPage,
      about: {
        impressionCount
      }
    }
  } = props;
  return (
    <div className="row">
      <form onSubmit={handleSubmit(values => actions.updatePage(values, id, currentPage))}>
        <p className="pull-right">閲覧数: {impressionCount}</p>
        <EditPageForm id={id} pageId={currentPage} />
        <div className="buttonArea col-sm-5">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting}
          >
            更新する
          </button>

          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
            className="btn btn-default"
          >
            キャンセル
          </button>
        </div>
        <div className="col-sm-7">
          <div className="description text-right">
            ダブルクリックで本文を編集できます。
          </div>
        </div>
      </form>
    </div>
  );
};

export default PageEditForm;
