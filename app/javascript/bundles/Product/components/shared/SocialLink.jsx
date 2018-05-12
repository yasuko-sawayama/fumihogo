import React from "react";
import PropTypes from "prop-types";

import TwitterLink from "./TwitterLink";

const SocialLink = ({ title, pages, url }) => {
  const linkTitle = `${title}`;

  return (
    <div className="social-icons">
      <TwitterLink url={url} title={linkTitle} />
    </div>
  );
};

SocialLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired
};

export default SocialLink;
