/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

import footerLogo from "./../../assets/img/kwp-logo.svg";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

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
            <img src={footerLogo} height="60px" />
          </Grid>
        </Grid>
        <Grid
          container
          style={{ justifyContent: "center", marginTop: 30, marginBottom: 10 }}
          direction="row"
          alignItems="center"
        >
          <Grid item>
            <a
              href="https://www.facebook.com/karachi.water.project/"
              target={"_blank"}
            >
              <FacebookIcon className={classes.icons} />
            </a>
          </Grid>
          <Grid item>
            <a href="https://twitter.com/karachi_water" target={"_blank"}>
              <TwitterIcon className={classes.icons + " " + classes.padding} />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.instagram.com/karachi.water.project/"
              target={"_blank"}
            >
              <InstagramIcon
                className={classes.icons + " " + classes.padding}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.youtube.com/channel/UCf2nWb5Xd2b_Duolu9SkmIA"
              target={"_blank"}
            >
              <YouTubeIcon className={classes.icons + " " + classes.padding} />
            </a>
          </Grid>
        </Grid>
        <Grid
          style={{ justifyContent: "center", marginTop: 20, marginBottom: 30 }}
          container
          direction="row"
          alignItems="center"
        >
          <Typography variant="body2">
            &copy; {1900 + new Date().getYear()} Karachi Water Project. <br />{" "}
            All Rights Reserved.
          </Typography>
        </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
