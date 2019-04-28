import React, { useState } from "react";
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
border-bottom: solid 1px  rgba(0, 0, 0, 0.08);
`;

const CloseButton = styled.button`
float: right;
margin-top: -20px;
margin-bottom: 20px;
`;

const ProductInfo = () => {
  const [open, setOpen] = useState(false);
  const fields = () => (
    <div>
      <CloseButton onClick={() => setOpen(false)} className="button">
        <i class="material-icons">
          close
        </i>
      </CloseButton>
      <h4>作品情報の編集</h4>
      <Field name="title" type="text" component={InputField} label="タイトル" />
      <Field
        name="description"
        component={InputField}
        type="textarea"
        label="作品の説明"
      />
    </div>
  );

  return (
    <InfoFields>
      {open ? fields() : (<InfoButton onClick={setOpen} className="button">
        <i class="material-icons">
          create
        </i>
        作品の情報　
      </InfoButton>)}
    </InfoFields>
  );
};

export default ProductInfo;
