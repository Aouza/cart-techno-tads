import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartPage from "./page/CartPage";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={CartPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
