import { makeStyles, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import React from "react";
import Parallax from "components/Parallax/Parallax";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/waterPricing.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer";

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
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/project/project3.png").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Flowmeter Development</h1>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer className={classes.mainContainer}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", marginBottom: 30 }}
          >
            Towards a sustainable and equitable water pricing strategy for
            Karachi
          </Typography>
          <Typography variant="body2">
            The Karachi Water and Sewerage Board (KWSB) is stuck in a vicious
            cycle: low revenue collection restricts its ability to maintain and
            expand the water system; the resultant poor performance hinders any
            effort to increase revenues from consumers.
            <br />
            <br />
            Major reasons for low revenue include high non-revenue water due to
            theft and leakage, low bill collection rates and tariffs for piped
            water that don’t account for actual usage. There’s also extreme
            inequity in water costs; on the one hand, there are communities that
            are suffering from acute water scarcity while also paying large sums
            out of their monthly income on water, on the other hand, there are
            neighborhoods that receive reliable piped water supply at a minimal
            or no charge. In this environment, KWSB needs help with improving
            its service delivery, and a pricing strategy that is not only
            equitable and inclusive—in terms of its billing structure for
            different income groups—but also sustainable in the long run—in
            terms of revenue sufficiency. This research study uses a combination
            of willingness-to-pay (WTP) surveys and economic models to explore
            the effectiveness of various water pricing strategies. Using
            long-term budgetary valuations for KWSB under different objectives
            and tariff regimes, we will devise a portfolio of water pricing
            strategies adapted for various contexts across Karachi.
          </Typography>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
};

export default WaterPricing;
