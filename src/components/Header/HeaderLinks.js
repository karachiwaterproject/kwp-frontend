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

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { Typography } from "@material-ui/core";

import headerLogo from "./../../assets/img/hu-header-logo.svg";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink
          color="transparent"
          to="/home"
          className={classes.navLink}
          activeClassName={classes.activeLink}
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
          activeClassName={classes.activeLink}
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
      <ListItem className={classes.listItem}>
        <NavLink
          to="/dashboard"
          className={classes.navLink}
          activeClassName={classes.activeLink}
        >
          <i className={classes.socialIcons + " fas fa-chart-bar"} />
          <Typography variant="body2" style={{ marginLeft: 10 }}>
            Dashboard
          </Typography>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem} style={{ marginLeft: 20 }}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="white"
          target="_blank"
          className={classes.navLink + " customButton"}
        >
          <img src={headerLogo} height="45px" />
        </Button>
      </ListItem>
    </List>
  );
}
