import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FavoriteList from "./FavoriteList";

const Favorite = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/likes" component={FavoriteList} />
        </Switch>
      </Router>
    </div>
  );
};

export default Favorite;
