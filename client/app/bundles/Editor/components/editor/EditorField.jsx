import React from "react";
import { Field } from "redux-form";
import { Default, Mobile } from "~/shared/components/layouts/responsive";
import WrappedEditor from "./WrappedEditor";

const EditorField = () => (
  <div className="form-group">
    <Mobile>
      <Field type="text" component={WrappedEditor} mobile={true} />
    </Mobile>
    <Default>
      <Field type="text" component={WrappedEditor} default={true} />
    </Default>
  </div>
);

export default EditorField;
