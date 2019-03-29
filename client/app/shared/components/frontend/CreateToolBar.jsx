import React from "react";
import { NavLink } from "react-router-dom";

const CreateToolBar = () => {
  return (
    <div className="toolbar-slide-content">
      <strong>新しく書き始める</strong>

      <ul>
        <li>
          <a href="/products/new">
            <i className="md-icon">library_books</i>{" "}
            <span>新しく小説を書く</span>
          </a>
        </li>

        <li>
          <a>
            <i className="md-icon">description</i> <span>ページを追加する</span>
          </a>
        </li>

        <li>
          <a>
            <i className="md-icon">done</i> <span>Task</span>
          </a>
        </li>

        <li>
          <a>
            <i className="md-icon">account_circle</i> <span>Member</span>
          </a>
        </li>

        <li>
          <a>
            <i className="md-icon">shopping_cart</i> <span>Product</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CreateToolBar;
