import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
// import "index.css";
import Dataportal from "views/DataPortal/Dataportal";
import FlowmeterDevelopment from "views/Projects/FlowmeterDevelopment";
import WaterInLiyar from "views/Projects/WaterInLiyari";
import WaterPricing from "views/Projects/WaterPricing";
import HomePage from "views/HomePage/HomePage";
import Teams from "views/Teams/Teams";

var hist = createBrowserHistory();

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} exact />
        <Route path="/profile-page" component={ProfilePage} exact />
        <Route path="/login-page" component={LoginPage} exact />
        <Route path="/home" component={HomePage} exact />
        <Route path="/team" component={Teams} exact />
        <Route path="/extra" component={Teams} exact />
        <Route
          exact
          path="/projects/develop-low-cost"
          component={FlowmeterDevelopment}
        />
        <Route path="/projects/water-security" component={WaterInLiyar} exact />
        <Route
          path="/projects/toward-sustainable"
          component={WaterPricing}
          exact
        />
        <Route path="/dashboard" component={Dataportal} exact />
        <Redirect to="/home" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
