import { Container, makeStyles } from "@material-ui/core";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import { dashboardLinks } from "constrants";
import React from "react";
import styles from "assets/jss/material-kit-react/views/readings.js";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import Footer from "components/Footer/Footer";

import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getNodes } from "../../actions/node";
import { getReadings } from "../../actions/readings";
import { DEFAULT_NODE } from "constrants";
import ReadingsPagination from "./ReadingsPagination/ReadingsPagination";
import { READINGS_PER_PAGE } from "constrants";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

const Readings = ({ match, reading, node, getNodes, getReadings }) => {
  const classes = useStyles();

  React.useEffect(() => {
    getNodes();
    getReadings(match.params.slug || DEFAULT_NODE);
  }, [getNodes, getReadings]);

  const currentPage = "Readings";

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
      <Parallax image={require("assets/img/data.png").default}>
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
              dashboardLinks={dashboardLinks.filter(
                ({ page }) => page !== currentPage
              )}
            />
            <GridContainer>
              <GridItem xs={12} sm={2}>
                {!node.loading &&
                  node.nodes &&
                  node.nodes.map((node) => (
                    <a href={`/readings/${node.slug}`}>
                      <p>{node.name}</p>
                    </a>
                  ))}
              </GridItem>
              <GridItem xs={12} sm={10}>
                {!reading.loading && reading.readings ? (
                  <ReadingsPagination
                    itemsPerPage={READINGS_PER_PAGE}
                    readings={reading.readings}
                  />
                ) : (
                  <>
                    <center>Loading</center>
                  </>
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

Readings.propTypes = {
  getNodes: PropTypes.func.isRequired,
  getReadings: PropTypes.func.isRequired,
  node: PropTypes.object.isRequired,
  reading: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  reading: state.reading,
  node: state.node,
});
export default connect(mapStateToProps, { getNodes, getReadings })(Readings);
