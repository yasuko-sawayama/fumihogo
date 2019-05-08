import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import { Field } from "redux-form";
import { connect } from "react-redux";
import InputField from "./InputField";

const ProductInfo = ({
  totalPageCount,
  pageOrder,
  impressionCount,
  createdDate,
  updatedDate
}) => (
  <InfoFields>
    <InfoList>
      <dt>ページ数</dt>
      <dd>
        {pageOrder}/{totalPageCount}ページ
      </dd>
      <dt>閲覧数</dt>
      <dd>{impressionCount} Views</dd>
      <dt>作成日</dt>
      <dd>{createdDate.format("YYYY/MM/DD hh:mm")}</dd>
      <dt>最終更新日</dt>
      <dd>{updatedDate.format("YYYY/MM/DD hh:mm")}</dd>
    </InfoList>
    <Field
      name="pageTitle"
      type="text"
      component={InputField}
      label="ページタイトル（省略可）"
    />
  </InfoFields>
);

const InfoFields = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`;

const InfoList = styled.dl`
  padding: 10px;
  padding-top: 15px;
  font-size: 80%;
  dt {
    float: left;
    clear: left;
    width: 100px;
    text-align: right;
    font-weight: bold;
  }
  dt::after {
    content: ":";
  }
  dd {
    margin: 0 0 0 110px;
    padding: 0 0 5px 0;
  }
`;

ProductInfo.propTypes = {
  totalPageCount: PropTypes.number.isRequired,
  pageOrder: PropTypes.number.isRequired,
  impressionCount: PropTypes.number.isRequired,
  createdDate: PropTypes.shape().isRequired,
  updatedDate: PropTypes.shape().isRequired
};

const mapStateToProps = state => ({
  totalPageCount: state.productData.currentProduct.info.page_count,
  pageOrder: state.productData.currentPage.id,
  impressionCount: state.productData.currentPage.info.impressionCount,
  previousPage: state.productData.currentPage.previousPage,
  nextPage: state.productData.currentPage.nextPage,
  auth: state.productData.currentPage.auth.update,
  createdDate: moment(state.productData.currentPage.info.createdDate),
  updatedDate: moment(state.productData.currentPage.info.updatedDate)
});

export default connect(mapStateToProps)(ProductInfo);
