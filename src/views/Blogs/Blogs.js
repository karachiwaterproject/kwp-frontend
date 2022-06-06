import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import React from "react";
import styles from "assets/jss/material-kit-react/views/homePage.js";
import { Container, makeStyles, Typography } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(styles);

const Blogs = (props) => {
  const classes = useStyles();

  const { ...rest } = props;

  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="dimWhite"
        changeColorOnScroll={{
          height: CHANGE_NAV_ON_SCROLL,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/blogging.webp").default}
        style={{ height: "430px" }}
      ></Parallax>
      <Container>
        <div className={classNames(classes.main)}>
          <div className={classes.mainContainer + " main-container"}>
            <br />
            <Typography variant="h4" className="h4">
              Blogs
            </Typography>
            <hr />
            Coming soon ...
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
