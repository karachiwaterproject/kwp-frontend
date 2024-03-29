import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Header from "components/Header/Header";
import Parallax from "components/Parallax/Parallax";
import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/team.js";
import HeaderLinks from "components/Header/HeaderLinks";
import classNames from "classnames";

import { Container, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import FrontParallax from "components/Parallax/FrontParallax";
import Spinner from "Spinner";
import { enableScroll } from "App";
import { research } from "constrants";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import SocialTabs from "views/Blogs/Tabs";
import Sidebar from "components/Sidebar/Sidebar";

const useStyles = makeStyles(styles);
const teams = "./../../assets/img/team/";

const Research = (props) => {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(true);
  const [height, setHeight] = React.useState(100);
  setTimeout(() => {
    enableScroll();
    setHeight(0);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, 1000);

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
      {loading && <Spinner _height={`${height}vh`} />}
      <FrontParallax
        image={require("assets/img/panel-talk-team2.jpeg").default}
        head="Outreach"
        // style={{ height: 430 }}
      >
        {/* <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <br />
                <br />
                <h2 className={classes.title}>Our Team</h2>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div> */}
      </FrontParallax>
      <Sidebar>
        <div
          className="twitterContainer"
          style={{ padding: 0, margin: "auto", width: "70%" }}
        >
          <TwitterTimelineEmbed
            autoHeight={false}
            sourceType="profile"
            screenName="karachi_water"
            options={{ height: 700 }}
          />
        </div>
      </Sidebar>
      <Container>
        <div className={classNames(classes.main)}>
          <GridContainer
            className={classes.mainContainer2 + " main-container"}
            style={{ padding: "0px 100px 0" }}
          >
            <GridItem
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ paddingRight: 50 }}
            >
              <GridContainer>
                <SocialTabs />
              </GridContainer>
              <br />
              <br />

              {/* <Typography
                variant="h3"
                style={{ fontWeight: "bold", marginBottom: "30px" }}
              >
                Papers
              </Typography>
              <hr style={{ width: "100%" }} /> */}
            </GridItem>
          </GridContainer>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Research;
