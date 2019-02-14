import React, { Component } from "react";

import CreateToolBar from "./CreateToolBar";
import Navigation from "./Navigation";

export default class Toolbar extends Component {
  toggleActionsBodyClass() {
    document.body.classList.toggle("toolbar-actions-open");
  }

  // toggleSearchBodyClass() {
  //   document.body.classList.toggle("toolbar-search-open");
  // }

  render() {
    return (
      <div className="toolbar">
        <div className="toolbar-inner">
          <div className="logo">
            <img src="/img/logo.svg" alt="" />
          </div>

          <ul className="top">
            <li>
              <a onClick={this.toggleActionsBodyClass.bind(this)}>
                <i className="md-icon">add</i>
              </a>
            </li>

            {/*<li>*/}
            {/*<a onClick={this.toggleSearchBodyClass.bind(this)}>*/}
            {/*<i className="md-icon">search</i>*/}
            {/*</a>*/}
            {/*</li>*/}
          </ul>

          <Navigation />

          <ul className="bottom">
            <li>
              <a>
                <i className="md-icon">power_settings_new</i>
              </a>
            </li>
          </ul>

          {/*<div className="toolbar-search">*/}
          {/*<div className="toolbar-slide-overlay" />*/}

          {/*<div className="toolbar-slide-inner">*/}
          {/*<div*/}
          {/*className="toolbar-slide-close"*/}
          {/*onClick={this.toggleSearchBodyClass.bind(this)}*/}
          {/*>*/}
          {/*<i className="md-icon">close</i>*/}
          {/*</div>*/}

          {/*<div className="toolbar-slide-content">*/}
          {/*<div className="form-group">*/}
          {/*<input*/}
          {/*type="text"*/}
          {/*className="form-control"*/}
          {/*placeholder="Type to search site"*/}
          {/*/>*/}
          {/*</div>*/}

          {/*<div className="toolbar-slide-results">*/}
          {/*<div className="toolbar-slide-result">*/}
          {/*<span>Project</span>*/}
          {/*<strong>Knowledge Base</strong>*/}
          {/*</div>*/}

          {/*<div className="toolbar-slide-result">*/}
          {/*<span>Member</span>*/}
          {/*<strong>David H. Cherry</strong>*/}
          {/*</div>*/}

          {/*<div className="toolbar-slide-result">*/}
          {/*<span>Member</span>*/}
          {/*<strong>Nathanael J. Barrett</strong>*/}
          {/*</div>*/}

          {/*<div className="toolbar-slide-result">*/}
          {/*<span>Project</span>*/}
          {/*<strong>Internal Tools</strong>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}

          <div className="toolbar-actions">
            <div className="toolbar-slide-overlay" />

            <div className="toolbar-slide-inner">
              <div
                className="toolbar-slide-close"
                onClick={this.toggleActionsBodyClass.bind(this)}
              >
                <i className="md-icon">close</i>
              </div>

              <CreateToolBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
