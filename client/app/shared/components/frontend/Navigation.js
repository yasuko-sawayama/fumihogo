import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              <i className="md-icon">dashboard</i> <span>自分の作品一覧</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/headquarters" activeClassName="active">
              <i className="md-icon">turned_in</i> <span>ブックマーク</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contacts" activeClassName="active">
              <i className="md-icon">view_list</i> <span>閲覧履歴</span>
            </NavLink>
          </li>
        </ul>

        <strong>--</strong>

        <ul>
          <li>
            <NavLink to="/login" activeClassName="active">
              <i className="md-icon">arrow_forward</i> <span>ログイン</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
