import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";

const InfoArea = styled.div`
  text-align: right;
  font-size: 14px;
  margin-bottom: 5px;
`;

const ContentInfo = ({ formContentLength, totalCharacterCount }) => (
  <InfoArea>
    <div>
      <b>このページ：</b>
      {formContentLength}字 / <b>作品全体：</b>
      {totalCharacterCount}字
    </div>
  </InfoArea>
);

ContentInfo.propTypes = {
  totalCharacterCount: PropTypes.number,
  formContentLength: PropTypes.number
};

ContentInfo.defaultProps = {
  totalCharacterCount: 0,
  formContentLength: 0
};

const selector = formValueSelector("edit");

const mapStateToProps = state => ({
  totalCharacterCount: state.productData.currentProduct.info.character_count,
  formContentLength: selector(state, "content")
    ? selector(state, "content").getPlainText('').length
    : 0
});

export default connect(mapStateToProps)(ContentInfo);
