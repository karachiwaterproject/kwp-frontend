import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({
  component: Component,
  auth: {
    isAuthenticated,
    loading,
    admin,
    // user: { nodes_access },
  },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && !loading ? (
        <Redirect to="/nodes" />
      ) : admin ? (
        <Component {...props} />
      ) : (
        <Redirect to="/nodes" />
      )
    }
  />
);
AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(AdminRoute);
