import React from "react";
import PropTypes from "prop-types";
import Info from "./Info";

const InfoBoxContent = ({ info, description }) => {
  return (
    <div className="infobox-content">
      <Info info={info} />
      <p>{description}</p>
    </div>
  );
};

InfoBoxContent.propTypes = {
  info: PropTypes.shape().isRequired,
  description: PropTypes.string
};

InfoBoxContent.defaultProps = {
  description: ""
};

export default InfoBoxContent;
