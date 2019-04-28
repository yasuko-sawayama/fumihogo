import React from "react";
// import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditForm from "./editor/EditForm";
import NewPageForm from "./editor/NewPageForm";
import NewForm from "./editor/NewForm";

function Editor() {
  // TODO: ページ単位で編集できる
  // TODO: ページ間の移動ができる
  // TODO: 表示画面のページを引き継ぐ
  return (
    <Router basename="/products">
      <Switch>
        <Route
          exact
          path="/:productId/pages/new"
          render={() => <div>test</div>}
        />
        <Route
          exact
          path="/:productId/:path(edit|pages)/:pageOrder?/:edit?"
          component={EditForm}
        />
        <Route exact path="/new" component={NewForm} />
      </Switch>
    </Router>
  );
}

export default Editor;
