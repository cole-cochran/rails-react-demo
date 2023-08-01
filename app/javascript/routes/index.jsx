import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home";

export default (
  <Router>
    <Route>
      <Route path="/" exact component={Home} />
    </Route>
  </Router>
);
