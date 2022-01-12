import React from "react";
import { connect } from "react-redux";

import { PropTypes } from "prop-types";
import Footer from "components/Footer/Footer";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Parallax from "components/Parallax/Parallax";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/node.js";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { getReadings } from "actions/readings";
import { GET_READINGS_AFTER } from "constrants";
import { LineChart } from "./Charts/LineChart";
import { getNode } from "actions/node";
import { Link } from "react-router-dom";
import { CHANGE_NAV_ON_SCROLL } from "constrants";

const useStyles = makeStyles(styles);

const Node = ({ getReadings, match, reading: { readings, loading } }) => {
  const classes = useStyles();
  React.useEffect(() => {
    setInterval(() => {
      console.log("Data restored !!");
      getReadings(match.params.key);
      const { data } = readings;
      if (data) {
        let content = Array.from(data).reverse();

        let reading = {
          battery_level: [],
          temperature: [],
          flow_rate: [],
          flow_count: [],
          total_flow: [],
          time_sampled: [],
        };
        content.map((item) =>
          Object.keys(reading).map((key) => reading[key].push(item[key]))
        );
        setReadingsData(reading);
      }
    }, GET_READINGS_AFTER);
  }, [getReadings, match.params.key]);

  const [readingsData, setReadingsData] = React.useState({
    battery_level: [],
    temperature: [],
    flow_rate: [],
    flow_count: [],
    total_flow: [],
    time_sampled: [],
  });

  // setTimeout(() => {
  //   if (!loading && node) {
  //     getReadings(match.params.key);

  //     }
  // }, GET_READINGS_AFTER);
  const getTimeDifference = (timesArray) => {
    // assuming array is latest to oldest
    var collect = [];
    for (var i = 1; i < timesArray.length; i++) {
      collect.push(timesArray[i] - timesArray[i - 1]);
    }
    return collect;
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
        // {...rest}
      />
      <Parallax image={require("assets/img/project/project1.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <h1 className={classes.title}>Node Details</h1>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Container>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridContainer
            className={classes.mainContainer + " main-container"}
            direction="column"
          >
            {!loading && readings.data ? (
              <>
                <GridContainer>
                  <GridItem>
                    <Typography variant="h4">
                      Visualizing data for node:{" "}
                      <span style={{ fontWeight: "bolder" }}>
                        {match.params.slug}
                      </span>
                    </Typography>
                  </GridItem>
                  <GridItem>
                    <Button
                      color="secondary"
                      style={{ float: "right" }}
                      variant="contained"
                    >
                      <Link
                        style={{ color: "white" }}
                        to={`/homenode/${match.params.key}/${match.params.slug}`}
                      >
                        Switch to Owner View
                      </Link>
                    </Button>
                  </GridItem>
                </GridContainer>

                <hr style={{ width: "100%" }} />
                <LineChart
                  labels={readingsData.time_sampled}
                  data={readingsData.battery_level}
                  ymin={0}
                  ymax={5}
                  heading={`Battery Level (Volts)`}
                  min={3.3}
                  max={4.5}
                />
                <LineChart
                  labels={readingsData.time_sampled}
                  data={getTimeDifference(readingsData.time_sampled)}
                  heading={`T2 - T1`}
                />
                <LineChart
                  labels={readingsData.time_sampled}
                  data={readingsData.flow_count}
                  heading={`Flow Count`}
                />
                <LineChart
                  labels={readingsData.time_sampled}
                  data={readingsData.total_flow}
                  heading={`Total Flow (L)`}
                />
                <LineChart
                  labels={readingsData.time_sampled}
                  data={readingsData.flow_rate}
                  ymin={0}
                  ymax={60}
                  heading={`Flow Rate (L/min)`}
                  min={0}
                  max={60}
                />
                <LineChart
                  labels={readingsData.time_sampled}
                  data={readingsData.temperature}
                  heading={`Temperature (C°)`}
                />
              </>
            ) : (
              <>Loading</>
            )}
          </GridContainer>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

Node.propTypes = {
  getReadings: PropTypes.func.isRequired,
  reading: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  reading: state.reading,
});

export default connect(mapStateToProps, { getReadings })(Node);
