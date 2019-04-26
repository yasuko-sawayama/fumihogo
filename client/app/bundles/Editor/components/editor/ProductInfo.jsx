import React from "react";
import styled from "styled-components";
import { Field } from "redux-form";
import InputField from "./InputField";

const InfoFields = styled.div`
  border-bottom: solid 1px;
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const ProductInfo = () => {
  return (
    <InfoFields>
      <Field name="title" type="text" component={InputField} label="タイトル" />
      <Field
        name="description"
        component={InputField}
        type="textarea"
        label="作品の説明"
      />
    </InfoFields>
  );
};

export default ProductInfo;
