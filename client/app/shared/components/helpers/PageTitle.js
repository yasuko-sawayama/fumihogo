import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// import Breadcrumbs from "../helpers/Breadcrumbs";
import Shortcuts from "../ui/Shortcut";

const PageTitle = ({ info }) => {
  const title =
    info.listType === "author" ? `${info.author.name}の作品一覧` : "検索";

  return (
    <div className="page-title">
      <h1>{title}</h1>
      <Shortcuts />
    </div>
  );
};

PageTitle.propTypes = {
  info: PropTypes.shape().isRequired
};

const mapStateToProps = state => ({
  info: state.productData.info
});

export default connect(mapStateToProps)(PageTitle);
