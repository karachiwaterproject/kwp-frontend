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
import HomeParallax from "components/Parallax/HomeParallax";

const useStyles = makeStyles(styles);

const HomePage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  const testimonials = [
    { name: "user 1", comment: "hello world", date: "May 27, 2022" },
    { name: "user 2", comment: "hello world", date: "May 27, 2022" },
    { name: "user 3", comment: "hello world", date: "May 27, 2022" },
    { name: "user 4", comment: "hello world", date: "May 27, 2022" },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
      <HomeParallax image={require("assets/img/bg4.webp").default}>
        {/* <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div
                className={classes.brand + " brand"}
                style={{ textAlign: "center" }}
              >
                <br />
                <h2 className={classes.title + " title"}>About us</h2>
                <h3></h3>
                <Typography
                  variant="h6"
                  component="p"
                  className={classes.subtitle + " subtitle"}
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  The Karachi Water Project (KWP) is an interdisciplinary
                  research group engaged in investigating approaches to improve
                  water management in Karachi. The group, headed by Dr. Hassaan
                  F. Khan, strives to develop technological and policy-based
                  solutions to Karachi’s water challenges.
                </Typography>
              </div>
            </GridItem>
          </GridContainer>
        </div> */}
      </HomeParallax>
      <Container>
        <div className={classes.mainContainer + " main-container"}>
          <br />
          <Typography
            variant="h4"
            className="h4"
            style={{ borderLeft: "4px #3977C9 solid", paddingLeft: "10px" }}
          >
            Ongoing
          </Typography>
          <Typography
            variant="h4"
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
          <br />
          <br />
        </div>
      </Container>

      <GridContainer
        style={{
          position: "relative",
          width: "100%",
          margin: "auto",
        }}
        className="containVideo"
      >
        <img
          src={require("assets/img/wave-up.svg").default}
          width="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></img>
        <div
          className="subvideoContainer"
          style={{
            zIndex: 2,

            paddingLeft: 0,
            margin: "auto",
            width: "80%",
          }}
        >
          <GridContainer style={{ width: "90%", margin: "auto" }}>
            <GridItem xs={12} sm={12} lg={5}>
              <br />
              <br />
              <Typography
                variant="h3"
                style={{
                  fontWeight: "700",
                  letterSpacing: "4px",
                  color: "#212121",
                }}
                className="head"
              >
                Message
              </Typography>
              <hr style={{ width: "70%", float: "left" }} />
              <br />
              <Typography
                variant="body1"
                className="subhead"
                style={{ width: "100%" }}
              >
                Hear out Dr. Hassaan Furqan Khan, the principal investigator for
                the Karachi water project talk about the water situation in
                Karachi and how KWP plays a role. Follow our Instagram,
                Facebook, and Twitter pages and for more information or email us
                at{" "}
                <a href="mailto:waterprojectkarachi@gmail.com">
                  waterprojectkarachi@gmail.com
                </a>
                .
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={12} lg={1} />
            <GridItem
              xs={12}
              sm={12}
              lg={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <iframe
                className="video"
                src="https://www.youtube.com/embed/30dV3VBoLes"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  background: "#555555",
                }}
              ></iframe>
            </GridItem>
          </GridContainer>
        </div>
        <img
          src={require("assets/img/wave.svg").default}
          width="100%"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
          }}
        ></img>
      </GridContainer>
      <div>
        <div
          style={{
            backgroundImage: `url(${team})`,
            width: "100%",
            height: "350px",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            variant="h4"
            style={{ fontWeight: "900", color: "white" }}
          >
            The Team
          </Typography>
          <Link to="/team">
            <Button variant="outlined" className={classes.customButton}>
              See all Members
            </Button>
          </Link>
        </div>
      </div>
      <Container>
        <div>
          <div className={classes.mainContainer + " main-container"}>
            <Typography
              variant="h4"
              style={{ borderLeft: "4px #3977C9 solid", paddingLeft: "10px" }}
            >
              Supported through
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
              Grants
            </Typography>
            <br />
            <br />
            <GridContainer style={{ justifyContent: "center" }}>
              <GridItem
                xs={12}
                sm={3}
                className={classes.iconContainer + " icon-container"}
              >
                <a href="https://habib.edu.pk" target="_blank">
                  <img src={hu} alt="hu" width="150px" height="200px" />
                  <Typography variant="body2" className={classes.text}>
                    HU Internal Research Grant
                  </Typography>
                </a>
              </GridItem>

              <GridItem
                xs={12}
                sm={3}
                className={classes.iconContainer + " icon-container"}
              >
                <a
                  href="https://hec.gov.pk/english/pages/home.aspx"
                  target="_blank"
                >
                  <img src={hec} alt="hec" width="150px" height="200px" />
                  <Typography variant="body2" className={classes.text}>
                    National Research Program for Universities - HEC Pakistan
                  </Typography>
                </a>
              </GridItem>
              <GridItem
                xs={12}
                sm={3}
                className={classes.iconContainer + " icon-container"}
              >
                <a href="https://hashoofoundation.org" target="_blank">
                  <img src={hashoo} alt="hashoo" width="150px" height="180px" />
                  <Typography variant="body2" className={classes.text}>
                    Hashoo Foundation
                  </Typography>
                </a>
              </GridItem>
            </GridContainer>
            <br />
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default HomePage;
