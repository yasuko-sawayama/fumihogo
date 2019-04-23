import React, { useState } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import ErrorBoundary from "./ErrorBoundary";
import MessageBox from "~/shared/components/messageBox";

import Toolbar from "../frontend/Toolbar";

const ContentPage = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="page-inner">
      <ErrorBoundary>
        {!showMenu && (
          <button id="menu-btn" onClick={() => setShowMenu(true)}>
            <i className="md-icon">library_books</i>
          </button>
        )}
        <CSSTransition
          in={showMenu}
          timeout={300}
          unmountOnExit
          classNames="menu"
        >
          <Toolbar closeMenu={() => setShowMenu(false)} />
        </CSSTransition>
        <div
          className="main"
          onClick={() => setShowMenu(false)}
          role="presentation"
        >
          <div className="content">
            <div className="content-inner">
              <MessageBox />
              {children}
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};
ContentPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentPage;
