import React from "react";
import PropTypes from "prop-types";

const FormHeader = ({ error }) => (
  <div className="page-header error">
    <div className="page-header-inner">
      <div className="page-header-content">
        {error && <h1 className="text-error">作品を保存できませんでした。</h1>}
        {error && <p>{error}</p>}

        <div className="page-header-info">
          <span>
            エラーを <br />
            確認してください。
          </span>
        </div>
      </div>
    </div>
  </div>
);

FormHeader.propTypes = {
  error: PropTypes.arrayOf(PropTypes.string)
};

FormHeader.defaultProps = {
  error: null
};

export default FormHeader;
