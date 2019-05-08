import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Responsive } from "~/shared/components/layouts";
import { EditForm, NewForm, NewPageForm } from "./form";

function Editor() {
  // TODO: ページ間の移動ができる
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
