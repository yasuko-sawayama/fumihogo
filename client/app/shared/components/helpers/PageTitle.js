import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

// import Breadcrumbs from "../helpers/Breadcrumbs";
import Shortcuts from "../ui/Shortcut";

const titleName = ({ listType, author, title }) => {
  switch (listType) {
    case "author":
      return `${author.name}の作品一覧`;
    case "content":
    case "favorite":
      return title;
    default:
      return "一覧";
  }
};

const PageTitle = ({ info }) => (
  <div className="page-title">
    <h1>{titleName(info)}</h1>
    <Shortcuts />
  </div>
);

PageTitle.propTypes = {
  info: PropTypes.shape().isRequired
};

const mapStateToProps = state => ({
  info: state.pageInfo
});

export default connect(mapStateToProps)(PageTitle);
