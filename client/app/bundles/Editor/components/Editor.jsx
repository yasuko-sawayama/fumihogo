import React from "react";
// import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Responsive from "~/shared/components/layouts/responsive.jsx";

import EditForm from "./editor/EditForm";
import NewForm from "./editor/NewForm";

function Editor() {
  // TODO: ページ単位で編集できる
  // TODO: ページ間の移動ができる
  // TODO: 表示画面のページを引き継ぐ
  return (
    <Router basename="/products">
      <Responsive>
        <Route
          exact
          path="/:productId/:path(edit|pages)/:pageOrder/:edit"
          component={EditForm}
        />
        <Route exact path="/new" component={NewForm} />
      </Responsive>
    </Router>
  );
}

export default Editor;
