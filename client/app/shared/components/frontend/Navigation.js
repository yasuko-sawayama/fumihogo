import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <a href="/products">
              <i className="md-icon">dashboard</i> <span>自分の作品一覧</span>
            </a>
          </li>

          <li>
            <a href="/likes">
              <i className="md-icon">favorite</i> <span>ブックマーク</span>
            </a>
          </li>

          {/*<li>*/}
          {/*<NavLink to="/contacts" activeClassName="active">*/}
          {/*<i className="md-icon">view_list</i> <span>閲覧履歴</span>*/}
          {/*</NavLink>*/}
          {/*</li>*/}
        </ul>

        <strong>--</strong>

        <ul>
          <li>
            <a href="/sign_in" activeClassName="active">
              <i className="md-icon">arrow_forward</i> <span>ログイン</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

// TODO: ログイン状態でメニュー切替
