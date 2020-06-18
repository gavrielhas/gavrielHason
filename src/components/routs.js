import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./pages/homePage";
import Products from "./pages/products";

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route path="/Products" component={Products} />
    </Router>
  );
}
export default Routes;
