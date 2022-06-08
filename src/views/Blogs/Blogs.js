import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import React from "react";
import styles from "assets/jss/material-kit-react/views/homePage.js";
import { Container, makeStyles, Typography } from "@material-ui/core";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";

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
          <GridContainer
            className={classes.mainContainer + " main-container"}
            style={{ padding: "50px 100px 0" }}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", marginBottom: "20px" }}
            >
              Blogs
            </Typography>
            <hr style={{ width: "100%" }} />
          </GridContainer>
          <GridContainer className={classes.mainContainer + " main-container2"}>
            <a
              class="twitter-timeline"
              href="https://twitter.com/karachi_water?ref_src=twsrc%5Etfw"
            >
              Tweets by karachi_water
            </a>{" "}
          </GridContainer>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
