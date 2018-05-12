import React from "react";
import PropTypes from "prop-types";

import { pageTitle } from "../../libs/utils";

import TwitterLink from "./TwitterLink";

const SocialLink = ({ id, title, currentPage, pages }) => {
  const linkTitle = `${title}：${pageTitle(pages, currentPage)}`;

  return (
    <div className="social-icons">
      <TwitterLink title={linkTitle} />
    </div>
  );
};

SocialLink.propTypes = {
  id: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf.isRequired
};

export default SocialLink;
