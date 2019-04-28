import React from "react";
import PropTypes from "prop-types";
import { Types } from "~/shared/constants";

const MessageIcon = ({ type }) => {
  switch (type) {
    case Types.SUCCESS:
      return <i className="material-icons">done_outline</i>;
    case Types.ERROR:
      return <i className="material-icons">report_problem</i>;
    default:
      return null;
  }
};

MessageIcon.propTypes = {
  type: PropTypes.string.isRequired
};

export default MessageIcon;
