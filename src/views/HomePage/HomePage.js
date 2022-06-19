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
        color="dimWhite"
        changeColorOnScroll={{
          height: CHANGE_NAV_ON_SCROLL,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/bg4.webp").default}
        style={{ height: "430px" }}
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
        </div>
      </Parallax>
      <Container>
        <div className={classNames(classes.main)}>
          <div className={classes.mainContainer + " main-container"}>
            <br />
            <Typography variant="h4" className="h4">
              Ongoing
            </Typography>
            <Typography
              variant="h4"
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
                marginLeft: 0,
                width: "100%",
              }}
            >
              <GridContainer style={{ width: "90%", margin: "auto" }}>
                <GridItem xs={12} sm={12} lg={5}>
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
                    Hear out Dr. Hassaan Furqan Khan, the principal investigator
                    for the Karachi water project talk about the water situation
                    in Karachi and how KWP plays a role. Follow our Instagram,
                    Facebook, and Twitter pages and for more information or
                    email us at{" "}
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
          {/* <GridContainer style={{ paddingTop: 50 }}>
            <div
              style={{
                width: "100%",
                padding: "30px 80px",
              }}
            >
              <GridContainer>
                <GridItem xs={12} sm={12} lg={5}>
                  <Typography
                    style={{
                      textAlign: "center",
                      letterSpacing: "10px",
                      textTransform: "uppercase",
                      lineHeight: "1",
                      fontWeight: "500",
                    }}
                    variant="h3"
                  >
                    Testimonials
                  </Typography>
                  <br />
                  <Typography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  lg={7}
                  style={{
                    padding: "0 100px",
                    height: 290,
                    position: "relative",
                  }}
                >
                  <ReactCardCarousel
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                    autoplay={true}
                    autoplay_speed={2500}
                    disable_box_shadow={true}
                    spread="wide"
                  >
                    {testimonials.map(({ name, date, comment }) => (
                      <Card
                        className={classes.root}
                        style={{
                          width: 250,
                          minHeight: 200,
                          boxShadow: ".5rem .5rem 1rem 1rem rgba(0,0,0,.15)",
                        }}
                      >
                        <CardHeader
                          avatar={
                            <Avatar
                              aria-label="recipe"
                              className={classes.avatar}
                            ></Avatar>
                          }
                          title={`${name}`}
                          subheader={`${date}`}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {comment}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                  </ReactCardCarousel>
                  
                </GridItem>
              </GridContainer>
            </div>
          </GridContainer> */}
          <GridContainer style={{ padding: "0 15px" }}>
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
