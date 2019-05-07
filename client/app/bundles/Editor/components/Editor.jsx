import React from "react";
// import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Responsive } from "~/shared/components/layouts";
import { EditForm, NewForm, NewPageForm } from "./form";

function Editor() {
  // TODO: ページ単位で編集できる
  // TODO: ページ間の移動ができる
  // TODO: 表示画面のページを引き継ぐ
  return (
    <Responsive>
      <Router basename="/products">
        <Switch>
          <Route exact path="/:productId/pages/new" component={NewPageForm} />
          <Route
            exact
            path="/:productId/:path(edit|pages)/:pageOrder?/:edit?"
            component={EditForm}
          />
          <Route exact path="/new" component={NewForm} />
        </Switch>
      </Router>
    </Responsive>
  );
}

export default Editor;
