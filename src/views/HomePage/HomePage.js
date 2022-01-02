import { Button, makeStyles, Typography } from "@material-ui/core";
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

const useStyles = makeStyles(styles);

const projects = [
  {
    name: "Development of a low-cost smart flowmeter network for domestic consumers",
    image: require("./../../assets/img/project1.jpg").default,
  },
  {
    name: "Towards a sustainable and equitable water pricing strategy for Karachi",
    image: require("./../../assets/img/project2.jpg").default,
  },
  {
    name: "Water security through a political-ecological lens: A case study of Lyari Township",
    image: require("./../../assets/img/project3.jpg").default,
  },
];

const HomePage = (props) => {
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
      <Parallax image={require("assets/img/bg4.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>What we are ?</h1>
                <h3 className={classes.subtitle}>
                  The Karachi Water Project (KWP) is an interdisciplinary
                  research group engaged in investigating approaches to improve
                  water management in Karachi. The group, headed by Dr. Hassaan
                  F. Khan, strives to develop technological and policy-based
                  solutions to Karachi’s water challenges.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.mainContainer}>
          <Typography variant="h4">
            OnGoing
            <br />
            <Typography
              variant="h3"
              style={{ color: "#461A55", fontWeight: "bold" }}
            >
              Projects
            </Typography>
          </Typography>
          <GridContainer>
            {projects.map(({ name, image }) => (
              <GridItem key={name} xs={4}>
                <OnGoingProjects name={name} image={image} />
              </GridItem>
            ))}
          </GridContainer>
        </div>

        <GridContainer style={{ padding: 20 }}>
          <GridItem
            style={{
              backgroundImage: `url(${team})`,
              height: "280px",
              backgroundSize: "contain",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              display: "flex",
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
        <div className={classes.mainContainer}>
          <Typography variant="h4">
            Supported through
            <br />
            <Typography
              variant="h3"
              style={{ color: "#461A55", fontWeight: "bold" }}
            >
              Grants
            </Typography>
          </Typography>
          <br />
          <GridContainer>
            <GridItem xs={4} className={classes.iconContainer}>
              <a href="https://habib.edu.pk" target="_blank">
                <img src={hu} />
                <Typography variant="body2" className={classes.text}>
                  HU Internal Research Grant
                </Typography>
              </a>
            </GridItem>

            <GridItem xs={4} className={classes.iconContainer}>
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
            <GridItem xs={4} className={classes.iconContainer}>
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
      <Footer />
    </div>
  );
};

export default HomePage;
