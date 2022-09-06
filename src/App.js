import React from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Dataportal from "views/DataPortal/Dataportal";
import FlowmeterDevelopment from "views/Projects/FlowmeterDevelopment";
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
import Spinner from "Spinner";
import ResearcherRoute from "routing/ResearcherRoute";
import Research from "views/Research/Research";
import WaterJustice from "views/Projects/WaterJustice";
import WaterDemand from "views/Projects/WaterDemand";
import AlternateNetworks from "views/Projects/AlternateNetworks";

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

export const disableScroll = () => {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
};

export const enableScroll = () => {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
};

const App = () => {
  React.useEffect(() => {
    if (localStorage.getItem("username")) {
      store.dispatch(loadUser());
    } else {
      console.log("username error ! ");
    }
  }, [localStorage.getItem("username")]);
  return (
    <Provider store={store}>
      <Router history={hist}>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/team" component={Teams} exact />
          <Route path="/extra" component={Teams} exact />
          <Route
            exact
            path="/projects/develop-low-cost"
            component={FlowmeterDevelopment}
          />
          <Route
            path="/projects/water-justice"
            component={WaterJustice}
            exact
          />
          <Route
            path="/projects/toward-sustainable"
            component={WaterPricing}
            exact
          />
          <Route path="/projects/water-demand" component={WaterDemand} exact />

          <Route
            path="/projects/alternate-networks"
            component={AlternateNetworks}
            exact
          />
          <Route path="/login" component={Dataportal} exact />
          <Route path="/blogs" component={Blogs} exact />
          <Route path="/research-outreach" component={Research} exact />

          <AdminRoute path="/dashboard" component={Dashboard} exact />

          <PrivateRoute path="/nodes" component={Nodes} exact />

          <ResearcherRoute path="/readings" component={Readings} exact />

          <PrivateRoute path="/readings/:slug" component={Readings} exact />

          <ResearcherRoute path="/node/:slug" component={Node} exact />

          <ResearcherRoute
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
