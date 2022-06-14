import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminStaffRoute = ({
  component: Component,
  auth: {
    isAuthenticated,
    loading,
    admin,
    isStaff,
    // user: { nodes_access },
  },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && !loading ? (
        <Redirect to="/nodes" />
      ) : admin || isStaff ? (
        <Component {...props} />
      ) : (
        <Redirect to="/nodes" />
      )
    }
  />
);
AdminStaffRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(AdminStaffRoute);
