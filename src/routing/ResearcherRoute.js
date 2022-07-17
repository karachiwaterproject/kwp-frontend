import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ResearcherRoute = ({
  component: Component,
  auth: {
    isAuthenticated,
    loading,
    admin,
    role,
    // user: { nodes_access },
  },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && !loading ? (
        <Redirect to="/nodes" />
      ) : role === "student_researcher" ||
        role === "researcher" ||
        role === "admin" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/nodes" />
      )
    }
  />
);
ResearcherRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ResearcherRoute);
