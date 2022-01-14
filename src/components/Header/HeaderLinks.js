/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link, NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";
import PropTypes from "prop-types";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { Typography } from "@material-ui/core";

import headerLogo from "./../../assets/img/hu-header-logo.svg";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { logout } from "actions/auth";
import { connect } from "react-redux";

const useStyles = makeStyles(styles);

function HeaderLinks({ auth: { isAuthenticated, loading }, logout }) {
  const classes = useStyles();

  const authLinks = (
    <>
      <ListItem className={classes.listItem}>
        <NavLink
          to="/dashboard"
          className={classes.navLink}
          activeClassName={classes.activeLink + " active-link"}
        >
          <i className={classes.socialIcons + " fas fa-chart-bar"} />
          <Typography variant="body2" style={{ marginLeft: 10 }}>
            Dashboard
          </Typography>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a className={classes.navLink} onClick={logout} href="#!">
          Logout
        </a>
      </ListItem>
    </>
  );

  const guestLinks = (
    <>
      <ListItem className={classes.listItem}>
        <NavLink
          to="/login"
          className={classes.navLink}
          activeClassName={classes.activeLink + " active-link"}
        >
          <i className={classes.socialIcons + " fas fa-chart-bar"} />
          <Typography variant="body2" style={{ marginLeft: 10 }}>
            Data Portal
          </Typography>
        </NavLink>
      </ListItem>
    </>
  );

  return (
    <GridContainer style={{ alignItems: "center" }}>
      <ListItem className={classes.listItem}>
        <NavLink
          color="transparent"
          to="/home"
          className={classes.navLink}
          activeClassName={classes.activeLink + " active-link"}
        >
          <i className={classes.socialIcons + " fas fa-home"} />
          <Typography variant="body2" style={{ marginLeft: 10 }}>
            Home
          </Typography>
        </NavLink>
      </ListItem>

      <ListItem className={classes.listItem}>
        <NavLink
          to="/team"
          className={classes.navLink}
          activeClassName={classes.activeLink + " active-link"}
        >
          <i className={classes.socialIcons + " fa fa-users"} />
          <Typography variant="body2" style={{ marginLeft: 10 }}>
            Team
          </Typography>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Projects"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
            style: {
              fontSize: "14px",
            },
          }}
          buttonIcon={Apps}
          dropdownList={[
            <NavLink
              to="/projects/develop-low-cost"
              className={classes.dropdownLink}
              activeClassName={classes.activeDropdowLink}
            >
              Flowmeter Development
            </NavLink>,
            <NavLink
              to="/projects/water-security"
              className={classes.dropdownLink}
              activeClassName={classes.activeDropdowLink}
            >
              Water in Liyari
            </NavLink>,
            <NavLink
              to="/projects/toward-sustainable/"
              className={classes.dropdownLink}
              activeClassName={classes.activeDropdowLink}
            >
              Water Pricing
            </NavLink>,
          ]}
        />
      </ListItem>

      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}

      {/* <ListItem className={classes.listItem} style={{ marginLeft: 20 }}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="white"
          target="_blank"
          className={classes.navLink + " customButton"}
        >
          <img src={headerLogo} height="45px" />
        </Button>
      </ListItem> */}
    </GridContainer>
  );
}
HeaderLinks.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(HeaderLinks);
