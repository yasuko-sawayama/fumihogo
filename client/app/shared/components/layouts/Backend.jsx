import React from "react";
import PropTypes from "prop-types";

import ProfilePanel from "../helpers/ProfilePanel";
import Footer from "../helpers/Footer";
import PageTitle from "../helpers/PageTitle";
import Sidebar from "../helpers/Sidebar";
import Toolbar from "../helpers/Toolbar";

export default function Backend(props) {
  return (
    <div className="page-inner">
      <Toolbar/>
      <Sidebar/>

      <div className="main">
        <PageTitle title="テスト用タイトル"/>

        <div className="content">
          {props.children}
        </div>

        <Footer/>
      </div>

      <div className="content-side-wrapper">
        <div className="content-side-overlay"/>

        <div className="content-side">
          <ProfilePanel/>
        </div>
      </div>
    </div>
  );
}

Backend.propTypes = {
  children: PropTypes.node.isRequired
}

