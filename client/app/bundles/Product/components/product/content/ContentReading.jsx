import React from "react";
import PropTypes from "prop-types";

const ContentReading = content => <div>{content}</div>;

ContentReading.propTypes = {
  content: PropTypes.string.isRequired
};

export default ContentReading;
