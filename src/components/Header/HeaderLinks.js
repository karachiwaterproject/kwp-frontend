/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

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
        <Link color="transparent" to="/" className={classes.navLink}>
          <i className={classes.socialIcons + " fas fa-home"} />
          <Typography variant="body2" style={{ marginLeft: 10 }}>
            Home
          </Typography>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/team" className={classes.navLink}>
          <i className={classes.socialIcons + " fa fa-users"} />
          <Typography variant="body2" style={{ marginLeft: 10 }}>
            Team
          </Typography>
        </Link>
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
            <Link to="/" className={classes.dropdownLink}>
              Flowmeter Development
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Water in Liyari
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Water Pricing
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/dashboard" className={classes.navLink}>
          <i className={classes.socialIcons + " fas fa-chart-bar"} />
          <Typography variant="body2" style={{ marginLeft: 10 }}>
            DataPortal
          </Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
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
