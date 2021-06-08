import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartPage from "./page/CartPage";
import Home from "./page/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
