import { Container, Link, makeStyles, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import React from "react";
import Parallax from "components/Parallax/Parallax";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/waterPricing.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer";
import { projects } from "constrants";
import { OnGoingProjects } from "views/HomePage/OnGoingProjects/OnGoingProjects";
import { CHANGE_NAV_ON_SCROLL } from "constrants";

const useStyles = makeStyles(styles);

const WaterPricing = (props) => {
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
      <Parallax image={require("assets/img/project/project3.png").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <h1 className={classes.title}>Flowmeter Development</h1>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Container>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridContainer className={classes.mainContainer + " main-container"}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", marginBottom: 30 }}
            >
              Towards a sustainable and equitable water pricing strategy for
              Karachi
            </Typography>
            <Typography variant="body2">
              The Karachi Water and Sewerage Board (KWSB) is stuck in a vicious
              cycle: low revenue collection restricts its ability to maintain
              and expand the water system; the resultant poor performance
              hinders any effort to increase revenues from consumers.
              <br />
              <br />
              Major reasons for low revenue include high non-revenue water due
              to theft and leakage, low bill collection rates and tariffs for
              piped water that don’t account for actual usage. There’s also
              extreme inequity in water costs; on the one hand, there are
              communities that are suffering from acute water scarcity while
              also paying large sums out of their monthly income on water, on
              the other hand, there are neighborhoods that receive reliable
              piped water supply at a minimal or no charge. In this environment,
              KWSB needs help with improving its service delivery, and a pricing
              strategy that is not only equitable and inclusive—in terms of its
              billing structure for different income groups—but also sustainable
              in the long run—in terms of revenue sufficiency. This research
              study uses a combination of willingness-to-pay (WTP) surveys and
              economic models to explore the effectiveness of various water
              pricing strategies. Using long-term budgetary valuations for KWSB
              under different objectives and tariff regimes, we will devise a
              portfolio of water pricing strategies adapted for various contexts
              across Karachi.
            </Typography>
          </GridContainer>
          <div className={classes.mainContainer + " main-container"}>
            <Typography variant="h4" className="h4">
              OnGoing
            </Typography>
            <Typography
              variant="h3"
              style={{ color: "#461A55", fontWeight: "bold" }}
            >
              Projects
            </Typography>
            <GridContainer>
              {projects.map(({ name, image, url }) => (
                <GridItem key={name} xs={12} sm={6} lg={3}>
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

export default WaterPricing;
