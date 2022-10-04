import { Container, makeStyles, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import { Link } from "react-router-dom";

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

const FlowmeterDevelopment = (props) => {
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
        image={require("assets/img/project/project1.webp").default}
        style={{ height: 400 }}
        head="Cost Effective Smart Device Development"
      >
        {/* <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <br />
                <br />
                <h2 className={classes.title}>
                  Cost Effective Smart Device Development
                </h2>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div> */}
      </FrontParallax>
      <Container>
        <div className={classNames(classes.main)}>
          <GridContainer className={classes.mainContainer2 + " main-container"}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", marginBottom: 30 }}
            >
              Development of a low-cost smart device network for domestic
              consumers
            </Typography>
            <Typography variant="body1">
              A major cause of the dysfunctional water management in Karachi is
              the high level of non-revenue water (NRW) in the system which
              prevents Karachi’s water utility (KWSB) from being financially
              sustainable. Estimates for NRW in Karachi’s water system range
              from 35% to as high as 60%. Because bulk water suppliers and
              household connections are not metered, it is difficult to
              accurately gauge the share of physical NRW. A prerequisite for
              reducing NRW is improved water accounting which requires credible
              quantitative flow data. Data on domestic water flows is also
              needed to understand where and how much water is used across
              Karachi. While much of the discourse regarding Karachi’s water
              challenges focus on a perceived ‘shortage’, it is not informed by
              credible empirical analysis and is based on unverified
              assumptions. In this study, we are designing cost-effective smart
              devices, and then installing these devices in a variety of
              households exhibiting a wide range of socioeconomic
              characteristics. Combined with the outputs from Study 3, this
              study will provide two key solutions to Karachi’s water
              challenges: (i) a quantification of spatial and temporal patterns
              in domestic water usage that will improve current demand estimates
              and projections and allow for more targeted investments in water
              network upgrades, and (ii) availability of technology and evidence
              based equitable water pricing instruments that will help increase
              revenue to allow KWSB to achieve financial sustainability.
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

export default FlowmeterDevelopment;
