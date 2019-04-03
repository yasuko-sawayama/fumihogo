import React from "react";
import PropTypes from "prop-types";

import ProfilePanel from "../helpers/ProfilePanel";
import Footer from "../frontend/Footer";
import PageTitle from "../helpers/PageTitle";
import Sidebar from "../frontend/Sidebar";
import Toolbar from "../frontend/Toolbar";
import ErrorBoundary from "./ErrorBoundary";

const Frontend = ({ children }) => (
  <div className="page-inner">
    <Toolbar />
    <Sidebar />

    <div className="main">
      <PageTitle />

      <div className="content">
        <div className="content-inner">
          <ErrorBoundary>{children}</ErrorBoundary>
        </div>
      </div>

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
  children: PropTypes.node.isRequired
};

export default Frontend;
