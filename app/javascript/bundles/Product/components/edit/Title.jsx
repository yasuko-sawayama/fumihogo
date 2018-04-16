import React from "react";
import { Field } from 'redux-form';

import RIEKInput from './riek/RIEKInput';

const Title = () => (
  <div className="page-header">
    <h1 className="title">
      <Field
        name="title"
        component={RIEKInput}
        type="text"
        size={40}
        className="ProductTitle"
        />
    </h1>
  </div>
);

export default Title;
