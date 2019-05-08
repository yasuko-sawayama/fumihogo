import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Field } from "redux-form";
import InputField from "./InputField";

const InfoFields = styled.div`
  border-bottom: solid 1px;
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const InfoButton = styled.button`
  font-size: 18px !important;
  padding-bottom: 2px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.08);
  background-color: #fff;
`;

const CloseButton = styled.button`
  float: right;
  margin-top: -20px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const ProductInfo = ({ defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);
  const fields = () => (
    <div>
      <CloseButton onClick={() => setOpen(false)} className="button">
        <i className="material-icons">close</i>
      </CloseButton>
      <h4>作品情報の編集</h4>
      <Field
        name="title"
        type="text"
        component={InputField}
        label="作品のタイトル"
      />
      <Field
        name="description"
        component={InputField}
        type="textarea"
        label="作品の説明"
        row={5}
      />
    </div>
  );

  return (
    <InfoFields>
      {open ? (
        fields()
      ) : (
        <InfoButton onClick={setOpen} className="button">
          <i className="material-icons">create</i>
          作品情報
        </InfoButton>
      )}
    </InfoFields>
  );
};

ProductInfo.propTypes = {
  defaultOpen: PropTypes.bool
};

ProductInfo.defaultProps = {
  defaultOpen: false
};

export default ProductInfo;
