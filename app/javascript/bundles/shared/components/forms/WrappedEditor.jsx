import React from 'react';

import ControlledEditor from './ControlledEditor';

const WrapperEditor = (props) => {
  const {
    placeholder,
    input: { onChange, value },
    disabled,
    id,
    productId,
    pageId,
    meta: {
      touched,
      error,
      warning,
    },
  } = props;

  return (
    <div>
      <ControlledEditor
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        productId={productId}
        pageId={pageId}
      />
      {touched && (error || warning) && <span className="text-danger">{ error || warning }</span>}
    </div>
  );
};

export default WrapperEditor;
