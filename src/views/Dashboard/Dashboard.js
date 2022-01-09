import Header from "components/Header/Header";
import React from "react";

import styles from "assets/jss/material-kit-react/views/dashboard.js";
import { CardContent, makeStyles, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import classNames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getNodes } from "../../actions/node";
import Card from "components/Card/Card";
import { Link } from "react-router-dom";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import { dashboardLinks } from "constrants";

// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MAPS_KEY } from "constrants";
// import Map from "./Map/Map";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const useStyles = makeStyles(styles);

const Dashboard = ({ google }) => {
  const classes = useStyles();

  const currentPage = "Dashboard";

  const render = (status) => {
    return <h1>{status}</h1>;
  };

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
        // {...rest}
      />
      <Parallax image={require("assets/img/project/project1.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <h1 className={classes.title}>Dashboard</h1>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer
          className={classes.mainContainer + " main-container"}
          direction="column"
        >
          <DashboardHeader
            currentPage={
              dashboardLinks.filter(({ page }) => page === currentPage)[0]
            }
            dashboardLinks={dashboardLinks.filter(
              ({ page }) => page !== currentPage
            )}
          />
          <GridContainer>
            <GridItem></GridItem>
            Dashboard
            <GridItem style={{ height: "500px" }}>
              {/* <Wrapper apiKey={MAPS_KEY} render={render}>
                <Map />
              </Wrapper> */}
              <Map
                google={google}
                zoom={8}
                // style={mapStyles}
                style={{ width: "100%", height: "100%" }}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
              >
                <Marker position={{ lat: 48.0, lng: -122.0 }} />
              </Map>
            </GridItem>
          </GridContainer>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: MAPS_KEY,
})(Dashboard);
