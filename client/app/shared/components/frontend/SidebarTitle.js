import React, { Component } from "react";

export default class SidebarTitle extends Component {
  toggleBodyClass() {
    document.body.classList.toggle("sidebar-title-content-open");
  }

  render() {
    return (
      <h1 className="sidebar-title-wrapper">
        <div className="sidebar-title-inner">
          <div className="sidebar-subtitle">下書き作成用</div>
          <div className="sidebar-title">ふみほご</div>
        </div>
      </h1>
    );
  }
}
