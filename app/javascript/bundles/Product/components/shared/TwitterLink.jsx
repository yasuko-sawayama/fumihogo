import React from "react";
import PropTypes from "prop-types";
import { TwitterShareButton, TwitterIcon } from "react-share";

const TwitterLink = ({ title }) => (
  <div className="pull-right">
    <TwitterShareButton url={window.location.href} title={`${title}`}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  </div>
);

TwitterLink.propTypes = {
  title: PropTypes.string.isRequired
};

export default TwitterLink;
