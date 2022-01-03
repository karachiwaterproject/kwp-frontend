import { makeStyles, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import React from "react";
import Parallax from "components/Parallax/Parallax";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/dataPortal.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(styles);

const FlowmeterDevelopment = (props) => {
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
      <Parallax image={require("assets/img/project/project1.jpg").default}>
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
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer className={classes.mainContainer + " main-container"}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", marginBottom: 30 }}
          >
            Development of a low-cost smart flowmeter network for domestic
            consumers
          </Typography>
          <Typography variant="body2">
            A major cause of the dysfunctional water management in Karachi is
            the high level of non-revenue water (NRW) in the system which
            prevents Karachi’s water utility (KWSB) from being financially
            sustainable. Estimates for NRW in Karachi’s water system range from
            35% to as high as 60%. Because bulk water suppliers and household
            connections are not metered, it is difficult to accurately gauge the
            share of physical NRW. A prerequisite for reducing NRW is improved
            water accounting which requires credible quantitative flow data.
            Data on domestic water flows is also needed to understand where and
            how much water is used across Karachi. While much of the discourse
            regarding Karachi’s water challenges focus on a perceived
            ‘shortage’, it is not informed by credible empirical analysis and is
            based on unverified assumptions. In this study, we are designing
            cost-effective smart flowmeters, and then installing these
            flowmeters in a variety of households exhibiting a wide range of
            socioeconomic characteristics. Combined with the outputs from Study
            3, this study will provide two key solutions to Karachi’s water
            challenges: (i) a quantification of spatial and temporal patterns in
            domestic water usage that will improve current demand estimates and
            projections and allow for more targeted investments in water network
            upgrades, and (ii) availability of technology and evidence based
            equitable water pricing instruments that will help increase revenue
            to allow KWSB to achieve financial sustainability.
          </Typography>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
};

export default FlowmeterDevelopment;
