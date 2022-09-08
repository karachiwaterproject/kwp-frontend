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
      <Container>
        <div className={classNames(classes.main)}>
          <GridContainer
            className={classes.mainContainer2 + " main-container"}
            style={{ padding: "0px 100px 0" }}
          >
            <GridItem
              xs={12}
              sm={12}
              md={8}
              lg={8}
              style={{ paddingRight: 50 }}
            >
              <Typography
                variant="h3"
                style={{ fontWeight: "bold", marginBottom: "30px" }}
              >
                Articles
              </Typography>
              <hr style={{ width: "100%" }} />
              <GridContainer>
                {research.map(({ name, image, description, url }) => (
                  <GridItem key={name} xs={12} sm={12} lg={12}>
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        style={{ pointer: "cursor" }}
                      >
                        <OnGoingProjects
                          name={name}
                          description={description}
                          image={image}
                        />
                      </a>
                    ) : (
                      <OnGoingProjects
                        name={name}
                        description={description}
                        image={image}
                      />
                    )}
                  </GridItem>
                ))}
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
            <GridItem
              style={{ margin: 0, padding: 0 }}
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <div
                className="twitterContainer"
                style={{ padding: 0, margin: "auto", width: "90%" }}
              >
                <TwitterTimelineEmbed
                  autoHeight={false}
                  sourceType="profile"
                  screenName="karachi_water"
                  options={{ height: 600 }}
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Research;

const useCustomStyles = makeStyles((theme) => ({
  root: {
    width: "97%",
    height: "280px",
    marginTop: 40,
    marginBottom: 60,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

const OnGoingProjects = ({ name, description, image }) => {
  const classes = useCustomStyles();
  return (
    <div
      className={classes.root + " ccard"}
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        boxShadow: ".5rem .5rem .5rem .5rem rgba(0,0,0,.15)",
        borderRadius: "5px",
        height: 400,
        backgroundPosition: "center center",
      }}
    >
      <div
        style={{
          background: "white",
          boxShadow: "0 1rem 1.5rem 0.5rem  rgba(0,0,0,.15)",
          minHeight: "45%",
          display: "flex",
          borderRadius: "5px",
          alignItems: "center",
          position: "absolute",
          right: "0px",
          bottom: "20px",
          width: "90%",
          padding: "12px 20px",
          opacity: 0.9,
        }}
      >
        <div>
          <Typography variant="body1" color="textSecondary" component="p">
            <b style={{ marginBottom: "10px" }}>{name}</b>
            <br />
            <span style={{ marginTop: "30px" }}>{description}</span>
          </Typography>
        </div>
      </div>
    </div>
  );
};
