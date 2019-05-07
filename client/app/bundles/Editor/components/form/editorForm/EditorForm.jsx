import React from "react";
import PropTypes from "prop-types";

import { Mobile } from "~/shared/components/layouts/responsive.jsx";
import ProductInfo from "./ProductInfo";
import ContentInfo from "./ContentInfo";
import EditorField from "./editor/EditorField";
import FormHeader from "./header/FormHeader";
import ErrorHeader from "./header/ErrorHeader";

export const EditorForm = props => {
  const {
    error,
    pristine,
    submitting,
    handleSubmit,
    children,
    submitChanges,
    buttonText,
    backLink
  } = props;
  return (
    <form onSubmit={handleSubmit(submitChanges)}>
      <Mobile>
        <FormHeader title="作品の編集" />
      </Mobile>
      {error && <ErrorHeader error={error} />}
      <ProductInfo />
      {children}
      <ContentInfo />
      <EditorField autoFocus />
      <a className="button button-default" href={backLink}>
        キャンセル
      </a>
      <button
        type="submit"
        className="button button-primary pull-right"
        disabled={pristine || submitting}
      >
        {buttonText}
      </button>
    </form>
  );
};

EditorForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.shape(),
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitChanges: PropTypes.func.isRequired,
  children: PropTypes.node,
  buttonText: PropTypes.string.isRequired,
  backLink: PropTypes.string
};

EditorForm.defaultProps = {
  error: null,
  children: null,
  backLink: "/"
};

export default EditorForm;
