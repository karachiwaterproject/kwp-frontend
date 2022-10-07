import Header from "components/Header/Header";
import React from "react";

import styles from "assets/jss/material-kit-react/views/dashboard.js";
import {
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
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

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MAPS_KEY } from "constrants";
// import Map from "./Map/Map";

// import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";
import { CHANGE_NAV_ON_SCROLL } from "constrants";

import { useHistory } from "react-router-dom";
import Spinner from "Spinner";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const useStyles = makeStyles(styles);

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Dashboard = ({
  google,
  getNodes,
  node: { nodes, loading },
  auth: {
    user: { nodes_access, role },
  },
}) => {
  const history = useHistory();
  const classes = useStyles();

  const [activeMarker, setActiveMarker] = React.useState({});
  const [selectedPlace, setSelectedPlace] = React.useState({});
  const [showingInfoWindow, setShowingInfoWindow] = React.useState(false);

  React.useEffect(async () => {
    await getNodes();

    // if (nodes_access[0] !== "all") {
    //   window.location.href = "/nodes";
    // }
  }, [getNodes, nodes_access]);

  const currentPage = "Dashboard";

  const render = (status) => {
    return <h1>{status}</h1>;
  };

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setSelectedPlace(props);
    setShowingInfoWindow(true);
    console.log(activeMarker, showingInfoWindow, selectedPlace);
  };

  const onInfoWindowClose = () => {
    setActiveMarker(null);
    setShowingInfoWindow(false);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setActiveMarker(null);
      setShowingInfoWindow(false);
    }
  };

  const [center, setCenter] = React.useState({
    lat: 13.084622,
    lng: 80.248357,
  });
  const ZOOM_LEVEL = 9;
  const mapRef = React.useRef();

  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: CHANGE_NAV_ON_SCROLL,
          color: "white",
        }}
        // {...rest}
      />
      <Parallax image={require("assets/img/data.webp").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <h2 className={classes.title}>Dashboard</h2>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Container>
        <div className={classNames(classes.main)}>
          <GridContainer
            className={classes.mainContainer + " main-container"}
            direction="column"
          >
            <DashboardHeader
              currentPage={
                dashboardLinks.filter(({ page }) => page === currentPage)[0]
              }
              dashboardLinks={
                role === "user"
                  ? dashboardLinks.filter(
                      ({ page }) => page !== "Readings" && page !== "Dashboard"
                    )
                  : role === "researcher" || role === "student_researcher"
                  ? dashboardLinks.filter(({ page }) => page !== "Dashboard")
                  : dashboardLinks.filter(({ page }) => page)
              }
            />
            <GridContainer>
              <GridItem style={{ height: "500px", padding: 0 }}>
                {/* <Wrapper apiKey={MAPS_KEY} render={render}>
                <Map />
              </Wrapper> */}
                {!loading && nodes ? (
                  <MapContainer
                    center={[24.8607, 67.0011]}
                    zoom={10}
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {nodes
                      .filter((node) => node.latitude && node.longitude)
                      .map(
                        ({
                          latitude,
                          longitude,
                          name,
                          total_flow,
                          count,
                          status,
                          slug,
                        }) => (
                          <Marker position={[latitude, longitude]}>
                            <Popup>
                              <div>
                                {/* <h1>{selectedPlace.name}</h1> */}
                                <Typography
                                  color="primary"
                                  style={{
                                    textTransform: "uppercase",
                                    fontSize: "13px",
                                    fontWeight: "bold",
                                    color:
                                      status === "active"
                                        ? "#1CC88A"
                                        : status === "inactive"
                                        ? "#F6C23E"
                                        : "#E33775",
                                  }}
                                >
                                  {name}
                                </Typography>
                                <Typography
                                  style={{ textTransform: "uppercase" }}
                                >
                                  <span style={{ fontWeight: "bold" }}>
                                    Total flow (L):
                                  </span>{" "}
                                  {total_flow}
                                </Typography>
                                <Typography
                                  style={{ textTransform: "uppercase" }}
                                >
                                  <span style={{ fontWeight: "bold" }}>
                                    Data points collected:
                                  </span>{" "}
                                  {count}
                                </Typography>
                                <Typography
                                  style={{ textTransform: "uppercase" }}
                                >
                                  <span style={{ fontWeight: "bold" }}>
                                    Status:
                                  </span>{" "}
                                  {status}
                                </Typography>
                              </div>
                            </Popup>
                          </Marker>
                          // <Marker
                          //   key={slug}
                          //   name={name}
                          //   total_flow={total_flow}
                          //   count={count}
                          //   status={status}
                          //   onClick={onMarkerClick}
                          //   position={{ lat: latitude, lng: longitude }}
                          // />
                        )
                      )}
                  </MapContainer>
                ) : (
                  <div style={{ textAlign: "center" }}>Loading ...</div>
                )}
              </GridItem>
            </GridContainer>
          </GridContainer>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

Dashboard.propTypes = {
  getNodes: PropTypes.func.isRequired,
  node: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  node: state.node,
  auth: state.auth,
});

export default connect(mapStateToProps, { getNodes })(Dashboard);
