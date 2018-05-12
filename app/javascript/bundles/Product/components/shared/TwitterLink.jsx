import React from "react";
import PropTypes from "prop-types";
import { TwitterShareButton, TwitterIcon } from "react-share";

const TwitterLink = ({ url, title }) => (
  <div className="pull-right">
    <TwitterShareButton url={url} title={`${title}`} >
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  </div>
);

TwitterLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TwitterLink;
