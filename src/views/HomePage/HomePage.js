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
import team from "./../../assets/img/team-banner.jpg";
import hu from "./../../assets/img/hu-logo.svg";
import hec from "./../../assets/img/hec-logo.svg";
import hashoo from "./../../assets/img/hashoo-logo.svg";
import { Link } from "react-router-dom";
import { projects } from "constrants";
import { CHANGE_NAV_ON_SCROLL } from "constrants";

const useStyles = makeStyles(styles);

const HomePage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="dimWhite"
        changeColorOnScroll={{
          height: CHANGE_NAV_ON_SCROLL,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/bg4.jpg").default}
        style={{ height: 430 }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div
                className={classes.brand + " brand"}
                style={{ textAlign: "center" }}
              >
                <br />
                <h2 className={classes.title + " title"}>About us</h2>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.subtitle + " subtitle"}
                  style={{
                    textAlign: "center",
                    width: "100%",
                    textTransform: "capitalize",
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
        </div>
      </Parallax>
      <Container>
        <div className={classNames(classes.main)}>
          <div className={classes.mainContainer + " main-container"}>
            <br />
            <hr style={{ width: "50%", margin: "auto" }} />
            <br />
            <Typography variant="h4" className="h4">
              Ongoing
            </Typography>
            <Typography
              variant="h3"
              style={{ color: "#461A55", fontWeight: "bold" }}
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
          <GridContainer style={{ padding: 20 }}>
            <GridItem
              style={{
                backgroundImage: `url(${team})`,
                height: "280px",
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
            </GridItem>
          </GridContainer>
          <div className={classes.mainContainer + " main-container"}>
            <Typography variant="h4">Supported through</Typography>
            <Typography
              variant="h3"
              style={{ color: "#461A55", fontWeight: "bold" }}
            >
              Grants
            </Typography>
            <br />
            <GridContainer style={{ justifyContent: "center" }}>
              <GridItem
                xs={12}
                sm={4}
                className={classes.iconContainer + " icon-container"}
              >
                <a href="https://habib.edu.pk" target="_blank">
                  <img src={hu} />
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
                  <img src={hec} />
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
                  <img src={hashoo} />
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
