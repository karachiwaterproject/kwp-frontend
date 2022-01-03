/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { Grid, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import footerLogo from "./../../assets/img/hu-footer-logo.svg";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <Grid
          style={{ justifyContent: "center", marginTop: 30 }}
          container
          direction="row"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <img src={footerLogo} height="75px" />
          </Grid>
          <div className="leftBorder" />
          <Grid item xs={12} sm={4}>
            <img src={footerLogo} height="75px" />
          </Grid>
        </Grid>
        <Grid
          style={{ justifyContent: "center", marginTop: 30, marginBottom: 30 }}
          container
          direction="row"
          alignItems="center"
        >
          <Typography variant="body2">
            Copyright KWP &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://habib.edu.pk"
              className={aClasses}
              target="_blank"
              style={{ fontWeight: "bolder" }}
            >
              Habib University
            </a>{" "}
          </Typography>
        </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
