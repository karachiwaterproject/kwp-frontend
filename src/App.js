import React from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
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
import ScrollToTop from "./ScrollToTop";
import HomeNodeWeekly from "views/Node/HomeNodeWeekly";
import AdminRoute from "routing/AdminRoute";
import Blogs from "views/Blogs/Blogs";
import AdminStaffRoute from "routing/AdminStaffRoute";
import TestHomePage from "views/HomePage/TestHomePage";
import Spinner from "Spinner";

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;

try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
const App = () => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    // setLoading(false);
    enableScroll();
  }, 5000);

  React.useEffect(() => {
    disableScroll();
    if (localStorage.getItem("username")) {
      store.dispatch(loadUser());
    } else {
      console.log("username error ! ");
    }
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  }, [localStorage.getItem("username")]);
  return (
    <Provider store={store}>
      <Router history={hist}>
        <ScrollToTop />
        {loading && <Spinner />}
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/test" component={TestHomePage} exact />
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
          <Route path="/blogs" component={Blogs} exact />

          <AdminRoute path="/dashboard" component={Dashboard} exact />
          <PrivateRoute path="/nodes" component={Nodes} exact />
          <AdminStaffRoute path="/readings" component={Readings} exact />
          <PrivateRoute path="/readings/:slug" component={Readings} exact />
          <AdminStaffRoute path="/node/:slug" component={Node} exact />
          <PrivateRoute
            path="/node/:slug/:time1/:time2"
            component={NodeWithTime}
            exact
          />
          <PrivateRoute path="/homenode/:slug" component={HomeNode} exact />
          <PrivateRoute
            path="/homenode/weekly/:slug"
            component={HomeNodeWeekly}
            exact
          />

          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
