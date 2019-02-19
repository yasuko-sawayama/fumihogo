import React from "react";
import PropTypes from "prop-types";

import ProfilePanel from "../helpers/ProfilePanel";
import Footer from "../helpers/Footer";
import PageTitle from "../helpers/PageTitle";
import Sidebar from "../frontend/Sidebar";
import Toolbar from "../frontend/Toolbar";

const Frontend = ({ children }) => (
  <div className="page-inner">
    <Toolbar />
    <Sidebar />

    <div className="main">
      <PageTitle />
      <div className="content">{children}</div>

      <Footer />
    </div>

    <div className="content-side-wrapper">
      <div className="content-side-overlay" />

      <div className="content-side">
        <ProfilePanel />
      </div>
    </div>
  </div>
);

Frontend.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Frontend;
