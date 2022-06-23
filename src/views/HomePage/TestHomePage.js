import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import React from "react";
import Parallax from "components/Parallax/Parallax";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/homePage.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer";
import { OnGoingProjects } from "./OnGoingProjects/OnGoingProjects";
import team from "./../../assets/img/team-banner.webp";
import hu from "./../../assets/img/hu-logo.svg";
import hec from "./../../assets/img/hec-logo.svg";
import hashoo from "./../../assets/img/hashoo-logo.svg";
import { Link } from "react-router-dom";
import { projects } from "constrants";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Card from "components/Card/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ReactCardCarousel from "react-card-carousel";
import HeroHeader from "components/HeroHeader/HeroHeader";
import HeroFooter from "components/HeroFooter/HeroFooter";

const useStyles = makeStyles(styles);

const TestHomePage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

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
      <HeroHeader />
      {/* <Footer /> */}
      <div style={{ height: "1000px" }}></div>
      <HeroFooter />
    </div>
  );
};

export default TestHomePage;
