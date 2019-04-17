import React from "react";
import PropTypes from "prop-types";

const FormHeader = ({ title, description }) => (
  <div className="page-header form">
    <div className="page-header-inner">
      <div className="page-header-content">
        {title}
        {description && (
          <div className="page-header-info">
            {" "}
            <span>{description}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

FormHeader.defaultProps = { description: null };

export default FormHeader;
