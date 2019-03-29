import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left wf-hannari">ふみほご</div>

        <div className="footer-right">
          <ul>
            <li>
              <a href="/about">ふみほごについて</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a href="https://twitter.com/sawayama_yasuko">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
