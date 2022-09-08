import { Container, makeStyles, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import { Link } from "react-router-dom";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
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

const AlternateNetworks = ({ props }) => {
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
        image={require("assets/img/alternate.webp").default}
        style={{ height: 400 }}
        head="Alternate Networks"
      ></FrontParallax>
      <Container>
        <div className={classNames(classes.main)}>
          <GridContainer className={classes.mainContainer2 + " main-container"}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", marginBottom: 30 }}
            >
              Rethinking the Network
            </Typography>
            <Typography variant="body2">
              Rapid urbanization in Karachi’s low income settlements has
              resulted in a growing ‘infrastructural deficit’ that challenges
              citizens’ access to water. A diverse range of off-grid modes of
              water provisioning make service delivery possible for many
              disadvantaged neighborhoods. This study explores the heterogenous
              nature of alternative modes of water that go beyond the piped
              network and analyses them from a socio-technical perspective. The
              objective is to capture the processes undergirding these diverse
              arrangements and highlight the unfolding constraints. This is a
              qualitative study situated in a low income settlement, Lyari.
            </Typography>
            <div
              className="text-center bg-danger"
              style={{
                margin: "20px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
                width: "100%",
              }}
            >
              <img
                height={"100%"}
                src={require("assets/img/research/alternate.png").default}
              />
            </div>
            <br />
            <Typography variant="body2">
              A new mode of water delivery: 100-liter tanks on Suzukis spotted
              in Bihar Colony, Lyari
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

export default AlternateNetworks;
