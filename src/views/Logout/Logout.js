import { logout } from "actions/auth";
import React from "react";

const Logout = () => {
  logout();
  return <div></div>;
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect()(Logout);
