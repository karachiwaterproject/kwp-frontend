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

const WaterDemand = ({ props }) => {
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
        image={require("assets/img/project/project5.webp").default}
        style={{ height: 400 }}
        head="Water Demand"
      ></FrontParallax>
      <Container>
        <div className={classNames(classes.main)}>
          <GridContainer className={classes.mainContainer2 + " main-container"}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", marginBottom: 30 }}
            >
              Quantifying household water use and its determinants in low-income
              water scarce households.
            </Typography>
            <Typography variant="body1">
              Water discourse in Karachi revolves around a theme of scarcity.
              KWSB projects a demand of over 1200 million gallons a day (MGD)
              for Karachi. With current water supply around 550 MGD, most of
              Karachi's water problems are reduced to that of a "shortage" of
              water. However, the KWSB projections of water demand are not based
              on actual usage locally; instead, the projections are based on a
              uniform and exaggerated assumed per capita demand that is not
              representative of household usage in Karachi. In this study, we
              conduct household surveys in the low income township of Lyari to
              understand how and how much water households use for their daily
              activities. A better understanding of actual water demands in the
              city can help lead to better targeted water infrastructure
              investments and policies.
            </Typography>
          </GridContainer>
          <div className={classes.mainContainer + " main-container"}>
            <Typography
              variant="h4"
              className="h4"
              style={{ borderLeft: "4px #3977C9 solid", paddingLeft: "10px" }}
            >
              Ongoing
            </Typography>
            <Typography
              variant="h3"
              style={{
                color: "#3977C9",
                fontWeight: "bold",
                borderLeft: "4px #000 solid",
                paddingLeft: "10px",
              }}
            >
              Projects
            </Typography>
            <GridContainer>
              {projects.map(({ name, image, url }) => (
                <GridItem key={name} xs={12} sm={6} lg={4}>
                  <Link to={url}>
                    <OnGoingProjects name={name} image={image} />
                  </Link>
                </GridItem>
              ))}
            </GridContainer>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default WaterDemand;
