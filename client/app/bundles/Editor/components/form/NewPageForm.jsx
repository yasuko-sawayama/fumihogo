import React from "react";
import ProductInfo from "./editorForm/ProductInfo";
import { reduxForm, Field } from "redux-form";
import InputField from "./editorForm/InputField";
import { Mobile } from "~/shared/components/layouts/responsive.jsx";
import FormHeader from "./editorForm/header/FormHeader";
import ContentInfo from "./editorForm/ContentInfo";
import ErrorHeader from "./editorForm/header/ErrorHeader";
import EditorField from "./editorForm/editor/EditorField";

const NewPageForm = ({ error }) => {
  return (
    <form>
      <Mobile>
        <FormHeader title="新しいページ" />
      </Mobile>
      {error && <ErrorHeader error={error} />}
      <ProductInfo />
      <Field
        name="pageTitle"
        type="text"
        component={InputField}
        label="新規ページタイトル（省略可）"
      />
      <ContentInfo />
      <EditorField autoFocus />
    </form>
  );
};

export default reduxForm({ form: "newPage" })(NewPageForm);
