import React from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
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
import Dashboard from "views/Dashboard/Dashboard";
import Node from "views/Node/Node";
import Readings from "views/Readings/Readings";
import Nodes from "views/Nodes/Nodes";
import PrivateRoute from "routing/PrivateRoute";
import { loadUser } from "actions/auth";
import HomeNode from "views/Node/HomeNode";
import NodeWithTime from "views/Node/NodeWithTime";

const App = () => {
  React.useEffect(() => {
    if (localStorage.getItem("username")) store.dispatch(loadUser());
  }, [localStorage.getItem("username")]);
  return (
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
          <Route
            path="/projects/water-security"
            component={WaterInLiyar}
            exact
          />
          <Route
            path="/projects/toward-sustainable"
            component={WaterPricing}
            exact
          />
          <Route path="/login" component={Dataportal} exact />

          <PrivateRoute path="/dashboard" component={Dashboard} exact />
          <PrivateRoute path="/nodes" component={Nodes} exact />
          <PrivateRoute path="/readings" component={Readings} exact />
          <PrivateRoute path="/node/:key/:slug" component={Node} exact />
          <PrivateRoute
            path="/node/:key/:slug/:time1/:time2"
            component={NodeWithTime}
            exact
          />
          <PrivateRoute
            path="/homenode/:key/:slug"
            component={HomeNode}
            exact
          />

          <Redirect to="/home" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
