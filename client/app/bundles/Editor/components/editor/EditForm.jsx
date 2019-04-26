import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { reduxForm, propTypes, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import { fetchProductPageRequest, updateProductPageRequest } from "~/actions";

import { Mobile } from "~/shared/components/layouts/responsive.jsx";
import ProductInfo from "./ProductInfo";
import PageInfo from "./PageInfo";
import EditorField from "./EditorField";
import FormHeader from "./FormHeader";
import ErrorHeader from "./ErrorHeader";
import validate from "./validate";

const ContentInfo = styled.div`
  text-align: right;
  font-size: 14px;
  margin-bottom: 5px;
`;

const EditForm = props => {
  const {
    error,
    pristine,
    submitting,
    handleSubmit,
    change,
    fetchPageContent,
    submitChanges,
    match: {
      params: { productId, pageOrder }
    },
    totalCharacterCount,
    formContentLength
  } = props;

  const setInitialValues = (productId, pageOrder) => {
    fetchPageContent(productId, pageOrder);
    // IDとページ番号はサーバー応答を待たない（変更するかも？
    change("productId", productId);
    change("pageOrder", pageOrder);
  };

  useEffect(() => {
    setInitialValues(productId, pageOrder);
  }, [productId, pageOrder]);

  return (
    <form onSubmit={handleSubmit(submitChanges)}>
      <Mobile>
        <FormHeader title="作品の編集" />
      </Mobile>
      {error && <ErrorHeader error={error} />}
      <ProductInfo />
      <PageInfo />
      <ContentInfo>
        <div>
          <b>このページ：</b>
          {formContentLength}字 / <b>作品全体：</b>
          {totalCharacterCount}字
        </div>
      </ContentInfo>
      <EditorField autoFocus />
      <button
        type="submit"
        className="button button-primary pull-right"
        disabled={pristine || submitting}
      >
        修正を反映
      </button>
    </form>
  );
};

EditForm.propTypes = {
  ...propTypes
};

const selector = formValueSelector("edit");

const mapStateToProps = state => ({
  totalCharacterCount: state.productData.currentProduct.info.character_count,
  formContentLength: selector(state, "content")
    ? selector(state, "content").length
    : 0
});

const mapDispatchToProps = dispatch => ({
  fetchPageContent: (productId, pageOrder) =>
    dispatch(fetchProductPageRequest(productId, pageOrder)),
  submitChanges: values => dispatch(updateProductPageRequest(values))
});

export default compose(
  reduxForm({
    form: "edit",
    validate,
    initialValues: {
      productId: null,
      pageOrder: 1
    }
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditForm);
