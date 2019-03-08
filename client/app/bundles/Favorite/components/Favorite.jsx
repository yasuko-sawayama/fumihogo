import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FavoriteList from "./FavoriteList";

const Favorite = () => {
  return (
    <div>
      <Router>
        <FavoriteList />
      </Router>
    </div>
  );
};

export default Favorite;
