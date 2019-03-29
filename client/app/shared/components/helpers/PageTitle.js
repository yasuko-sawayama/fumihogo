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
    case "create":
      return title;

    default:
      return "一覧";
  }
};

const PageTitle = ({ info, currentUser }) => (
  <div className="page-title">
    <h1>{titleName(info)}</h1>
    {currentUser && <Shortcuts />}
  </div>
);

PageTitle.propTypes = {
  info: PropTypes.shape().isRequired,
  currentUser: PropTypes.shape()
};

PageTitle.defaultProps = {
  currentUser: null
};

const mapStateToProps = state => ({
  info: state.pageInfo,
  currentUser: state.currentUserData
});

export default connect(mapStateToProps)(PageTitle);
