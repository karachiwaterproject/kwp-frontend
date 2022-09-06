import { Container, makeStyles, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import { Link } from "react-router-dom";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import React from "react";
import Parallax from "components/Parallax/Parallax";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/dataPortal.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer";
import { projects } from "constrants";
import { OnGoingProjects } from "views/HomePage/OnGoingProjects/OnGoingProjects";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import FrontParallax from "components/Parallax/FrontParallax";
import { enableScroll } from "App";
import Spinner from "Spinner";

const useStyles = makeStyles(styles);

const AlternateNetworks = ({ props }) => {
  const classes = useStyles();
  const { ...rest } = props;
  const [loading, setLoading] = React.useState(true);
  const [height, setHeight] = React.useState(100);
  setTimeout(() => {
    enableScroll();
    setHeight(0);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, 1000);
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: CHANGE_NAV_ON_SCROLL,
          color: "white",
        }}
        {...rest}
      />
      {loading && <Spinner _height={`${height}vh`} />}
      <FrontParallax
        image={require("assets/img/project/project3.webp").default}
        style={{ height: 400 }}
        head="Alternate Networks"
      ></FrontParallax>
      <Container>
        <div className={classNames(classes.main)}>
          <GridContainer className={classes.mainContainer2 + " main-container"}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", marginBottom: 30 }}
            >
              Alternate Networks
            </Typography>
          </GridContainer>
        </div>
      </Container>
    </div>
  );
};

export default AlternateNetworks;
