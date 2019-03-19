import React from "react";
import { NavLink } from "react-router-dom";

const CreateToolBar = () => (
  <div className="toolbar-slide-content">
    <strong>新しく書き始める</strong>

    <ul>
      <li>
        <a>
          <i className="md-icon">folder_open</i> <span>Project</span>
        </a>
      </li>

      <li>
        <a>
          <i className="md-icon">attach_money</i> <span>Pricing Plan</span>
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

export default CreateToolBar;
